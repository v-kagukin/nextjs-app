import { notFound } from "next/navigation";
import { User } from "@/app/types/user";

const getUser = async (id: number): Promise<User> => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
    cache: "no-store",
  });

  if (res.status === 404) notFound();
  if (!res.ok) throw Error(`Failed to fetch user with ${id} id!`);
  return res.json();
};

type Props<T extends { id: number }> = {
  params: T;
};

const UserPage = async ({ params }: Props<{ id: number }>) => {
  const { id } = await params;
  const user = await getUser(id);

  return (
    <div>
      <p>{user.id}. {user.name} {`<${user.email}>`}</p>
    </div>
  );
};

export default UserPage;
