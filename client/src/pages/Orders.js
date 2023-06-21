import React, { useState, useEffect } from "react";
import Item from "../component/Item";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export default function Orders() {
  const [data, setData] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [qty, setQty] = useState(0);
  const [popularList, setPopularList] = useState([]);

  useEffect(() => {
    fetchData();
  }, [selectedCategory, qty]);

  const fetchData = async () => {
    try {
      const url = selectedCategory
        ? `http://localhost:5000/products/all/${selectedCategory}`
        : "http://localhost:5000/products/all";

      const response = await fetch(url);
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error("There was an error:", error);
    }
  };

  useEffect(() => {
    (async () => {
      await fetch("http://localhost:5000/products/popular")
        .then(async (response) => {
          const jsonData = await response.json();
          setPopularList(jsonData);
        })
        .catch((error) => {
          console.error("There was an error:", error);
        });
    })();
  }, []);

  const [categoryList, setCategoryList] = useState([]);

  useEffect(() => {
    (async () => {
      await fetch("http://localhost:5000/products/category/categories/all")
        .then(async (response) => {
          const jsonData = await response.json();
          setCategoryList(jsonData);
        })
        .catch((error) => {
          console.error("There was an error:", error);
        });
    })();
  }, []);

  const handleResetFilter = async () => {
    setSelectedCategory("");
  };

  return (

      <div className="orders">
        <div className="search">
         <FontAwesomeIcon icon = {faMagnifyingGlass} />
          <input placeholder="Search products" />
          <button type = "submit">Search</button>

        </div>
        <h2>Popular Items</h2>
        {popularList ? (
          <div className="item-container">
            {popularList.map((item, index) => (
              <Item item={item} index={index}></Item>
            ))}
          </div>
        ) : (
          <p>Loading data...</p>
        )}

        <h2>Categories</h2>
        <form className="catFilter">
          {categoryList.map((item, index) => (
            <div>
              <label>
                <input
                  key={index}
                  type="radio"
                  name="category"
                  value={item}
                  checked={selectedCategory === item}
                  onChange={(event) => setSelectedCategory(event.target.value)}
                ></input>
                <span>{item}</span>
              </label>
            </div>
          ))}
          <input
            type="button"
            value="Reset Filter"
            onClick={handleResetFilter}
          ></input>
        </form>

        {data ? (
          <div className="item-container">
            {data.map((item, index) => (
              <Item item={item} index={index}></Item>
            ))}
          </div>
        ) : (
          <p>Loading data...</p>
        )}
      </div>
  );
}
