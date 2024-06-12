import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ViewUser() {
  const { id } = useParams(); // Extract userId from URL
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(`https://goals-game-express-app.onrender.com/users/${id}/goals`)
      .then((response) => response.json())
      .then((data) => setUser(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, [id]);

  return (
    <div className="container my-5">
      {user && (
        <div className="card shadow">
          <div className="card-body">
            <h2 className="card-title">
              {user.first_name} {user.last_name}
            </h2>
            {user.goals && (
              <ul className="list-group list-group-flush">
                {user.goals.map((goal) => (
                  <li
                    key={goal.id}
                    className="list-group-item text-start" // Use text-start for left alignment
                  >
                    {goal.title}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default ViewUser;
