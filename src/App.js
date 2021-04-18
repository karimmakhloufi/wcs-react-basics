import { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  const [number, setNumber] = useState(23);
  const [users, setUsers] = useState([]);
  const fetchUsers = async () => {
    const result = await axios.get(
      "https://randomuser.me/api/?page=3&results=10&seed=abc"
    );
    console.log(result.data.results);
    setUsers(result.data.results);
  };
  console.log("Render of App component");
  useEffect(fetchUsers, []);

  return (
    <div>
      {users.map((el) => (
        <p>{el.email}</p>
      ))}
    </div>
  );
};

export default App;
