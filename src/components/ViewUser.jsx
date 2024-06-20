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
    <div className="container px-2 py-4">
      {user && (
        <div>
          <section className="flex-row-two-columns px-4 mb-3">
            <h1>
              {user.first_name} {user.last_name}
            </h1>
            <section className="flex-column">
              <button className="pastel-green">Assign</button>
              <p className="points">{user.points}</p>
            </section>
          </section>

          {user.goals &&
            user.goals.map((goal) => (
              <div key={goal.id} className="card p-3 mb-4">
                <div className="inner-card">
                  <div className="top-row">
                    <p>{goal.title}</p>
                    <p>{goal.points}</p>
                  </div>
                  <div className="description-section">
                    <p>{goal.description}</p>
                  </div>
                  <div className="description-section">
                    <button>Complete</button>
                  </div>
                </div>
              </div>
            ))}
        </div>
      )}
    </div>
  );
}

export default ViewUser;
