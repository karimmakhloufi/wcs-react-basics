import { useState } from "react";

const App = () => {
  const [number, setNumber] = useState(23);
  console.log("Render of App component");
  return (
    <div>
      <p>Hello World</p>
      <p>{number}</p>
      <button
        onClick={() => {
          console.log("button was clicked");
          setNumber(number + 1);
        }}
      >
        Click Me
      </button>
    </div>
  );
};

export default App;
