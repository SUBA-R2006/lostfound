import { Link, useNavigate } from "react-router-dom";

function Navbar() {

  const navigate =
    useNavigate();

  const token =
    localStorage.getItem("token");

  const logout = () => {

    localStorage.removeItem("token");

    alert("Logged Out");

    navigate("/");
  };

  return (

    <nav
      className="
      navbar
      navbar-expand-lg
      navbar-dark
      bg-primary
      shadow"
    >

      <div className="container">

        <Link
          className="navbar-brand fw-bold"
          to="/dashboard"
        >
          🎒 Lost & Found
        </Link>

        <div className="navbar-nav ms-auto">

          {
            token && (
              <>
                <Link
                  className="nav-link"
                  to="/dashboard"
                >
                  Dashboard
                </Link>

                <Link
                  className="nav-link"
                  to="/add-item"
                >
                  Add Item
                </Link>

                <Link
                  className="nav-link"
                  to="/my-items"
                >
                  My Items
                </Link>

                <Link
                  className="nav-link"
                  to="/all-items"
                >
                  All Items
                </Link>

                <Link
                  className="nav-link"
                  to="/search"
                >
                  Search
                </Link>

                <button
                  className="
                  btn
                  btn-danger
                  ms-3"
                  onClick={logout}
                >
                  Logout
                </button>
              </>
            )
          }

        </div>

      </div>

    </nav>
  );
}

export default Navbar;