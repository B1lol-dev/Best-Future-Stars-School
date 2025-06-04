import { Outlet } from "react-router-dom";
import Navbar from "../ui/navbar";
import Footer from "../ui/footer";

const RootLayout = () => {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default RootLayout;
