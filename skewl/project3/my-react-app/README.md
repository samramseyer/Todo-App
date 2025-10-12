# My React App

This is a simple React application that includes two main views: Todos and Contact. The application allows users to manage a list of todos and submit a contact form.

## Features

- **Todos View**: 
  - Add new todo items
  - Remove todo items
  - Mark todo items as completed
  - Filter todos based on their status (all, completed, active)

- **Contact View**: 
  - A controlled form to submit user information
  - Fields for first name, last name, email, and comments

## Technologies Used

- React
- React Router
- CSS for styling

## Getting Started

To run this project locally, follow these steps:

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate into the project directory:
   ```
   cd my-react-app
   ```

3. Install the dependencies:
   ```
   npm install
   ```

4. Start the development server:
   ```
   npm start
   ```

5. Open your browser and go to `http://localhost:3000` to view the application.

## Folder Structure

```
my-react-app
├── public
│   └── index.html
├── src
│   ├── components
│   │   ├── Navbar.js
│   │   └── TodoList.js
│   ├── views
│   │   ├── Todos.js
│   │   └── Contact.js
│   ├── App.js
│   ├── index.js
│   └── App.css
├── package.json
└── README.md
```

## License

This project is licensed under the MIT License.