import { rupiah } from "../../helper/formatRupiah";
import seratusRibu from "../../assets/pecahan-uang/100000.jpg";
import limaPuluhRibu from "../../assets/pecahan-uang/50000.webp";
import duaPuluhRibu from "../../assets/pecahan-uang/20000.webp";
import sepuluhRibu from "../../assets/pecahan-uang/10000.jpg";
import limaRibu from "../../assets/pecahan-uang/5000.jpg";
import duaRibu from "../../assets/pecahan-uang/2000.jpeg";
import seribu from "../../assets/pecahan-uang/1000.jpg";
import limaRatus from "../../assets/pecahan-uang/500.jpg";
import duaRatus from "../../assets/pecahan-uang/200.jpg";
import seratus from "../../assets/pecahan-uang/100.jpg";

interface CardProps {
  nominal: string;
  image?: string;
  inputMoney: (nominal: string) => void;
}

const Card = ({ nominal, inputMoney }: CardProps) => {
  const setImageMoney = (nominal: number) => {
    switch (nominal) {
      case 100000:
        return seratusRibu;
      case 50000:
        return limaPuluhRibu;
      case 20000:
        return duaPuluhRibu;
      case 10000:
        return sepuluhRibu;
      case 5000:
        return limaRibu;
      case 2000:
        return duaRibu;
      case 1000:
        return seribu;
      case 500:
        return limaRatus;
      case 200:
        return duaRatus;
      case 100:
        return seratus;
      default:
        break;
    }
  };

  return (
    <div
      className="money-button flex flex-col cursor-pointer bg-gradient-to-r from-pink-300  via-white to bg-sky-300 active:bg-gradient-to-r active:from-sky-300 to active:bg-pink-400 rounded-md"
      title={`${nominal} rupiah`}
      onClick={() => inputMoney(nominal)}
    >
      <div className="image-money object-cover">
        <img
          className="h-[250px] w-full object-cover rounded-t-md"
          src={setImageMoney(+nominal)}
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
