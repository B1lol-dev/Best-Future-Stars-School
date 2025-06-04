import { Link } from "react-router-dom";
import Container from "../helpers/Container";

import logo from "@/assets/logo.svg";
import { useTranslation } from "react-i18next";
import { FaFacebook, FaInstagram, FaTelegram } from "react-icons/fa";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-bfs-blue py-7">
      <Container>
        <div className="flex items-center text-bfs-white justify-between">
          <Link to="/">
            <img src={logo} alt="bfs" />
          </Link>
          <div className="flex items-center gap-9 max-md:flex-col max-md:gap-1">
            <h4>{t("footer.contacts")}</h4>
            <ul>
              <li>
                <a href="tel:+998971970771">+998971970771</a>
              </li>
              <li>
                <a href="tel:+998970020771">+998970020771</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-xl">{t("footer.with_us")}</h3>
            <div className="flex items-center gap-5 mt-5">
              <Link to="t.me/">
                <FaTelegram size={32} />
              </Link>
              <Link to="t.me/">
                <FaInstagram size={32} />
              </Link>
              <Link to="t.me/">
                <FaFacebook size={32} />
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
