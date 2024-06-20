import React from "react";
import ListUsers from "./ListUsers";

function Home({ users }) {
  if (users === null) {
    return (
      <div className="container my-5">
        <p>No users found.</p>
      </div>
    );
  }

  return (
    <div className="container px-5 py-5">
      <h2 className="pb-2">Users</h2>

      <ListUsers users={users} />
    </div>
  );
}

export default Home;
