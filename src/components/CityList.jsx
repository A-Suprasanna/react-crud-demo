import React, { useState } from "react";
import "../App.css";
import cities from "../helpers/cities.json";
// step -1
import { useNavigate } from "react-router-dom";

function CityList() {
  // step -2
  const navigate = useNavigate();
  // declaring the initial state
  const [cityList, setCityList] = useState(cities);

  return (
    <div className="city-list">
      {cityList.map((city) => {
        return <li key={city.id}>{city.name}</li>;
      })}
      {/* !! important */}
      <button
        onClick={() => {
          // console.log("button is clicked");
          navigate("/create");
        }}
      >
        Add City
      </button>
    </div>
  );
}

export default CityList;
