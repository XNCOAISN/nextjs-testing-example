import { UserProfile } from "@/components/UserProfile";
import { getUser } from "./actions";

const Home = async () => {
  const user = await getUser({ userId: "1" });

  if (!user) {
    return <div>not found</div>;
  }

  return (
    <div>
      <UserProfile user={user} />
    </div>
  );
};

export default Home;
