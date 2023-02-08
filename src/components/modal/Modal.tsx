import { useState, useEffect } from "react";
import { rupiah } from "../../helper/formatRupiah";

// Moneys Image
import seratusRibu from "../../assets/pecahan-uang/100000.jpg";
import limaPuluhRibu from "../../assets/pecahan-uang/50000.png";
import duaPuluhRibu from "../../assets/pecahan-uang/20000.png";
import sepuluhRibu from "../../assets/pecahan-uang/10000.jpg";
import limaRibu from "../../assets/pecahan-uang/5000.jpg";
import duaRibu from "../../assets/pecahan-uang/2000.jpeg";
import seribu from "../../assets/pecahan-uang/1000.jpg";
import limaRatus from "../../assets/pecahan-uang/500.jpg";
import duaRatus from "../../assets/pecahan-uang/200.jpg";
import seratus from "../../assets/pecahan-uang/100.jpg";

interface ModalProps {
  isShowModal: boolean;
  result: number;
  setIsShowModal: (isShow: boolean) => void;
}

const Modal = ({ isShowModal, setIsShowModal, result }: ModalProps) => {
  const [listMoney, setListMoney] = useState<number[]>([]);
  const listNominal: number[] = [
    100000, 50000, 20000, 10000, 5000, 2000, 1000, 500, 200, 100,
  ];

  let newValue: number = result;
  let moneys: number[] = [];

  const splitResult = () => {
    for (let i = 0; i < listNominal.length; i++) {
      if (newValue >= listNominal[i]) {
        newValue = newValue -= listNominal[i];
        moneys.push(listNominal[i]);
      }
      if (newValue >= listNominal[i]) {
        i -= 1;
      }
    }
    setListMoney(moneys);
  };

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

  const resetListMoney = () => {
    setListMoney([]);
    moneys = [];
  };

  useEffect(() => {
    splitResult();
  }, [isShowModal]);

  return (
    <>
      {isShowModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none min-h-[600px] max-h-[600px]">
                {/*header*/}
                <div className="flex items-start justify-between text-slate-700 p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    Hasil : {rupiah(+result)}
                  </h3>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto overflow-auto min-w-[40rem] max-sm:min-w-[20rem]">
                  {listMoney &&
                    listMoney.map((nominal) => (
                      <img
                        className="py-2 h-[18.75rem] w-[40rem] max-sm:h-[10rem] max-sm:w-[30rem]"
                        src={setImageMoney(nominal)}
                        alt={`${nominal} rupiah`}
                        title={`${nominal} rupiah`}
                      />
                    ))}
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => {
                      setIsShowModal(false);
                      resetListMoney();
                    }}
                  >
                    Tutup
                  </button>
                  <button
                    className="bg-pink-400 text-white active:bg-blue-400 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => {
                      setIsShowModal(false);
                      resetListMoney();
                    }}
                  >
                    OK
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};

export default Modal;
