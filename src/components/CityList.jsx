// !! Subscribe mode
import React, { useContext } from "react";
import { CityContext } from "../context/CityProvider";
import "../App.css";
// step -1
import { useNavigate } from "react-router-dom";

function CityList() {
  // step -2
  const navigate = useNavigate();

  const { cityList } = useContext(CityContext);

  return (
    <div className="city-list">
      {cityList.map((city) => {
        return (
          <div
            key={city.id}
            onClick={() => {
              navigate(`/cities/view/${city.id}`);
            }}
          >
            <h4>
              <b>{city.name}</b>
            </h4>
          </div>
        );
      })}
      <button
        onClick={() => {
          navigate("/create");
        }}
      >
        Add City
      </button>
    </div>
  );
}

export default CityList;
