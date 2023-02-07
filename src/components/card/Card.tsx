import { rupiah } from "../../helper/formatRupiah";

interface CardProps {
  nominal: string;
  image: string;
  inputMoney: (nominal: string) => void;
}

const Card = ({ nominal, image, inputMoney }: CardProps) => {
  return (
    <div
      className="money-button flex flex-col cursor-pointer bg-gradient-to-r from-pink-300  via-white to bg-sky-300 active:bg-gradient-to-r active:from-sky-300  to active:bg-pink-400 rounded-md"
      title={`${nominal} rupiah`}
      onClick={() => inputMoney(nominal)}
    >
      <div className="image-money object-cover">
        <img
          className="h-[250px] w-full object-cover rounded-t-md"
          src={image}
          alt="nominal-image"
        />
      </div>
      <span className="text-center py-2 text-slate-700 font-bold">
        {rupiah(+nominal)}
      </span>
    </div>
  );
};

export default Card;
