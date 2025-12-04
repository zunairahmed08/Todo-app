# React Todo List App

## Overview
This is a **simple Todo List application** built with React.  
The application demonstrates the use of **reusable components**, **props passing**, and **state management** with `useState`.  
Users can **add** and **delete** todo items dynamically.

---

## Features
- Add new todo items using a prompt input.
- Display a list of todos in a clean and organized UI.
- Delete any todo item with a single click.
- Reusable components: `TodoList` and `TodoItem`.
- Simple and responsive CSS styling.

---

## Component Architecture

App.js
│
└── TodoList.jsx
│
└── TodoItem.jsx


### Explanation:
- **App.js**  
  - Main component holding the state (`todos`)  
  - Handles adding and deleting todos  

- **TodoList.jsx**  
  - Receives todos as props from App  
  - Maps todos and renders `TodoItem` components  

- **TodoItem.jsx**  
  - Receives individual todo data as props  
  - Displays todo text and delete button  
  - Calls `onDelete` function passed from parent

---

## Installation

1. Clone the repository:
```bash
git clone https://github.com/zunairahmed08/Todo-app.git


Navigate to the project folder:

cd todo-app


Install dependencies:

npm install


Start the development server:

npm start


Open your browser and go to:

http://localhost:3000

Technologies Used

React.js

JavaScript (ES6+)

CSS3


Empty Todo List

Add Todo Prompt

Todos displayed

Delete Todo action
