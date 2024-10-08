import { useState, useContext } from "react";
import RememberForgot from "../components/RememberForgot";
import { GlobalContext } from "../context/User";

export default function InputBox({ isLogin, username, password }) {
  const [email, setEmail] = useState("");
  const [user, setUsername] = useState("");
  const [pass, setPassword] = useState("");
  const [confirmpass, setConfirmPass] = useState("");
  const { state, dispatch } = useContext(GlobalContext);

  const setUser = (user) => {
    dispatch({ type: "SET_USER", payload: user });
  };

  async function handleRegister() {
    const response = await fetch(`http://localhost:3005/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        username: user,
        password: pass,
        confirmpass: confirmpass,
      }),
    });
    const data = await response.json();
    if (data.status === 200 || data.status === 201) {
      setUser(data.user);
      location.href = "/login";
    } else {
      alert(data.msg);
    }
  }

  async function handleLogin() {
    const response = await fetch(`http://localhost:3005/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: user,
        password: pass,
      }),
    });
    const data = await response.json();
    console.log(data);
    if (data.status === 200 || data.status === 201) {
      location.reload();
      localStorage.setItem("user", data.user);
      localStorage.setItem("token", data.token);
    } else {
      alert(data.msg);
    }
  }

  return (
    <>
      {isLogin ? (
        <>
          <div className="input-box">
            <input
              name="username"
              type="text"
              id={username}
              placeholder={username}
              value={user}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="input-box">
            <input
              name="password"
              type="password"
              id={password}
              placeholder={password}
              value={pass}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </>
      ) : (
        <>
          <div className="input-box">
            <input
              name="email"
              type="email"
              id="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input-box">
            <input
              name="username"
              type="text"
              id={username}
              placeholder={username}
              value={user}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="input-box">
            <input
              name="password"
              type="password"
              id={password}
              placeholder={password}
              value={pass}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="input-box">
            <input
              name="password"
              type="password"
              id="confirmpass"
              placeholder="Confirm pass"
              value={confirmpass}
              onChange={(e) => setConfirmPass(e.target.value)}
            />
          </div>
        </>
      )}
      {isLogin ? <RememberForgot /> : null}
      <div className="btn-login">
        <button onClick={isLogin ? handleLogin : handleRegister}>
          {isLogin ? "Login" : "Signup"}
        </button>
      </div>
    </>
  );
}
