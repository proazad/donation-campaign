import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h3 className="text-4xl">Hello from Home</h3>
      <Outlet />
    </div>
  );
};

export default Home;
