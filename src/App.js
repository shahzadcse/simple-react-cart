import { useEffect, useReducer } from "react";
import Cart from "./components/Cart";
import Products from "./components/Products";
import "./App.css";
import cartReducer from "./reducers/cartReducer";
import axios from "axios";

function App() {
  const [state, dispatch] = useReducer(cartReducer, { cart: [], products: [] });

  const fetchProducts = async () => {
    const { data } = await axios.get("https://dummyjson.com/products");
    dispatch({ type: "ADD_PRODUCTS", payload: data.products });
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="App">
      <Products state={state} dispatch={dispatch} />
      <Cart state={state} dispatch={dispatch} />
    </div>
  );
}

export default App;
