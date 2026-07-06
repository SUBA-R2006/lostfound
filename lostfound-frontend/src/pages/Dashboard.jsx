import {
  FaSearch,
  FaPlusCircle,
  FaBoxOpen,
  FaClipboardList
} from "react-icons/fa";

import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import API from "../services/api";

function Dashboard() {

  const navigate = useNavigate();

  const [stats, setStats] =
    useState({});

  useEffect(() => {

    fetchStats();

  }, []);

  const fetchStats = async () => {

    try {

      const response =
        await API.get("/items/stats");

      setStats(
        response.data
      );

    } catch (error) {

      console.error(error);
    }
  };

  return (

    <div>

      <h1
        className="text-center mb-5 fw-bold"
      >
        🎒 College Lost & Found Dashboard
      </h1>

      <div className="row text-center mb-5">

        <div className="col-md-3">
          <div className="card p-3">
            <h3>
              {stats.totalItems || 0}
            </h3>
            <p>Total Items</p>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card p-3">
            <h3>
              {stats.lostItems || 0}
            </h3>
            <p>Lost Items</p>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card p-3">
            <h3>
              {stats.foundItems || 0}
            </h3>
            <p>Found Items</p>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card p-3">
            <h3>
              {stats.claimedItems || 0}
            </h3>
            <p>Claimed Items</p>
          </div>
        </div>

      </div>

      <div className="row">

        <div className="col-md-3 mb-4">
          <div
            className="card dashboard-card"
            onClick={() =>
              navigate("/all-items")
            }
          >
            <div className="card-body text-center">
              <FaBoxOpen size={60} />
              <h4>All Items</h4>
            </div>
          </div>
        </div>

        <div className="col-md-3 mb-4">
          <div
            className="card dashboard-card"
            onClick={() =>
              navigate("/add-item")
            }
          >
            <div className="card-body text-center">
              <FaPlusCircle size={60} />
              <h4>Add Item</h4>
            </div>
          </div>
        </div>

        <div className="col-md-3 mb-4">
          <div
            className="card dashboard-card"
            onClick={() =>
              navigate("/my-items")
            }
          >
            <div className="card-body text-center">
              <FaClipboardList size={60} />
              <h4>My Items</h4>
            </div>
          </div>
        </div>

        <div className="col-md-3 mb-4">
          <div
            className="card dashboard-card"
            onClick={() =>
              navigate("/search")
            }
          >
            <div className="card-body text-center">
              <FaSearch size={60} />
              <h4>Search</h4>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}

export default Dashboard;