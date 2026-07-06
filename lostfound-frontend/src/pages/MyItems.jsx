import { useEffect, useState } from "react";
import API from "../services/api";

function MyItems() {

  const [items, setItems] =
    useState([]);

  useEffect(() => {

    fetchMyItems();

  }, []);

  const fetchMyItems = async () => {

    try {

      const response =
        await API.get(
          "/items/my-items"
        );

      setItems(
        response.data
      );

    } catch (error) {

      console.error(error);

      alert(
        "Failed To Load Items"
      );
    }
  };

  const claimItem = async (id) => {

    try {

      await API.patch(
        `/items/claim/${id}`
      );

      alert(
        "Item Claimed Successfully"
      );

      fetchMyItems();

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
        My Items
      </h2>

      {
        items.length === 0
          ? (
            <p>No Items Found</p>
          )
          : (
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
                  item.status !== "CLAIMED"
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
          )
      }

    </div>

  );
}

export default MyItems;