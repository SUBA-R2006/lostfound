import { useState } from "react";
import API from "../services/api";

function AddItem() {

  const [itemName, setItemName] =
    useState("");

  const [description, setDescription] =
    useState("");

  const [location, setLocation] =
    useState("");

  const [status, setStatus] =
    useState("LOST");

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const response =
        await API.post(
          "/items/add",
          {
            itemName,
            description,
            location,
            status
          }
        );

      alert(
        "Item Added Successfully"
      );

      console.log(
        response.data
      );

      setItemName("");
      setDescription("");
      setLocation("");
      setStatus("LOST");

    } catch (error) {

      console.error(error);

      alert(
        "Failed To Add Item"
      );
    }
  };

  return (
    <div>

      <h2>Add Item</h2>

      <form
        onSubmit={handleSubmit}
      >

        <input
          type="text"
          placeholder="Item Name"
          value={itemName}
          onChange={(e) =>
            setItemName(
              e.target.value
            )
          }
        />

        <br /><br />

        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) =>
            setDescription(
              e.target.value
            )
          }
        />

        <br /><br />

        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) =>
            setLocation(
              e.target.value
            )
          }
        />

        <br /><br />

        <select
          value={status}
          onChange={(e) =>
            setStatus(
              e.target.value
            )
          }
        >
          <option value="LOST">
            LOST
          </option>

          <option value="FOUND">
            FOUND
          </option>
        </select>

        <br /><br />

        <button type="submit">
          Add Item
        </button>

      </form>

    </div>
  );
}

export default AddItem;