import Link from "next/link";
import { User } from "../types/user";

const getUsers = async (): Promise<User[]> => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    cache: "no-store",
  });

  if (!res.ok) throw Error('Failed to fetch users!');

  return res.json();
};

const Users = async () => {
  const users = await getUsers();

  return (
    <div>
      <h1>Users</h1>
      <div className="users">
        {users.map((user) => (
          <Link key={user.id} href={`/users/${user.id}`}>{user.id}. {user.name}</Link>
        ))}
      </div>
    </div>
  );
};

export default Users;
