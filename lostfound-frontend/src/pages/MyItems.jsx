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

  return (
    <div>

      <h2>My Items</h2>

      {
        items.length === 0
          ? (
            <p>
              No Items Found
            </p>
          )
          : (
            items.map((item) => (

              <div
                key={item.id}
                style={{
                  border: "1px solid black",
                  padding: "10px",
                  margin: "10px"
                }}
              >

                <h3>
                  {item.itemName}
                </h3>

                <p>
                  {item.description}
                </p>

                <p>
                  Location :
                  {" "}
                  {item.location}
                </p>

                <p>
                  Status :
                  {" "}
                  {item.status}
                </p>

              </div>
            ))
          )
      }

    </div>
  );
}

export default MyItems;