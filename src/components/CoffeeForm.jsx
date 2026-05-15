import { useState } from "react";
import React from "react";

function CoffeeForm({ addCoffee }) {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    origin: "",
    price: "",
    image: "",
  });

// Handle controlled form input updates
function handleChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  }

 // Create a new coffee object and reset form fields
function handleSubmit(event) {
    event.preventDefault();

    const newCoffee = {
      id: crypto.randomUUID(),
      ...formData,
      price: Number(formData.price),
    };

    addCoffee(newCoffee);

    setFormData({
      name: "",
      description: "",
      origin: "",
      price: "",
      image: "",
    });
  }

  return (
    <form
      className="coffee-form"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        name="name"
        placeholder="Coffee Name"
        value={formData.name}
        onChange={handleChange}
      />

      <textarea
        name="description"
        placeholder="Description"
        value={formData.description}
        onChange={handleChange}
      />

      <input
        type="text"
        name="origin"
        placeholder="Origin"
        value={formData.origin}
        onChange={handleChange}
      />

      <input
        type="number"
        name="price"
        placeholder="Price"
        value={formData.price}
        onChange={handleChange}
      />

      <input
        type="text"
        name="image"
        placeholder="Image URL"
        value={formData.image}
        onChange={handleChange}
      />

      <button type="submit">
        Add Coffee
      </button>
    </form>
  );
}

export default CoffeeForm;