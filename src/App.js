import React, { useState } from "react";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
/* import World from "../src/images/img.jpg"
import Covid from "../src/images/img1.jpg" */
function App() {
  const [value, setValue] = useState();

  

  return (
    <div className="App">
      <h1>My React App</h1>

{/*       <img src={World} alt="img" />
      <img src={Covid} alt="img" /> */}

      <PhoneInput
        placeholder="Enter phone number"
        value={value}
        onChange={setValue}
      />
    </div>
  );
}

export default App;
