import { Outlet } from "react-router-dom";
import Navbar from "../ui/navbar";

const RootLayout = () => {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;
