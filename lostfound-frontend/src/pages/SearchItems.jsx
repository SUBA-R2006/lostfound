import { useState } from "react";
import API from "../services/api";

function SearchItems() {

  const [itemName, setItemName] =
    useState("");

  const [items, setItems] =
    useState([]);

  const searchItems = async () => {

    try {

      const response =
        await API.get(
          `/items/search/name?itemName=${itemName}`
        );

      setItems(
        response.data
      );

    } catch (error) {

      console.error(error);

      alert(
        "Search Failed"
      );
    }
  };

  const claimItem = async (id) => {

    try {

      await API.patch(
        `/items/claim/${id}`
      );

      alert(
        "Item Claimed"
      );

      searchItems();

    } catch (error) {

      console.error(error);

      alert(
        "Claim Failed"
      );
    }
  };

  return (

    <div className="container">

      <h2 className="mb-4">
        Search Items
      </h2>

      <div className="mb-3">

        <input
          type="text"
          className="form-control"
          placeholder="Enter Item Name"
          value={itemName}
          onChange={(e) =>
            setItemName(
              e.target.value
            )
          }
        />

      </div>

      <button
        className="btn btn-primary"
        onClick={searchItems}
      >
        Search
      </button>

      <hr />

      {
        items.map((item) => (

          <div
            key={item.id}
            className="card mb-3 p-3 shadow"
          >

            {item.imageUrl && (

              <img
                src={`http://localhost:8080${item.imageUrl}`}
                alt={item.itemName}
                style={{
                  width: "250px",
                  height: "200px",
                  objectFit: "cover",
                  borderRadius: "10px"
                }}
              />

            )}

            <h3 className="mt-3">
              {item.itemName}
            </h3>

            <p>
              {item.description}
            </p>

            <p>
              <strong>
                Location:
              </strong>{" "}
              {item.location}
            </p>

            <p>
              <strong>
                Status:
              </strong>{" "}
              {item.status}
            </p>

            {
              item.status === "FOUND"
              &&
              (
                <button
                  className="btn btn-success"
                  onClick={() =>
                    claimItem(
                      item.id
                    )
                  }
                >
                  Claim Item
                </button>
              )
            }

          </div>

        ))
      }

    </div>

  );
}

export default SearchItems;