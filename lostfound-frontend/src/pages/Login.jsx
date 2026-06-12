import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";

function Login() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {

    e.preventDefault();

    console.log("LOGIN BUTTON CLICKED");
    console.log("Email:", email);
    console.log("Password:", password);

    try {

      console.log("Sending request to backend...");

      const response = await API.post(
        "/auth/login",
        {
          email,
          password
        }
      );

      console.log("FULL RESPONSE:", response);

      localStorage.setItem(
        "token",
        response.data
      );

      console.log(
        "TOKEN SAVED:",
        localStorage.getItem("token")
      );

      alert("Login Successful");

      navigate("/dashboard");

    } catch (error) {

      console.log("ERROR OBJECT:", error);

      if (error.response) {

        console.log(
          "STATUS:",
          error.response.status
        );

        console.log(
          "DATA:",
          error.response.data
        );

      } else if (error.request) {

        console.log(
          "NO RESPONSE FROM SERVER"
        );

        console.log(
          error.request
        );

      } else {

        console.log(
          "ERROR MESSAGE:",
          error.message
        );

      }

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