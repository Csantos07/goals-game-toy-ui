import { useEffect, useState } from "react";
import "./App.css";

function App() {
  let [users, setUsers] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="App">
      <header className="card">
        <h1>Goals Game</h1>
      </header>

      <h2>Users</h2>
      {users &&
        users.map((user) => (
          <article key={user.id}>
            {user.first_name} {user.last_name} - {user.email}
          </article>
        ))}
    </div>
  );
}

export default App;
