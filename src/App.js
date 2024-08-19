import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [selectedNote, setSelectedNote] = useState(null);
  const [notes, setnotes] = useState([
    {
      id: 1,
      title: "react",
      content: "react is used to create single web application.",
    },
    {
      id: 2,
      title: "react native",
      content: "react is used to create single web application.",
    },
  ]);

  const handleAddNote = (event) => {
    event.preventDefault(); // to prevent the form from submitting and refreshing the page, which is its default behavior.
    const newNote = {
      id: notes.length + 1,
      title: title,
      content: content,
    };
    setnotes([newNote, ...notes]);
    console.log(newNote);
    setTitle("");
    setContent("");
  };

  const selected = (note) => {
    setSelectedNote(note);
    setTitle(note.title);
    setContent(note.content);
  };

  const handleUpdateNote = (event) => {
    event.preventDefault();

    if (!selectedNote) {
      return;
    }

    const updatedNote = {
      id: selectedNote.id,
      title: title,
      content: content,
    };

    const updatedNotesList = notes.map((note) =>
      note.id === selectedNote.id ? updatedNote : note
    );

    setnotes(updatedNotesList);
    setTitle("");
    setContent("");
    setSelectedNote(null);
  };

  const handleCancel = () => {
    setSelectedNote(null);
    setTitle("");
    setContent("");
  };

  const deleteNote = (event, noteId) => {
    event.stopPropagation();
    const deleteN = notes.filter((note) => note.id !== noteId);
    setnotes(deleteN);
  };

  return (
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
          <button type="submit">Add Note</button>
        )}
      </form>

      <div className="notes-grid">
        {notes.map((note) => (
          <div
            key={note.id}
            onClick={() => selected(note)}
            className="note-item"
          >
            <div className="notes-header">
              <button onClick={(event) => deleteNote(event, note.id)}>x</button>
            </div>
            <h2 style={{ textTransform: "capitalize" }}>{note.title}</h2>
            <p>{note.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
