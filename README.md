Expense Tracker (MERN)

This is my first MERN (MongoDB, Express, React, Node.js) project.
I built it as a learning project to understand the full-stack development process. The app helps track expenses by storing them in a MongoDB database and displaying them through a simple UI.

🚀 Features

Add, view, and manage expenses

Backend built with Node.js, Express, and MongoDB

Frontend with React (basic UI)

Environment variables handled with dotenv

🛠️ Tech Stack

Frontend: React

Backend: Node.js, Express

Database: MongoDB (Mongoose for ODM)

Other: CORS, dotenv

📂 Project Structure
/backend       → Express server + MongoDB connection
/frontend      → React app (UI)
/.env          → MongoDB connection string & environment variables
package.json   → Dependencies & scripts

⚙️ Setup Instructions

Clone the repo

git clone https://github.com/H-1709/expense-tracker.git
cd expense-tracker


Install dependencies

npm install


Set up environment variables
Create a .env file in the root directory and add:

MONGO_URI=your_mongodb_connection_string
PORT=5000


Run the backend

node index.js


Run the frontend (if React is set up in /frontend)

cd frontend
npm start

📖 Notes

This is my first MERN project, so the focus is on learning rather than perfect design.

I will improve the UI/UX and add more features in the future.
