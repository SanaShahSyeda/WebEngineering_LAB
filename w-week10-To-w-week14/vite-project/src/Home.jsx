import PostsDynamic from "./components/PostsDynamic";
import UsersDynamic from "./components/UsersDynamic";

const Home = () => {
  return (
    <>
      <div>Home</div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <UsersDynamic />
        <PostsDynamic />
      </div>
    </>
  );
};

export default Home;
