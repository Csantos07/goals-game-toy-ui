import React from "react";

function UserOverview({ user }) {
  return (
    <div className="pb-4">
      <h4>
        {user.first_name} {user.last_name}
      </h4>
      <span>Points: {user.points}</span>
    </div>
  );
}

export default UserOverview;
