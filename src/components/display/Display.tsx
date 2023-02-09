import { useState, useEffect } from "react";
import { rupiah } from "../../helper/formatRupiah";

interface DisplayProps {
  displayCounter: string[];
  result: number;
}

const Display = ({ displayCounter, result }: DisplayProps) => {
  const [scrollTop, setScrollTop] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollTop(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`display sticky top-0 min-h-[250px]flex flex-col ${
        scrollTop != 0 ? "pt-0" : "pt-3.5"
      }`}
    >
      <div
        className={`min-h-[120px] flex items-center p-3 bg-gradient-to-r from-slate-100 to-white backdrop-blur-md ${
          scrollTop != 0 ? "min-h-[100px]" : "rounded-t-xl"
        }`}
      >
        <h1
          className={`${
            scrollTop != 0 ? "text-lg" : "text-2xl"
          }  text-slate-700 font-bold`}
        >
          {displayCounter}
        </h1>
      </div>
      <div
        className={`${
          scrollTop != 0 ? "min-h-[60px] shadow-lg" : "min-h-[80px]"
        } bg-pink-300 flex justify-center items-center p-3 rounded-b-xl`}
      >
        <h1 className="text-2xl font-bold">{rupiah(+result)}</h1>
      </div>
    </div>
  );
};

export default Display;
