🏭 Warehouse Robot Dashboard

A responsive and interactive frontend simulation of a warehouse robot management system.
This project demonstrates UI/UX design, component-based architecture, global state management, real‑time updates, and data visualization using modern React tooling.
Steps
# 1. Clone the repository


# 2. Install dependencies
npm install


# 3. Start the development server
npm run dev
Open your browser at:
http://localhost:5173


🛠 Tech Stack

React.js – Component-based UI development

JavaScript (ES6+) – Core language
Redux Toolkit – Global state management
React Redux – Binding Redux with React
React Router DOM – Client-side routing
Tailwind CSS – Utility-first styling 
Recharts – Data visualization for analytics

🧩 Component Architecture

The project follows a feature-based and scalable folder structure, similar to real-world production apps.
src/
│── main.jsx 
│── App.jsx 
│
├── app/
│ └── store.js 
│
├── features/
│ ├── auth/ authSlice.js
│ ├── bots/ botsSlice.js
│ └── tasks/ tasksSlice.js
│
├── pages/ 
│ ├── Login.jsx
│ ├── Dashboard.jsx
│ ├── Bots.jsx
│ ├── TaskCreate.jsx
│ ├── TaskQueue.jsx
│ ├── Analytics.jsx
│ └── MapPage.jsx
│
├── components/
│ ├── Navbar.jsx
│ ├── Footer.jsx
│ └── BotCard.jsx
│
└── index.css

This separation ensures:
Reusability
Maintainability
Clear responsibility boundaries

Data Flow Explanation

1.This application follows a unidirectional data flow:
User Interaction
User performs an action (login, create task, navigate pages)

2.Redux Action Dispatch
UI dispatches actions (login, addTask, updateBots, etc.)

3.Redux Store Update
Reducers update global state in slices

4.UI Re-render
Components subscribed via useSelector re-render automatically.

Real-Time Simulation
Bot data updates every 10 seconds using setInterval
Task queue removes one task every 3 seconds (FIFO simulation)
No backend or persistent storage is used — all data is simulated in-memory.

State Management Reasoning
Why Redux Toolkit?
Centralized state for bots, tasks, and authentication
Predictable state transitions
Avoids unnecessary prop drilling
Makes real-time updates easier to coordinate

State Slices:
Slice	 Responsibility
auth	 Login state and user session
bots	 Robot status, battery, speed, tasks
tasks	 Task creation and FIFO queue

Authentication Design

Login state is stored only in Redux
No use of localStorage or cookies
Matches assignment requirement and keeps logic simple

Analytics & Visualization
Bot status distribution (Pie Chart)
Battery levels per bot (Bar Chart)
These metrics help visualize warehouse health and workload distribution.

🗺 Bonus: Map Page

Upload and render warehouse SVG layout
Bots are visualized as moving circles
Positions are randomly generated and updated every second
The map demonstrates SVG handling and real-time visual updates without focusing on physical accuracy.

Summary
This project showcases:
Clean React architecture
Global state management
Real-time UI updates
Data visualization
Scalable folder structure
It is designed as a frontend-focused simulation, suitable for interviews and take-home assignments.
