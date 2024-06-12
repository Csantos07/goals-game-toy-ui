import React from "react";
import { Link } from "react-router-dom";

function Home({ users }) {
  return (
    <div className="container my-5">
      <h2 className="mb-4">Users</h2>
      {users &&
        users.map((user) => (
          <Link to={`/user/${user.id}`} key={user.id} className="card mb-3 text-decoration-none">
            <div className="card-body">
              <h5 className="card-title">
                {user.first_name} {user.last_name}
              </h5>
              <p className="card-text">{user.email}</p>
              <span>Points: {user.points}</span>
            </div>
          </Link>
        ))}
    </div>
  );
}

export default Home;
