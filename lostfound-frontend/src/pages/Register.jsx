import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";

function Register() {

  const navigate = useNavigate();

  const [name, setName] =
    useState("");

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const handleRegister = async (e) => {

    e.preventDefault();

    try {

      const response =
        await API.post(
          "/auth/register",
          {
            name,
            email,
            password
          }
        );

      alert(
        response.data
      );

      navigate("/");

    } catch (error) {

      alert(
        "Registration Failed"
      );

      console.error(error);
    }
  };

  return (

    <div
      className="
      d-flex
      justify-content-center
      align-items-center"
      style={{
        minHeight: "80vh"
      }}
    >

      <div
        className="p-5"
        style={{
          width: "450px",
          borderRadius: "25px",
          background:
            "rgba(255,255,255,0.1)",
          backdropFilter:
            "blur(15px)",
          boxShadow:
            "0 0 25px #00ffff"
        }}
      >

        <h2
          className="
          text-center
          mb-4"
        >
          📝 Create Account
        </h2>

        <form
          onSubmit={handleRegister}
        >

          <input
            type="text"
            className="
            form-control
            mb-3"
            placeholder="Enter Name"
            value={name}
            onChange={(e) =>
              setName(
                e.target.value
              )
            }
          />

          <input
            type="email"
            className="
            form-control
            mb-3"
            placeholder="Enter Email"
            value={email}
            onChange={(e) =>
              setEmail(
                e.target.value
              )
            }
          />

          <input
            type="password"
            className="
            form-control
            mb-3"
            placeholder="Enter Password"
            value={password}
            onChange={(e) =>
              setPassword(
                e.target.value
              )
            }
          />

          <button
            type="submit"
            className="
            btn
            btn-info
            w-100"
          >
            Register
          </button>

        </form>

        <hr />

        <button
          className="
          btn
          btn-outline-light
          w-100"
          onClick={() =>
            navigate("/")
          }
        >
          Back To Login
        </button>

      </div>

    </div>
  );
}

export default Register;