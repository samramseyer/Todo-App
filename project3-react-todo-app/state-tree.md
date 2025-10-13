# State Tree for Project 3 (React Todo App)

This document describes the main pieces of state used in the application and how they are structured.

```
state
├── todos: [
│     {
│       text: string,
│       completed: boolean
│     },
│     ...
│   ]
├── inputValue: string
├── filter: "all" | "active" | "completed"
├── contactForm: {
│     firstName: string,
│     lastName: string,
│     email: string,
│     comments: string
│   }
```

## Description

- **todos**: An array of todo objects, each with a text and completed status.
- **inputValue**: The current value of the todo input field.
- **filter**: The current filter applied to the todo list (all, active, or completed).
- **contactForm**: An object holding the values for the contact form fields.
