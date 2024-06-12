import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import ViewUser from "./components/ViewUser";

function App() {
  let [users, setUsers] = useState(null);

  useEffect(() => {
    fetch("https://goals-game-express-app.onrender.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <Router>
      <div className="App">
        <header className="bg-dark text-white text-center py-5">
          <div className="container">
            <h1 className="display-4">Goals Game</h1>
            <p className="lead">
              Achieve your goals and level up with your{" "}
              <a href="https://en.wikipedia.org/wiki/Mastermind_group#:~:text=A%20mastermind%20group%20is%20a,book%20Think%20and%20Grow%20Rich.">
                mastermind group
              </a>
            </p>
          </div>
        </header>

        <Routes>
          <Route path="/" element={<Home users={users} />} />
          <Route path="/user/:id" element={<ViewUser />} />
        </Routes>
      </div>
    </Router>
  );
}

// https://en.wikipedia.org/wiki/Mastermind_group#:~:text=A%20mastermind%20group%20is%20a,book%20Think%20and%20Grow%20Rich.

export default App;
