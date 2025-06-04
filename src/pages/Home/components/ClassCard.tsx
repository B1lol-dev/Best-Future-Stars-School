export interface IClassCardData {
  id: number;
  img: string;
  title: string;
  ages: string;
  desc: string;
  btn: string;
}

const ClassCard = ({ data }: { data: IClassCardData }) => {
  return (
    <div className="bg-bfs-blue p-5 rounded-2xl w-[320px]">
      <div>
        <img src={data.img} alt={data.title} />
      </div>
      <div className="text-white text-center mt-5">
        <h4 className="font-semibold text-3xl">{data.title}</h4>
        <h5 className="font-medium mt-3.5">{data.ages}</h5>
        <p className="mt-5 text-wrap">{data.desc}</p>
        <button className="mt-7 bg-bfs-white text-bfs-blue font-medium text-lg px-6 py-1">
          {data.btn}
        </button>
      </div>
    </div>
  );
};

export default ClassCard;
