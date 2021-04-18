import { useState } from "react";
import axios from "axios";

const App = () => {
  const [number, setNumber] = useState(23);
  const fetchUsers = async () =>
    console.log(
      await axios.get("https://randomuser.me/api/?page=3&results=10&seed=abc")
    );
  console.log("Render of App component");
  fetchUsers();

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
