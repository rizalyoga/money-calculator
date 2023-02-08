import { rupiah } from "../../helper/formatRupiah";

interface DisplayProps {
  displayCounter: string[];
  result: number;
}

const Display = ({ displayCounter, result }: DisplayProps) => {
  return (
    <div className="display min-h-[250px]flex flex-col pt-3.5">
      <div className="min-h-[120px] flex items-center p-3 rounded-t-xl bg-gradient-to-r from-slate-100 to-white backdrop-blur-md">
        <h1 className="text-2xl text-slate-700 font-bold">{displayCounter}</h1>
      </div>
      <div className="min-h-[80px] bg-pink-300 flex justify-center items-center p-3 rounded-b-xl">
        <h1 className="text-2xl font-bold">{rupiah(+result)}</h1>
      </div>
    </div>
  );
};

export default Display;
