import useLocalStorage from "./hooks/useLocalStorage";
import { Routes, Route } from "react-router-dom";
import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import AdminPortal from "./pages/AdminPortal";
import Cart from "./pages/Cart";

import coffeeData from "./data/coffeeData";
import "./App.css";

function App() {
  // Persist coffee and cart data in localStorage
const [coffees, setCoffees] = useLocalStorage(
  "coffee-r-us-data",
  coffeeData
);

const [cart, setCart] = useLocalStorage(
  "coffee-r-us-cart",
  []
);


// Add a new coffee product to storefront state
function addCoffee(newCoffee) {
  setCoffees([...coffees, newCoffee]);
}

  // Remove a coffee product from the storefront
function deleteCoffee(id) {
  setCoffees(
    coffees.filter((coffee) => coffee.id !== id)
  );
}

  function addToCart(coffee) {
    setCart([...cart, coffee]);
  }

  function removeFromCart(id) {
    setCart(cart.filter((item) => item.id !== id));
  }

  return (
    <div className="app-shell">
      <Navbar cartCount={cart.length} />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/shop"
          element={
            <Shop
              coffees={coffees}
              deleteCoffee={deleteCoffee}
              addToCart={addToCart}
            />
          }
        />

        <Route path="/admin" element={<AdminPortal addCoffee={addCoffee} />} />

        <Route
          path="/cart"
          element={<Cart cart={cart} removeFromCart={removeFromCart} />}
        />
      </Routes>
    </div>
  );
}

export default App;