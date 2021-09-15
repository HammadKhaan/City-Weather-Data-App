import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import CityName from "../Components/CityName";
import Data from "../Components/Data";

const Weather = () => {
  const [flip, setFlip] = useState(false)
  const [city, setCity] = useState("")
    return (
    <ReactCardFlip isFlipped={flip} flipDirection="horizontal">
      <div>
        <CityName setFlip ={setFlip} setCity={setCity}/>
      </div>
      <div>
        <Data setFlip={setFlip} city={city}/>
      </div>
    </ReactCardFlip>
  );
};

export default Weather;
