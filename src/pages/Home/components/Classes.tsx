import Container from "@/components/helpers/Container";
import { useTranslation } from "react-i18next";
import ClassCard, { type IClassCardData } from "./ClassCard";

const Classes = () => {
  const { t } = useTranslation();
  const classCards = t("pages.home.classes.cards", {
    returnObjects: true,
  }) as IClassCardData[];

  return (
    <section className="py-36">
      <Container>
        <h1 className="relative font-bold text-8xl text-center text-bfs-gray">
          {t("pages.home.classes.title")}
          <span className="absolute text-4xl pointer-events-none left-1/2 -translate-x-1/2 translate-y-18 text-bfs-black">
            {t("pages.home.classes.title")}
          </span>
        </h1>
        <div className="flex justify-between mt-20 max-xl:flex-col max-xl:items-center max-xl:gap-20">
          {classCards.slice(0, 3).map((card) => (
            <ClassCard key={card.id} data={card} />
          ))}
        </div>
        <div className="flex justify-center mt-20 gap-30 max-xl:flex-col max-xl:items-center max-xl:gap-20">
          {classCards.slice(3).map((card) => (
            <ClassCard key={card.id} data={card} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Classes;
