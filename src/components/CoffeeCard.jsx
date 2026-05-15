function CoffeeCard({
  coffee,
  deleteCoffee,
  addToCart,
}) {
  return (
    <div className="coffee-card">
      <img
        src={coffee.image}
        alt={coffee.name}
        className="coffee-image"
      />

      <div className="coffee-content">
        <h2>{coffee.name}</h2>

        <p>{coffee.description}</p>

        <span>{coffee.origin}</span>

        <h3>${coffee.price}</h3>

        <button
          className="cart-btn"
          onClick={() => addToCart(coffee)}
        >
          Add To Cart
        </button>

        <button
          className="delete-btn"
          onClick={() =>
            deleteCoffee(coffee.id)
          }
        >
          Remove
        </button>
      </div>
    </div>
  );
}

export default CoffeeCard;