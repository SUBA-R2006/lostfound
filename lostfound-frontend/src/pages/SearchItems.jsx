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

  return (
    <div>

      <h2>Search Items</h2>

      <input
        type="text"
        placeholder="Enter Item Name"
        value={itemName}
        onChange={(e) =>
          setItemName(
            e.target.value
          )
        }
      />

      <button
        onClick={searchItems}
      >
        Search
      </button>

      <hr />

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

          </div>
        ))
      }

    </div>
  );
}

export default SearchItems;