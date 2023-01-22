import { useState, useEffect } from "react";

const Cart = ({ state, dispatch }) => {
  const [total, setTotal] = useState(0);

  const { cart } = state;

  useEffect(() => {
    setTotal(cart.reduce((acc, curr) => acc + curr.qty * curr.price, 0));
  }, [cart]);

  const qtyChange = (id, qty) => {
    dispatch({ type: "QTY_UPDATE", payload: { id, qty } });
  };

  return (
    <div className="cart">
      <div>
        <h2>Your Cart</h2>
        {cart.length ? (
          <div>
            <p className="cart__text">
              Your cart total is <span>${total}</span>
              <small>Number of items in your cart : {cart.length} </small>
            </p>
            {cart.map((c) => {
              return (
                <div key={c.id}>
                  <div
                    className="cart__desc"
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <div>{<img src={c.thumbnail} alt={c.title} />}</div>
                    <div>
                      <p>{c.title}</p>
                    </div>

                    <div className="cart__qty">
                      <b>${c.price * c.qty}</b>
                      <div>
                        <button onClick={() => qtyChange(c.id, c.qty - 1)}>
                          -
                        </button>
                        <span>{c.qty}</span>
                        <button onClick={() => qtyChange(c.id, c.qty + 1)}>
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <p>Your Cart is Empty !</p>
        )}
      </div>
    </div>
  );
};

export default Cart;
