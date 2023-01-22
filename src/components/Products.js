const Products = ({ state, dispatch }) => {
  const { products, cart } = state;
  console.log(state);
  return (
    <div className="products">
      {products.map((prod) => {
        return (
          <div className="products__card" key={prod.id}>
            <img src={prod.thumbnail} alt={prod.title} />
            <div>
              {" "}
              <p>{prod.title}</p>
              <b>${prod.price}</b>{" "}
            </div>
            {cart.some((c) => c.id === prod.id) ? (
              <button
                className="btnRed"
                onClick={() =>
                  dispatch({
                    type: "REMOVE_FROM_CART",
                    payload: prod,
                  })
                }
              >
                Remove from cart
              </button>
            ) : (
              <button
                className="btnGreen"
                onClick={() =>
                  dispatch({
                    type: "ADD_TO_CART",
                    payload: {
                      id: prod.id,
                      title: prod.title,
                      thumbnail: prod.thumbnail,
                      price: prod.price,
                      qty: 1,
                    },
                  })
                }
              >
                Add to cart
              </button>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Products;
