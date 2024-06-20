import React from "react";
import { Link } from "react-router-dom";
import UserOverview from "./UserOverview";

function ListUsers({ users }) {
  // const [users, setUsers] = useState([]);

  if (!users) {
    return <p>No users found.</p>;
  }

  return (
    <>
      {users.map((user) => (
        <Link
          to={`/user/${user.id}`}
          className="card p-3 mb-5 text-decoration-none"
          key={user.id}
        >
          <UserOverview user={user} />
        </Link>
      ))}
    </>
  );
}

export default ListUsers;
