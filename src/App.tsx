import React from "react";
import Ketikin from "./Ketikin";

function App() {
  return (
    <Ketikin text="Hello" interval={100}>
      {value => <h1>{value}</h1>}
    </Ketikin>
  );
}

export default App;
