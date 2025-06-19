import React from "react";
import NavBar from "../components/NavBar";
import Restaurants from "../components/Restaurants";
const Home = () => {
  return (
    <div className="container mx-auto">
      <NavBar></NavBar>
      <div>
        <h1 className="title justify-self-center text-3xl text-center m-5 gap-x-5">
          Grab Restaurant
        </h1>
      </div>
      <div className="mb-5 flex justify-center items-center max-w-">
        <label className="input flex items-center gap-2 w-2xl">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input type="search" required placeholder="Search" />
        </label>
      </div>
      <div></div>
      <Restaurants></Restaurants>
    </div>
  );
};

export default Home;
