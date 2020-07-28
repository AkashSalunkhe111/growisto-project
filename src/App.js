import React from "react";
import "./App.css";

import data from "./data/components";
import CustomTag from "./components/CustomTag";

function App() {
  return (
    <div className="App">
      {data &&
        data.map((componentObj) => <CustomTag componentObj={componentObj} />)}
    </div>
  );
}

export default App;
