import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";

export default function Item({ item }, { index }) {
  const [qty, setQty] = useState(0);
  const [showAlert, setShowAlert] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  const handleAdd = async (item) => {
    setShowPopup(false);
    if (qty > 0) {
      setShowAlert(item);
      setTimeout(() => {
        setShowAlert(false);
      }, 5000);
      item["qty"] = qty;
      try {
        await fetch("http://localhost:5000/cart/add", {
          credentials: "include",
          method: "POST",
          headers: {
            "Content-Type": "application/json", // Specify the content type as JSON
          },
          body: JSON.stringify(item),
        }).then(async (response) => {
          item.quantity -= qty;
          console.log(item.quantity);
          console.log("adding item");
        });
      } catch (error) {
        console.error("Error posting data:", error);
      }
    }
  };

  const handleQuantityChange = (e, index) => {
    const newQuantity = parseInt(e.target.value, 10) || 0; // Parse the input value as an integer or default to 0

    if (newQuantity > item.quantity) {
      console.log("Tried to input a number greater than In stock quantity.");
      setQty(0);
    } else if (newQuantity < 1) {
      setQty(0);
      console.log("Tried to input a number less than In stock quantity.");
    } else {
      setQty(newQuantity);
    }
  };

  const handlePopupToggle = () => {
    console.log("hi");
    setShowPopup(!showPopup);
  };

  function Popup({ item }) {
    return (
      <div className="popup">
        <FontAwesomeIcon icon={faCircleXmark} />
        <div className = "popupinfo">
          <img src={item.image_url} alt="product image"></img>
          <div>
            <h1>{item.name}</h1>
            <p>In Stock: {item.quantity}</p>
            <label>Qty:</label>
            <input
              type="number"
              min="1"
              className="quantity"
              max={item.quantity}
              value={item.quantitySelected}
              onChange={(e) => handleQuantityChange(e, index)}
            />
            <button onClick={() => handleAdd(item)}>Add to Cart</button>
            <h2>Description</h2>
            <p>Description of Item here!</p>
            <h3>Allergy</h3>
            <p>{item.allergy}</p>
            <h3>Category</h3>
            <p>{item.category}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="items" key={index}>
      {showAlert && (
        <div className="alert">
          <span>
            You added {showAlert.qty} {showAlert.name} to your cart.{" "}
          </span>
        </div>
      )}
      <div className="itemClick" onClick={handlePopupToggle}>
        <p>{item.name}</p>
        <img src={item.image_url} alt="item"></img>
        <p>In Stock: {item.quantity}</p>
      </div>
      <label>Qty:</label>
      <input
        type="number"
        min="1"
        className="quantity"
        max={item.quantity}
        value={item.quantitySelected}
        onChange={(e) => handleQuantityChange(e, index)}
      />
      <button onClick={() => handleAdd(item)}>Add to Cart</button>
      {showPopup && <Popup item={item} />}
    </div>
  );
}
