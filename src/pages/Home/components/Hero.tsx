import Container from "@/components/helpers/Container";
import { useTranslation } from "react-i18next";

import nerd_img from "../assets/nerd.png";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className="pt-5 overflow-hidden">
      <Container className="flex items-center max-xl:flex-col-reverse max-xl:justify-center">
        <div>
          <h1 className="max-w-[568px] text-bfs-black font-bold text-4xl max-xl:text-3xl">
            <span className="text-bfs-blue">
              {t("pages.home.hero.title").slice(0, 21)}
            </span>
            {t("pages.home.hero.title").slice(21)}
          </h1>
          <p className="max-w-[534px] text-bfs-black mt-10 max-xl:mt-5">
            {t("pages.home.hero.desc")}
          </p>
          <div className="mt-15 flex items-center gap-10">
            <button
              type="button"
              className="max-w-[220px] h-[58px] text-2xl text-bfs-white px-8 py-1 rounded-lg border-2 border-bfs-purple bg-bfs-purple max-xl:h-auto max-xl:max-w-[160px] max-xl:w-full max-xl:px-4"
            >
              {t("pages.home.hero.call_btn")}
            </button>
            <button
              type="button"
              className="max-w-[220px] h-[58px] text-2xl text-bfs-black px-8 py-1 rounded-lg border-2 border-bfs-purple max-xl:h-auto max-xl:max-w-[160px] max-xl:w-full max-xl:px-4"
            >
              {t("pages.home.hero.info_btn")}
            </button>
          </div>
        </div>
        <div className="relative h-[648px] max-w-[888px] w-full max-xl:overflow-hidden max-xl:h-[300px]">
          <div className="absolute size-[645px] bg-[#EDEBFA] rounded-full z-0 translate-y-1/2 translate-x-[230px] max-xl:translate-x-[20%] pointer-events-none bottom-0"></div>
          <img
            src={nerd_img}
            alt="Nerd"
            className="size-full relative object-cover z-1 max-xl:hidden"
          />
        </div>
      </Container>
    </section>
  );
};

export default Hero;
