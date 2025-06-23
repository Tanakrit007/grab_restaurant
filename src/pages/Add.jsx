import React, { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
const Add = () => {
  const [restaurants, setRestarnts] = useState({
    title: "",
    type: "",
    img: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setRestarnts({ ...restaurants, [name]: value });
  };
  const handleSummit = async () => {
    try {
      const response = await fetch("http://localhost:3000/restaurants", {
        method: "POST",
        body: JSON.stringify(restaurants),
      });
      if (response.ok) {
        alert("Restaurant added successfully");
        setRestarnts({
          title: "",
          type: "",
          img: "",
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="container mx-auto">
      <NavBar />
      <div>
        <h1 className="title justify-self-center text-3xl text-center m-5 gap-x-5">
          Add Restaurants
        </h1>
      </div>
      <label className="input">
        <input
          type="RestaurantsTitle"
          name="title"
          className="grow"
          placeholder="RestaurantsTitle"
          onChange={handleChange}
          value={restaurants.title}
        />
      </label>
      <label className="input">
        <input
          type="text"
          name="type"
          className="grow"
          placeholder="RestaurantsType"
          onChange={handleChange}
          value={restaurants.type}
        />
      </label>
      <label className="input">
        <input
          type="text"
          name="img"
          className="grow"
          placeholder="RestaurantsImg"
          onChange={handleChange}
          value={restaurants.img}
        />
      </label>
      {restaurants.img && (
        <div className="flex items-center gap-2">
          <img className="h-32" src={restaurants.img} />
        </div>
      )}
      <div>
        <button
          className="btn btn-info justify-self-center text-1xl text-center m-2 gap-x-5 space-x-5"
          onClick={handleSummit}
        >
          Add
        </button>
        <button className="btn btn-secondary justify-self-center text-1xl text-center m-2 gap-x-5 space-x-5">
          Cancel
        </button>
      </div>
    </div>
  );
};

export default Add;
