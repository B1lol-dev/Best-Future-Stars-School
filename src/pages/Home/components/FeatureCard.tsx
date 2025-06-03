export interface IFeatureCardData {
  id: number;
  img: string;
  title: string;
  desc: string;
}

const FeatureCard = ({ feature }: { feature: IFeatureCardData }) => {
  return (
    <div className="max-w-[320px] flex flex-col items-center">
      <div className="rounded-full overflow-hidden size-[210px] outline-8 outline-white">
        <img src={feature.img} alt={feature.title} />
      </div>
      <div className="text-white text-center mt-9">
        <h4 className="font-bold text-2xl">{feature.title}</h4>
        <p className="mt-5">{feature.desc}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
