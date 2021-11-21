import React, { useState } from "react";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";

function App() {
  const [value, setValue] = useState();

  

  return (
    <div className="App">
      <h1>My React App</h1>

      <PhoneInput
        placeholder="Enter phone number"
        value={value}
        onChange={setValue}
      />
    </div>
  );
}

export default App;
