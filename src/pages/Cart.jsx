import React from "react";

function Cart({ cart, removeFromCart }) {
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <main className="shop-page">
      <h1>Your Cart</h1>

      {cart.length === 0 ? (
        <div className="empty-state">
          <h2>Your cart is empty</h2>
          <p>Add coffee from the shop page.</p>
        </div>
      ) : (
        <>
          <div className="coffee-grid">
            {cart.map((item) => (
              <div className="coffee-card" key={item.id}>
                <img src={item.image} alt={item.name} className="coffee-image" />

                <div className="coffee-content">
                  <h2>{item.name}</h2>
                  <p>{item.description}</p>
                  <span>{item.origin}</span>
                  <h3>${item.price}</h3>

                  <button
                    className="delete-btn"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Remove from Cart
                  </button>
                </div>
              </div>
            ))}
          </div>

          <h2 className="cart-total">Total: ${total}</h2>
        </>
      )}
    </main>
  );
}

export default Cart;