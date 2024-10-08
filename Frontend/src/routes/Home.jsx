import Promotions from "../components/Promotions";
import Navbar from "../components/Navbar";
import { Cta } from "../components/Cta";
import { GlobalContext } from "../context/User";
import { useContext, useState, useEffect } from "react";
import { Cart } from "../components/Cart";

export default function Home({ products }) {
  const [localCart, setLocalCart] = useState([]);
  const { state, dispatch } = useContext(GlobalContext);

  async function handleAddToCart(e, id, price, title, img) {
    dispatch({
      type: "SET_PRODUCT",
      payload: { title, price, img },
    });

    const cartIsExist = localCart.find((item) => item.id === id);
    if (cartIsExist) {
      setLocalCart(
        localCart.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      setLocalCart([
        ...localCart,
        { id, name: title, title, price, img, quantity: 1 },
      ]);
    }
  }
  const removeItem = (id) => {
    const newCart = localCart.filter((item) => item.id !== id);
    setLocalCart(newCart);
  };

  useEffect(() => {
    setLocalCart(state.cart);
  }, []);

  return (
    <>
      <Promotions />
      <Navbar localCart={localCart} />
      <Cta handleAddToCart={handleAddToCart} products={products} />
      <Cart localCart={localCart} removeItem={removeItem} />
    </>
  );
}
