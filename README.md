# ☕ Coffee R Us

A modern React-based coffee storefront and administrator portal built as a single-page application (SPA).  
This project demonstrates advanced React concepts including routing, reusable components, custom hooks, local persistence, shared state management, and responsive UI design.

---


## 📸 Screenshots


https://github.com/user-attachments/assets/c0af38c0-d807-474e-a2ae-b51a96d3ec52


---

## ✨ Features

- React Router multi-page SPA
- Glassmorphism-inspired responsive UI
- Dynamic coffee product cards
- Live coffee search functionality
- Add new coffee products through the Admin Portal
- Remove products dynamically
- Shopping cart system
- LocalStorage persistence using a custom hook
- Reusable component architecture
- Controlled forms with `useState`
- Responsive layouts and hover animations

---

## 🛠 Technologies Used

- React
- Vite
- React Router DOM
- JavaScript (ES6+)
- CSS3
- LocalStorage API

---

## 📂 Project Structure

```txt
src/
├── components/
│   ├── CoffeeCard.jsx
│   ├── CoffeeForm.jsx
│   └── Navbar.jsx
│
├── data/
│   └── coffeeData.js
│
├── hooks/
│   └── useLocalStorage.js
│
├── pages/
│   ├── AdminPortal.jsx
│   ├── Cart.jsx
│   ├── Home.jsx
│   └── Shop.jsx
│
├── App.jsx
├── App.css
├── main.jsx
└── index.css
```

---

## 🚀 Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/ROUSE-prog/coffee-r-us-showcase.git
```

### 2. Navigate Into the Project

```bash
cd coffee-r-us-showcase
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Start Development Server

```bash
npm run dev
```

---

## 🧠 Key React Concepts Demonstrated

### State Management
- `useState`
- Shared state across routes/components
- Controlled form inputs

### Routing
- React Router DOM
- Dynamic page navigation

### Persistence
- Custom `useLocalStorage` hook
- Cart and coffee data persist after refresh

### Component Architecture
- Reusable UI components
- Props and state relationships
- Dynamic rendering with `.map()`

---

## 💾 Custom Hook Example

```jsx
// Persist data inside localStorage
const [coffees, setCoffees] = useLocalStorage(
  "coffee-r-us-data",
  coffeeData
);
```

---

## 🧪 Future Improvements

- Product quantity controls
- Checkout flow
- Framer Motion page transitions
- Dark/Light theme toggle
- Backend database integration
- User authentication

---

## ⚠ Known Limitations

- No backend database
- Cart quantities are not grouped
- Products are stored locally in browser storage only
- No payment processing system

---


## 👨‍💻 Author

Steven Rouse

- GitHub: https://github.com/ROUSE-prog
- LinkedIn: https://www.linkedin.com/in/stevenrouse/

---

## 📄 License

This project is for educational and portfolio purposes.
