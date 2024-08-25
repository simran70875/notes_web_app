
# Web Notes App

## About the Project

The **Web Notes App** is a full-stack web application designed to help users manage their notes and tasks efficiently. Users can register, log in, create, update, and delete notes or tasks. The app provides a simple and intuitive interface to keep track of daily tasks, ideas, or important information.

## Demo

Go to "[text](https://notes-web-app-puce.vercel.app/login)"

## Purpose

The purpose of this project is to create a user-friendly notes application that allows users to manage their tasks and notes in one place. The app is built with modern web technologies, ensuring a seamless user experience while offering robust backend support for data management and storage.

## Features

- **User Authentication**: Secure user registration and login system.
- **Create Notes**: Users can create new notes or tasks.
- **Update Notes**: Users can update existing notes or tasks.
- **Delete Notes**: Users can delete notes or tasks when they are no longer needed.
- **Responsive Design**: The app is fully responsive, ensuring a consistent experience across devices.

## Technologies Used

- **Frontend**: React.js, HTML, CSS, Bootstrap
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Version Control**: Git

## Setup Instructions

1. **Clone the repository**:
    ```bash
    git clone https://github.com/your-username/web-notes-app.git
    cd web-notes-app
    ```

2. **Install dependencies**:
    - Install frontend dependencies:
        ```bash
        cd client
        npm install
        ```
    - Install backend dependencies:
        ```bash
        cd ../server
        npm install
        ```

3. **Set up environment variables**:
    - Create a `.env` file in the `server` directory with the following content:
        ```
        MONGO_URI=your-mongodb-connection-string
        JWT_SECRET=your-jwt-secret
        PORT=5000
        ```
    - Replace the placeholders with your actual MongoDB connection string and JWT secret.

4. **Run the application**:
    - Start the backend server:
        ```bash
        cd server
        npm start
        ```
    - Start the frontend development server:
        ```bash
        cd client
        npm start
        ```

5. **Access the application**:
    - Open your web browser and go to `https://localhost:3000` to view the app.


