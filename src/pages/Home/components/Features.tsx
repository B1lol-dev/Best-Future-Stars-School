import Container from "@/components/helpers/Container";
import { useTranslation } from "react-i18next";
import FeatureCard, { type IFeatureCardData } from "./FeatureCard";

const Features = () => {
  const { t } = useTranslation();
  const cards = t("pages.home.features.cards", {
    returnObjects: true,
  }) as IFeatureCardData[];

  return (
    <section className="bg-bfs-blue py-20">
      <Container>
        <h2 className="text-center text-bfs-white font-bold text-3xl">
          {t("pages.home.features.title")}
        </h2>
        <div className="flex justify-between mt-10 max-xl:flex-col max-xl:items-center max-xl:gap-20">
          {cards.slice(0, 3).map((card) => (
            <FeatureCard feature={card} key={card.id} />
          ))}
        </div>
        <div className="flex justify-center gap-40 max-xl:flex-col max-xl:items-center max-xl:gap-20">
          {cards.slice(3).map((card) => (
            <FeatureCard feature={card} key={card.id} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Features;
