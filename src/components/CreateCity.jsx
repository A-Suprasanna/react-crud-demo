import React, { useState } from "react";

function CreateCity() {
  const [data, setData] = useState({
    city: "",
    state: "",
  });

  const handleSubmit = (ev) => {
    ev.preventDefault();
    console.log(data);
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
  );
}

export default CreateCity;
