import Container from "@/components/helpers/Container";
import { useTranslation } from "react-i18next";

import nerd_img from "../assets/nerd.png";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className="pt-5">
      <Container className="flex items-center">
        <div>
          <h1 className="max-w-[568px] text-bfs-black font-bold text-4xl">
            <span className="text-bfs-blue">
              {t("pages.home.hero.title").slice(0, 21)}
            </span>
            {t("pages.home.hero.title").slice(21)}
          </h1>
          <p>{t("pages.home.hero.desc")}</p>
          <div>
            <button type="button">{t("pages.home.hero.call_btn")}</button>
            <button type="button">{t("pages.home.hero.info_btn")}</button>
          </div>
        </div>
        <div className="relative">
          <div className="absolute size-[645px] bg-[#EDEBFA] rounded-full -z-1 pointer-events-none bottom-0"></div>
          <img src={nerd_img} alt="Nerd" className="size-full" />
        </div>
      </Container>
    </section>
  );
};

export default Hero;
