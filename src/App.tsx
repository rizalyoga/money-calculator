import { useState, useEffect } from "react";
import "./App.css";
import { evaluate } from "mathjs";
import nominal from "./data/nominal.json";

// Components
import { showAlert } from "./components/alert/Alert";
import Display from "./components/display/Display";
import Footer from "./components/footer/Footer";
import Card from "./components/card/Card";
import Modal from "./components/modal/Modal";

interface Money {
  nominal: string;
  image: string;
}

function App() {
  const [moneys, setMoneys] = useState<Money[]>(nominal);
  const [result, setResult] = useState<number>(0);
  const [firstValue, setFirstValue] = useState<number>(0);
  const [displayCounter, setDisplayCounter] = useState<string[]>([]);
  const [isShowModal, setIsShowModal] = useState<boolean>(false);

  const inputMoney = (nominal: string): void => {
    if (firstValue == 0) {
      setFirstValue(+nominal);
      setDisplayCounter([...displayCounter, nominal]);
    } else if (
      displayCounter[displayCounter.length - 1] == " + " ||
      displayCounter[displayCounter.length - 1] == " - "
    ) {
      setDisplayCounter([...displayCounter, nominal]);
    } else {
      showAlert();
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

  const clear = (): void => {
    setFirstValue(0);
    setDisplayCounter([]);
    setResult(0);
  };

  const showModal = () => {
    setIsShowModal((show) => !show);
  };

  useEffect(() => {
    if (displayCounter.length == 0) {
      setFirstValue(0);
    }

    countResult();
  }, [displayCounter]);

  return (
    <>
      <div className="main-container bg-gradient-to-br from-white via-cyan-100 to-pink-100 ">
        {/* Display & Cards Components */}
        <div className="inner-wrapper">
          <Display displayCounter={displayCounter} result={result} />
          <div className="money-list mt-4 pb-[95px] min-h-[200px] gap-2 grid lg:grid-cols-5 md:grid-cols-3 max-[768px]:grid-cols-3 max-sm:grid-cols-2 max-[322px]:grid-cols-1">
            {moneys.map((money) => (
              <Card
                image={money.image}
                nominal={money.nominal}
                inputMoney={inputMoney}
                key={money.nominal}
              />
            ))}
          </div>
        </div>
        {/* Footer that contain buttons */}
        <Footer
          plus={plus}
          minus={minus}
          countResult={countResult}
          deleteValue={deleteValue}
          clear={clear}
          showModal={showModal}
        />
      </div>
      <Modal
        isShowModal={isShowModal}
        setIsShowModal={setIsShowModal}
        result={result}
      />
    </>
  );
}

export default App;
