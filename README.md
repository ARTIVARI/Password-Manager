![Uploading password manager.png…]()


PassKey - MERN Stack Password Manager

Overview:
PassKey is a simple password manager built using the MERN (MongoDB, Express.js, React.js, Node.js) stack. This project is designed to manage and store user credentials for different websites securely. It features a minimalist frontend design with essential functionality for creating, editing, deleting, and viewing stored credentials.

Features:

Frontend:
Simple design with a form to input the site name, username, and password.
A table displaying all stored credentials fetched from the MongoDB database.
Ability to edit and delete credentials using dedicated buttons.

Backend:
CRUD operations using Express.js:
GET to fetch all stored credentials.
POST to add a new credential.
DELETE to remove a credential.
MongoDB database connection using a localhost instance.
Database name: Notehub.
Collection name: passwords.

Project Structure:
The project is organized into two main folders:

Frontend:
Contains the React.js code for the user interface.
Features a single form for input and a table to display the stored credentials.
Handles the edit and delete functionalities with simple buttons.

Backend:
Contains the Express.js server and API endpoints for database operations.
Connects to MongoDB using the mongoose library.
Installation and Setup
Follow these steps to set up the project locally:

Prerequisites:
Node.js
MongoDB installed and running locally

Clone the Repository
https://github.com/ARTIVARI/Password-Manager.git
cd Password-Manager

Backend Setup:
Navigate to the backend folder:
cd backend
Install dependencies:
npm install
Start the server:
npm start
The backend server will run on http://localhost:5000.

Frontend Setup:
Navigate to the frontend folder:
cd frontend
Install dependencies:
npm install
Start the React development server:
npm run dev

The frontend will be accessible at http://localhost:3000.

API Endpoints:
GET /api/passwords - Fetch all stored credentials.
POST /api/passwords - Add a new credential. The request body must include siteName, username, and password.
DELETE /api/passwords/:id - Delete a credential by its ID.

Database Configuration:
Database Name: Notehub
Collection Name: passwords
Make sure MongoDB is running locally and configured to accept connections on the default port (27017).

Usage:
Open the frontend in your browser (http://localhost:3000).
Use the form to add new credentials.
View all stored credentials in the table.
Use the edit and delete buttons to modify or remove credentials as needed.

Future Enhancements:
Add user authentication for secure access.
Encrypt stored passwords using a library like bcrypt or crypto.
Deploy the application on a cloud platform.

License:
This project is licensed under the MIT License. Feel free to contribute and modify the project.

Acknowledgments:
Special thanks to the open-source community for providing the tools and libraries that made this project possible.

