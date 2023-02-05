import { useState, useEffect } from "react";
import nominal from "./data/nominal.json";
import "./App.css";
import { evaluate } from "mathjs";
import { rupiah } from "./helper/formatRupiah";

interface Money {
  nominal: string;
  image: string;
}

function App() {
  const [moneys, setMoneys] = useState<Money[]>(nominal);
  const [result, setResult] = useState<number>(0);
  const [firstValue, setFirstValue] = useState<number>(0);
  const [displayCounter, setDisplayCounter] = useState<string[]>([]);

  const inputMoney = (nominal: string): void => {
    if (firstValue == 0) {
      setFirstValue(+nominal);
      setDisplayCounter([...displayCounter, nominal]);
    } else if (
      displayCounter[displayCounter.length - 1] == " + " ||
      displayCounter[displayCounter.length - 1] == " - "
    ) {
      setDisplayCounter([...displayCounter, nominal]);
    }
  };

  const plus = (): void => {
    const plusOperator: string = " + ";

    if (
      firstValue != 0 &&
      displayCounter[displayCounter.length - 1].includes("-")
    ) {
      setDisplayCounter([...displayCounter.slice(0, -1), plusOperator]);
    } else if (
      firstValue != 0 &&
      displayCounter[displayCounter.length - 1] != " + " &&
      displayCounter[displayCounter.length - 1] != " - "
    ) {
      setDisplayCounter([...displayCounter, plusOperator]);
    }
  };

  const minus = (): void => {
    const minusOperator: string = " - ";

    if (
      firstValue != 0 &&
      displayCounter[displayCounter.length - 1].includes("+")
    ) {
      setDisplayCounter([...displayCounter.slice(0, -1), minusOperator]);
    } else if (
      firstValue != 0 &&
      displayCounter[displayCounter.length - 1] != " + " &&
      displayCounter[displayCounter.length - 1] != " - "
    ) {
      setDisplayCounter([...displayCounter, minusOperator]);
    }
  };

  const countResult = async () => {
    if (displayCounter.length == 0) {
      setResult(0);
    } else {
      setResult(evaluate(displayCounter.join("")));
    }
  };

  const clear = (): void => {
    setFirstValue(0);
    setDisplayCounter([]);
    setResult(0);
  };

  const deleteValue = (): void => {
    if (
      displayCounter[displayCounter.length - 1] == " - " ||
      displayCounter[displayCounter.length - 1] == " + "
    ) {
      setDisplayCounter(displayCounter.slice(0, -3));
    } else {
      setDisplayCounter(displayCounter.slice(0, -2));
    }
  };

  useEffect(() => {
    if (displayCounter.length == 0) {
      setFirstValue(0);
    }

    countResult();
  }, [displayCounter]);

  return (
    <div className="main-container">
      <div className="inner-wrapper">
        <div className="display min-h-[250px]flex flex-col">
          <div className="min-h-[120px] bg-slate-300 flex items-center p-3 rounded-t-xl mt-3">
            <h1 className="text-2xl font-bold">{displayCounter}</h1>
          </div>
          <div className="min-h-[130px] bg-pink-300 flex justify-center items-center p-3 rounded-b-xl">
            <h1 className="text-2xl font-bold">{rupiah(+result)}</h1>
          </div>
        </div>
        <div className="money-list mt-4 mb-[95px] min-h-[200px] gap-2 grid lg:grid-cols-5 md:grid-cols-3 max-sm:grid-cols-2">
          {moneys.map((money) => (
            <div
              className="money-button flex flex-col bg-blue-300 cursor-pointer active:bg-pink-400"
              key={money.nominal}
              title={`${money.nominal} rupiah`}
              onClick={() => inputMoney(money.nominal)}
            >
              <div className="image-money object-cover">
                <img
                  className="h-[250px] w-full object-cover"
                  src={money.image}
                  alt="nominal-image"
                />
              </div>
              <span className="text-center py-2">{rupiah(+money.nominal)}</span>
            </div>
          ))}
        </div>
        <footer className="fixed bottom-0 w-full min-h-[80px] bg-blue-300 flex justify-center items-center gap-4  rounded-t-xl">
          <button
            className="text-2xl bg-slate-300 px-5 py-2 rounded-full cursor-pointer active:bg-pink-400"
            onClick={plus}
          >
            +
          </button>
          <button
            className="text-2xl bg-slate-300 px-5 py-2 rounded-full cursor-pointer active:bg-pink-400"
            onClick={minus}
          >
            -
          </button>
          <button
            className="text-2xl bg-slate-300 px-5 py-2 rounded-full cursor-pointer active:bg-pink-400"
            onClick={countResult}
          >
            =
          </button>
          <button
            className="text-xl bg-slate-300 px-5 py-2 rounded-full cursor-pointer active:bg-pink-400"
            onClick={deleteValue}
          >
            del
          </button>
          <button
            className="text-xl bg-slate-300 px-5 py-2 rounded-full cursor-pointer active:bg-pink-400"
            onClick={clear}
          >
            AC
          </button>
        </footer>
      </div>
    </div>
  );
}

export default App;
