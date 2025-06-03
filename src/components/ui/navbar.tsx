import { Link } from "react-router-dom";
import Container from "../helpers/Container";
import { Phone, X, Menu } from "lucide-react";

import logo_img from "@/assets/logo.svg";
import { useTranslation } from "react-i18next";
import { useState } from "react";

const Navbar = () => {
  const { t } = useTranslation();
  const navLinks = t("navbar.nav_links", {
    returnObjects: true,
  }) as string[];

  const [showMenu, setShowMenu] = useState(false);

  const toggleShowMenu = () => {
    setShowMenu((p) => !p);
  };

  return (
    <header className="bg-bfs-blue">
      <Container>
        <nav className="flex items-center justify-between py-4">
          <Link to="/">
            <img
              src={logo_img}
              alt="The Best Future Stars"
              height={111}
              width={156}
            />
          </Link>
          <ul className="flex items-center gap-11 text-bfs-white text-xl max-lg:hidden">
            {navLinks.map((link) => (
              <Link key={link} to="#">
                <li>{link}</li>
              </Link>
            ))}
          </ul>
          <div
            className={`hidden w-screen h-3/4 fixed transition-all duration-200 flex-col p-5 bg-bfs-blue top-0 left-0 max-lg:flex ${
              showMenu ? "" : "-translate-y-full"
            }`}
          >
            <div className="flex justify-between">
              <Link to="/">
                <img
                  src={logo_img}
                  alt="The Best Future Stars"
                  height={57}
                  width={80}
                />
              </Link>
              <button onClick={() => setShowMenu(false)}>
                <X size={24} />
              </button>
            </div>
            <ul className="mt-11">
              {navLinks.map((link) => (
                <Link key={link} to="#">
                  <li>{link}</li>
                </Link>
              ))}
            </ul>
          </div>
          <button
            type="button"
            className="bg-bfs-white py-2.5 px-9 font-medium text-xl rounded max-lg:hidden"
          >
            {t("navbar.button")}
          </button>
          <div className="flex items-center gap-6">
            <button
              type="button"
              className="text-bfs-white items-center justify-center hidden max-lg:flex"
            >
              <Phone size={24} />
            </button>
            <button
              type="button"
              className="text-bfs-white items-center justify-center hidden max-lg:flex"
              onClick={toggleShowMenu}
            >
              <Menu size={24} />
            </button>
          </div>
        </nav>
      </Container>
    </header>
  );
};

export default Navbar;
