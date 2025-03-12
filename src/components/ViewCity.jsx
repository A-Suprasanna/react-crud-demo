import React, { useContext, useState } from "react";
// ?? Step- 1
import { useParams } from "react-router-dom";
import { CityContext } from "../context/CityProvider";

function ViewCity() {
  // ?? Step-2
  const { id } = useParams();

  console.log("Id is", id);
  console.log("Id type is", typeof id);

  // fetching the cityList
  const { cityList } = useContext(CityContext);

  // initial State
  const [selectedCity, setSelectedCity] = useState(
    cityList.find((city) => city.id === Number(id))
  );

  console.log(selectedCity);

  return (
    <div>
      City ID is {id}
      <div>City is {selectedCity.name}</div>
      <span>State is {selectedCity.state}</span>
    </div>
  );
}

export default ViewCity;
