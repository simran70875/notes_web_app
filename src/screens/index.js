import React, { useEffect, useState } from "react";
import "../App.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchNotes } from "./store/reducers/noteSlice";

import { postWithoutToken } from "./services/post";
import { paths } from "./config/paths";
import { putWithoutToken } from "./services/put";
import { deleteWithoutToken } from "./services/delete";
import { logout } from "./store/reducers/authReducer";

const Main = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [selectedNote, setSelectedNote] = useState(null);
  const userID = useSelector((state) => state.auth.userid);
  const username = useSelector((state) => state.auth.username);
  const notes = useSelector((state) => state.getNotes.notes);
  const status = useSelector((state) => state.getNotes.status);
  const error = useSelector((state) => state.getNotes.error);

  useEffect(() => {
    dispatch(fetchNotes());
  }, [dispatch]);

  const handleAddNote = async (event) => {
    event.preventDefault(); // to prevent the form from submitting and refreshing the page, which is its default behavior.
    const newNote = {
      userID: userID,
      title: title,
      content: content,
    };
    await postWithoutToken(paths.addNote, newNote);
    dispatch(fetchNotes());
    setTitle("");
    setContent("");
  };

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "failed") {
    return <div>Error: {error}</div>;
  }

  const selected = (note) => {
    setSelectedNote(note);
    setTitle(note.title);
    setContent(note.content);
  };

  const handleUpdateNote = async (event) => {
    event.preventDefault();

    if (!selectedNote) {
      return;
    }

    const updatedNote = {
      title: title,
      content: content,
    };
    const res = await putWithoutToken(
      `${paths.updateNote}/${selectedNote._id}`,
      updatedNote
    );
    console.log(res);
    dispatch(fetchNotes());

    setTitle("");
    setContent("");
    setSelectedNote(null);
  };

  const handleCancel = () => {
    setSelectedNote(null);
    setTitle("");
    setContent("");
  };

  const deleteNote = async (event, noteId) => {
    event.stopPropagation();
    await deleteWithoutToken(`${paths.deleteNote}/${noteId}`);
    dispatch(fetchNotes());
  };

  return (
    <div>
      <div className="header">
        <h2 style={{ textTransform: "capitalize" }}>Welcome {username} :)</h2>
        <button
          style={{
            backgroundColor: "#af4c4c",
            border: "none",
            paddingRight: 10,
            paddingLeft: 10,
            color: "#fff",
          }}
          onClick={() => {
            dispatch(logout());
          }}
        >
          Logout
        </button>
      </div>
      <div className="app-container">
        <form
          onSubmit={(event) =>
            selectedNote ? handleUpdateNote(event) : handleAddNote(event)
          }
          className="note-form"
        >
          <input
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            placeholder="Title"
            required
          />
          <textarea
            value={content}
            onChange={(event) => setContent(event.target.value)}
            placeholder="Content"
            rows={10}
            required
          />
          {selectedNote ? (
            <div className="edit-buttons">
              <button type="submit">Save</button>
              <button onClick={handleCancel}>Cancel</button>
            </div>
          ) : (
            <button style={{ marginBottom: 30 }} type="submit">
              Add Note
            </button>
          )}
        </form>

        <div className="notes-grid">
          {notes.map((note) => (
            <div
              key={note._id}
              onClick={() => selected(note)}
              className="note-item"
            >
              <div className="notes-header">
                <button onClick={(event) => deleteNote(event, note._id)}>
                  x
                </button>
              </div>
              <h2 style={{ textTransform: "capitalize" }}>{note.title}</h2>
              <p>{note.content}</p>
            </div>
          ))}
        </div>
      </div>{" "}
    </div>
  );
};

export default Main;
