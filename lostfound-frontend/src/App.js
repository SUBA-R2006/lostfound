import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import PrivateRoute from "./components/PrivateRoute";

import Login from "./pages/Login";
import Register from "./pages/Register";

import Dashboard from "./pages/Dashboard";
import AddItem from "./pages/AddItem";
import MyItems from "./pages/MyItems";
import AllItems from "./pages/AllItems";
import SearchItems from "./pages/SearchItems";

function App() {
  return (
    <>
      <Navbar />

      <div className="container mt-4">

        <Routes>

          <Route
            path="/"
            element={<Login />}
          />

          <Route
            path="/register"
            element={<Register />}
          />

          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />

          <Route
            path="/add-item"
            element={
              <PrivateRoute>
                <AddItem />
              </PrivateRoute>
            }
          />

          <Route
            path="/my-items"
            element={
              <PrivateRoute>
                <MyItems />
              </PrivateRoute>
            }
          />

          <Route
            path="/all-items"
            element={
              <PrivateRoute>
                <AllItems />
              </PrivateRoute>
            }
          />

          <Route
            path="/search"
            element={
              <PrivateRoute>
                <SearchItems />
              </PrivateRoute>
            }
          />

        </Routes>

      </div>

      <Footer />
    </>
  );
}

export default App;