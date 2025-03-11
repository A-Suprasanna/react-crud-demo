import React, { useState, useContext } from "react";
import { CityContext } from "../context/CityProvider";

function CreateCity() {
  const { setCityList, cityList } = useContext(CityContext);

  const [data, setData] = useState({
    city: "",
    state: "",
  });

  const handleSubmit = (ev) => {
    ev.preventDefault();
    // console.log(`form data is`, data);
    setCityList((prev) => {
      // array.length -> 9
      // 9 -> 10
      // 110 -> 111
      // 20 -> 21
      return [
        ...prev,
        {
          id: prev.length + 1,
          name: data.city,
          state: data.state,
        },
      ];
    });
  };

  const handleChange = (ev) => {
    setData((prev) => {
      const key = ev.target.name;
      const value = ev.target.value;
      return {
        ...prev,
        [key]: value,
      };
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="city">Enter City Name</label>
          <br />
          <input
            type="text"
            name="city"
            onChange={(e) => handleChange(e)}
            id="city"
          />
        </div>
        <div>
          <label htmlFor="state">Enter State</label>
          <br />
          <input
            type="text"
            name="state"
            onChange={(e) => handleChange(e)}
            id="state"
          />
        </div>
        <button type="submit">Create City</button>
      </form>
      <br />
      <div className="city-list">
        {cityList.map((city) => {
          return <li key={city.id}>{city.name}</li>;
        })}
      </div>
    </div>
  );
}

export default CreateCity;
