import { useEffect, useState } from "react";
import Home from "./routes/Home";
import Login from "./routes/Login";
import Signup from "./routes/Signup";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

export default function App() {
  const [isLogin, setIslogin] = useState(false);
  const [products, setProducts] = useState([]);
  const token = localStorage.getItem("token");

  const verifToken = async () => {
    const response = await fetch(`http://localhost:3005/token`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        token: token,
      }),
    });
    const data = await response.json();
    if (data.status === 200) {
      return setIslogin(true);
    }
    localStorage.clear();
  };

  const getProducts = async () => {
    const response = await fetch("https://fakestoreapi.com/products?limit=10");
    const datas = await response.json();
    setProducts(datas);
  };

  useEffect(() => {
    verifToken();
    getProducts();
  }, []);
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={isLogin ? <Home products={products} /> : <Login />}
        />
        <Route
          path="/login"
          element={isLogin ? <Navigate to={"/"} /> : <Login />}
        />
        <Route
          path="/register"
          element={isLogin ? <Navigate to={"/"} /> : <Signup />}
        />
      </Routes>
    </Router>
  );
}
