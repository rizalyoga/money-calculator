import { useState, useEffect } from "react";
import nominal from "./data/nominal.json";
import "./App.css";
import { evaluate } from "mathjs";

interface Money {
  nominal: string;
  image: string;
}

function App() {
  const [moneys, setMoneys] = useState<Money[]>(nominal);
  const [result, setResult] = useState<number>(0);
  const [firstValue, setFirstValue] = useState<number>(0);
  const [displayCounter, setDisplayCounter] = useState<string>("0");

  const inputMoney = (nominal: string): void => {
    if (firstValue == 0) {
      setFirstValue(+nominal);
      setDisplayCounter(nominal);
      // setResult(+nominal);
    } else if (
      displayCounter.charAt(displayCounter.length - 2) == "+" ||
      displayCounter.charAt(displayCounter.length - 2) == "-"
    ) {
      setDisplayCounter(displayCounter.concat(nominal));
    }
  };

  const plus = (): void => {
    if (
      firstValue != 0 &&
      displayCounter.charAt(displayCounter.length - 2) != "+" &&
      displayCounter.charAt(displayCounter.length - 2) != "-"
    ) {
      setDisplayCounter(displayCounter.concat(" + "));
    }
  };

  const minus = (): void => {
    if (
      firstValue != 0 &&
      displayCounter.charAt(displayCounter.length - 2) != "+" &&
      displayCounter.charAt(displayCounter.length - 2) != "-"
    ) {
      setDisplayCounter(displayCounter.concat(" - "));
    }
  };

  const countResult = async () => {
    // if (
    //   displayCounter.charAt(displayCounter.length - 2) == "+" ||
    //   displayCounter.charAt(displayCounter.length - 2) == "-"
    // ) {
    //   setDisplayCounter(displayCounter.slice(0, -3));
    //   setResult(evaluate(displayCounter));
    //   // console.log(displayCounter);
    // } else {
    setResult(evaluate(displayCounter));
  };

  const clear = () => {
    setFirstValue(0);
    setDisplayCounter("0");
    setResult(0);
  };

  useEffect(() => {
    countResult();
  }, [displayCounter]);

  return (
    <div className="main-container">
      <div className="inner-wrapper">
        <div className="display min-h-[300px] bg-red-600 flex flex-col">
          <div className="min-h-[120px] bg-slate-400 flex items-center p-3">
            <h1 className="text-2xl font-bold">{displayCounter}</h1>
          </div>
          <div className="min-h-[180px] bg-red-300 flex justify-center items-center p-3">
            <h1 className="text-2xl font-bold">{result}</h1>
          </div>
        </div>
        <div className="money-list mt-4 mb-[90px]  min-h-[200px] gap-2 grid lg:grid-cols-5 md:grid-cols-3 max-sm:grid-cols-2">
          {moneys.map((money) => (
            <div
              className="money-button flex flex-col bg-blue-300 cursor-pointer"
              key={money.nominal}
              title={`${money.nominal} rupiah`}
              onClick={() => inputMoney(money.nominal)}
            >
              <div className="image-money object-fill">
                <img
                  className="h-[250px] w-full object-cover"
                  src={money.image}
                  alt="nominal-image"
                />
              </div>
              <span className="text-center py-2">{money.nominal}</span>
            </div>
          ))}
        </div>
        <footer className="fixed bottom-0 w-full min-h-[80px] bg-violet-300 flex justify-center items-center gap-4  rounded-t-xl">
          <span
            className="text-2xl bg-slate-300 px-5 py-2 rounded-full cursor-pointer"
            onClick={plus}
          >
            +
          </span>
          <span
            className="text-2xl bg-slate-300 px-5 py-2 rounded-full cursor-pointer"
            onClick={minus}
          >
            -
          </span>
          <span className="text-2xl bg-slate-300 px-5 py-2 rounded-full cursor-pointer">
            D
          </span>
          <span
            className="text-2xl bg-slate-300 px-5 py-2 rounded-full cursor-pointer"
            onClick={countResult}
          >
            =
          </span>
          <span
            className="text-2xl bg-slate-300 px-5 py-2 rounded-full cursor-pointer"
            onClick={clear}
          >
            AC
          </span>
        </footer>
      </div>
    </div>
  );
}

export default App;
