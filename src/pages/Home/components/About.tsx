import Container from "@/components/helpers/Container";
import { useTranslation } from "react-i18next";

import about_school_img from "../assets/about_school.png";

const About = () => {
  const { t } = useTranslation();

  return (
    <section className="py-[214px]">
      <Container className="flex gap-11 max-xl:flex-col max-xl:items-center">
        <div>
          <img src={about_school_img} alt="School" height={492} width={535} />
        </div>
        <div className="max-w-[500px] flex flex-col items-start justify-between">
          <h3 className="text-[40px] font-bold">
            {t("pages.home.about.title")}
          </h3>
          <p className="mt-12">{t("pages.home.about.desc")}</p>
          <p>{t("pages.home.about.info")}</p>
        </div>
      </Container>
    </section>
  );
};

export default About;
