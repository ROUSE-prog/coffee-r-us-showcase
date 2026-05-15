import { useState } from "react";
import CoffeeCard from "../components/CoffeeCard";
import React from "react";

function Shop({ coffees, deleteCoffee, addToCart }) {
  const [searchTerm, setSearchTerm] = useState("");

// Filter coffee cards based on search input
const filteredCoffee = coffees.filter((coffee) =>
  coffee.name.toLowerCase().includes(
    searchTerm.toLowerCase()
  )
);

  return (
    <main className="shop-page">
      <h1>Shop Coffee</h1>

      <input
        type="text"
        placeholder="Search coffee..."
        className="search-input"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {filteredCoffee.length === 0 && (
        <div className="empty-state">
          <h2>No coffees found</h2>
          <p>Try searching for another blend.</p>
        </div>
      )}

      <div className="coffee-grid">
        {filteredCoffee.map((coffee) => (
          <CoffeeCard
  key={coffee.id}
  coffee={coffee}
  deleteCoffee={deleteCoffee}
  addToCart={addToCart}
/>
        ))}
      </div>
    </main>
  );
}

export default Shop;