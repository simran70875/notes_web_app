// const baseUrl = "http://localhost:8000";
const baseUrl = "https://notes-web-app-puce.vercel.app";

export const paths = {
  // auth
  login: `${baseUrl}/login`,
  register: `${baseUrl}/register`,
  addNote :`${baseUrl}/addNote`,
  getNotes :`${baseUrl}/getNotes`,
  deleteNote :`${baseUrl}/deleteNote`,
  updateNote :`${baseUrl}/editNote`,
}