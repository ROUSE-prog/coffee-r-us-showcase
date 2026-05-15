import CoffeeForm from "../components/CoffeeForm";
import React from "react"; 

function AdminPortal({ addCoffee }) {
  return (
    <main className="admin-page">
      <h1>Admin Portal</h1>

      <CoffeeForm addCoffee={addCoffee} />
    </main>
  );
}

export default AdminPortal;