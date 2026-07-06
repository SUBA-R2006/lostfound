import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";

function Login() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {

    e.preventDefault();

    try {

      const response = await API.post(
        "/auth/login",
        {
          email,
          password
        }
      );

      // Backend returns these strings when login fails
      if (
        response.data === "User Not Found" ||
        response.data === "Invalid Password"
      ) {

        alert(response.data);
        return;
      }

      // Save JWT Token
      localStorage.setItem(
        "token",
        response.data
      );

      alert("Login Successful");

      navigate("/dashboard");

    } catch (error) {

      console.error(error);

      alert("Login Failed");
    }
  };

  return (
    <div>

      <h2>Login</h2>

      <form onSubmit={handleLogin}>

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
        />

        <br /><br />

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
        />

        <br /><br />

        <button type="submit">
          Login
        </button>

      </form>

      <br />

      <button
        onClick={() =>
          navigate("/register")
        }
      >
        Register
      </button>

    </div>
  );
}

export default Login;