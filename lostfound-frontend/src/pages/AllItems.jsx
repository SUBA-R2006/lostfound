import { useEffect, useState } from "react";
import API from "../services/api";

function AllItems() {

  const [items, setItems] =
    useState([]);

  useEffect(() => {

    fetchItems();

  }, []);

  const fetchItems = async () => {

    try {

      const response =
        await API.get(
          "/items/all"
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

      <h2>All Items</h2>

      {
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

            <p>
              Owner :
              {" "}
              {item.ownerEmail}
            </p>

          </div>
        ))
      }

    </div>
  );
}

export default AllItems;