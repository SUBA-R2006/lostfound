import {
  FaSearch,
  FaPlusCircle,
  FaBoxOpen
} from "react-icons/fa";

function Dashboard() {
  return (
    <div>

      <h1
        className="text-center mb-5 fw-bold"
      >
        College Lost & Found Dashboard
      </h1>

      <div className="row">

        <div className="col-md-4 mb-4">
          <div className="card dashboard-card shadow-lg border-0">
            <div className="card-body text-center">

              <FaBoxOpen
                size={60}
                color="#00ffff"
              />

              <h4
                className="mt-3 text-white"
              >
                All Items
              </h4>

            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card dashboard-card shadow-lg border-0">
            <div className="card-body text-center">

              <FaPlusCircle
                size={60}
                color="#00ffff"
              />

              <h4
                className="mt-3 text-white"
              >
                Add Item
              </h4>

            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card dashboard-card shadow-lg border-0">
            <div className="card-body text-center">

              <FaSearch
                size={60}
                color="#00ffff"
              />

              <h4
                className="mt-3 text-white"
              >
                Search Item
              </h4>

            </div>
          </div>
        </div>

      </div>

    </div>
  );
}

export default Dashboard;