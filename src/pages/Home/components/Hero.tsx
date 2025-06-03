import Container from "@/components/helpers/Container";
import { useTranslation } from "react-i18next";

import nerd_img from "../assets/nerd.png";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className="pt-5 overflow-hidden">
      <Container className="flex items-center">
        <div>
          <h1 className="max-w-[568px] text-bfs-black font-bold text-4xl">
            <span className="text-bfs-blue">
              {t("pages.home.hero.title").slice(0, 21)}
            </span>
            {t("pages.home.hero.title").slice(21)}
          </h1>
          <p className="max-w-[534px] text-bfs-black mt-10">
            {t("pages.home.hero.desc")}
          </p>
          <div className="mt-15 flex items-center gap-10">
            <button
              type="button"
              className="max-w-[220px] h-[58px] text-2xl text-bfs-white px-8 py-1 rounded-lg bg-bfs-purple"
            >
              {t("pages.home.hero.call_btn")}
            </button>
            <button
              type="button"
              className="max-w-[220px] h-[58px] text-2xl text-bfs-black px-8 py-1 rounded-lg border-2 border-bfs-purple"
            >
              {t("pages.home.hero.info_btn")}
            </button>
          </div>
        </div>
        <div className="relative h-[648px] w-[888px]">
          <div className="absolute size-[645px] bg-[#EDEBFA] rounded-full z-0 translate-y-1/2 translate-x-[230px] pointer-events-none bottom-0"></div>
          <img
            src={nerd_img}
            alt="Nerd"
            className="size-full relative object-cover z-1"
          />
        </div>
      </Container>
    </section>
  );
};

export default Hero;
