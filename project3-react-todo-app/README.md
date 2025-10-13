# Project 3: React Todo Application 🚀

A modern, responsive React application featuring a todo list management system with complete CRUD functionality and a contact form with validation.

## 🌟 Features

### **Todo Management**

- ✅ Add new todo items with validation
- ✅ Mark todos as complete/incomplete
- ✅ Delete todo items
- ✅ Filter todos by status (All, Active, Completed)
- ✅ Real-time counter for each filter category
- ✅ Keyboard accessibility support
- ✅ Empty state messaging

### **Contact Form**

- 📝 Comprehensive form validation
- 📧 Email format validation
- ✨ Real-time error feedback
- 💾 Success confirmation messages
- ♿ Screen reader accessibility

### **Navigation & UX**

- 🏠 Home page with welcoming interface
- 🧭 Responsive navigation bar with smooth transitions
- 📱 Mobile-first responsive design
- 🎨 Modern gradient styling and animations
- ⚡ Fast loading and smooth interactions

## 🛠️ Technologies Used

- **React 17.0.2** - Core library for building user interfaces
- **React Router DOM 5.2.0** - Client-side routing for SPA navigation
- **React Scripts 5.0.1** - Build tools and development server
- **CSS3** - Custom styling with modern features (Grid, Flexbox, Gradients)
- **JavaScript ES6+** - Modern JavaScript features

## 📦 Installation Instructions

### Prerequisites

- **Node.js** (version 14.0 or higher)
- **npm** (comes with Node.js)

### Step-by-Step Setup

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd Project-2/skewl/project3/my-react-app
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   # For Node.js v17+ compatibility
   npm start

   # Alternative for older Node.js versions
   NODE_OPTIONS="--openssl-legacy-provider" npm start
   ```

4. **Open in browser**
   - Navigate to `http://localhost:3000`
   - The app will automatically reload when you make changes

### Build for Production

```bash
npm run build
```

## 🏗️ Project Structure

```
my-react-app/
├── public/
│   └── index.html          # HTML template
├── src/
│   ├── components/         # Reusable components
│   │   ├── Navbar.js      # Navigation component
│   │   ├── Navbar.css     # Navigation styles
│   │   └── TodoList.js    # Todo management component
│   ├── views/             # Page components
│   │   ├── Home.js        # Home page
│   │   ├── Todos.js       # Todo page wrapper
│   │   └── Contact.js     # Contact form page
│   ├── App.js             # Main app component with routing
│   ├── App.css            # Global styles
│   ├── custom.css         # Additional custom styles
│   └── index.js           # React app entry point
├── package.json           # Dependencies and scripts
├── README.md             # This file
└── state-tree.md         # Application state documentation
```

## 🎯 Usage Guide

### **Home Page**

- Landing page with application overview
- Navigation instructions
- Responsive welcome interface

### **Todo List**

1. **Adding Todos**: Type in the input field and click "Add Todo" or press Enter
2. **Completing Todos**: Click on any todo text to toggle completion status
3. **Removing Todos**: Click the "Remove" button next to any todo
4. **Filtering**: Use the filter buttons to view All, Active, or Completed todos
5. **Counters**: Each filter shows the number of todos in that category

### **Contact Form**

1. Fill in all required fields (marked with \*)
2. Real-time validation provides immediate feedback
3. Submit the form to see success confirmation
4. Form resets automatically after successful submission

## 🎨 Design Features

- **Modern UI**: Clean, professional design with gradient backgrounds
- **Responsive**: Works seamlessly on desktop, tablet, and mobile devices
- **Accessibility**: ARIA labels, keyboard navigation, screen reader support
- **Animations**: Smooth transitions and hover effects
- **Color Scheme**: Professional blue/purple gradient with accessible contrast ratios

## 🔧 Development Features

- **Code Quality**: Comprehensive JSDoc documentation
- **Error Handling**: Form validation and user feedback
- **State Management**: Efficient React hooks usage
- **Performance**: Optimized re-renders and state updates
- **Maintainability**: Clean, modular component structure

## 🚀 Deployment

### Local Development

```bash
npm start
```

### Production Build

```bash
npm run build
npm install -g serve
serve -s build
```

## 🧪 Testing

Run the test suite:

```bash
npm test
```

## 📱 Browser Compatibility

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🐛 Troubleshooting

### Common Issues

**Node.js Compatibility Error**

```bash
# Solution: Use legacy OpenSSL provider
NODE_OPTIONS="--openssl-legacy-provider" npm start
```

**Port 3000 Already in Use**

```bash
# Solution: Use different port
PORT=3001 npm start
```

**Dependencies Installation Issues**

```bash
# Solution: Clear cache and reinstall
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Sam Ramseyer**

- Email: sam.ramseyer.88@gmail.com
- GitHub: [@samramseyer](https://github.com/samramseyer)

## 🎓 Academic Context

This project was developed as part of a React development course, demonstrating:

- Component-based architecture
- State management with hooks
- Form handling and validation
- Responsive design principles
- Accessibility best practices
- Modern JavaScript and React patterns

---

_Last updated: October 2025_
