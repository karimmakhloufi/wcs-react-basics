import { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  const [page, setPage] = useState(1);
  const [users, setUsers] = useState([]);
  const fetchUsers = async () => {
    const result = await axios.get(
      "https://randomuser.me/api/?page=" + page + "&results=10&seed=abc"
    );
    console.log(result.data.results);
    setUsers(result.data.results);
  };
  console.log("Render of App component");
  useEffect(fetchUsers, [page]);

  return (
    <div>
      {users.map((el) => (
        <p>{el.email}</p>
      ))}
      <button
        onClick={() => {
          setPage(page + 1);
        }}
      >
        Next Page
      </button>
    </div>
  );
};

export default App;
