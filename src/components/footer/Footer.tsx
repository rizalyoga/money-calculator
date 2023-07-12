import useSound from "use-sound";
import clearIcon from "../../assets/icon/clear.png";
import delIcon from "../../assets/icon/del-arrow.png";
import resultSoundEffect from "../../assets/audio/result.mp3";
import clickSoundEffect from "../../assets/audio/klick-effect.mp3";

interface FooterProps {
  plus: () => void;
  minus: () => void;
  countResult: () => void;
  deleteValue: () => void;
  showModal: () => void;
  clear: () => void;
}

const Footer = ({
  plus,
  minus,
  countResult,
  deleteValue,
  clear,
  showModal,
}: FooterProps) => {
  const [playResult] = useSound(resultSoundEffect);
  const [playClick] = useSound(clickSoundEffect);

  return (
    <footer className="fixed bottom-0 w-full min-h-[80px] bg-gradient-to-r bg-[#EE8997] flex justify-center items-center gap-4 max-[362px]:gap-1 rounded-t-xl ">
      <button
        className="text-4xl text-[#EE8997] font-bold bg-white py-2 px-[1.1rem] rounded-full active:bg-red-300 active:text-white neumorphism-shadow-button"
        onClick={() => {
          plus(), playClick();
        }}
      >
        +
      </button>
      <button
        className="text-4xl text-[#EE8997] font-bold bg-white py-2 px-[1.4rem] rounded-full active:bg-red-300 active:text-white neumorphism-shadow-button"
        onClick={() => {
          minus(), playClick();
        }}
      >
        -
      </button>
      <button
        className="font-bold text-4xl bg-[#FFBD66] text-white py-[0.5rem] px-[1.1rem] rounded-full active:bg-red-300 active:text-white neumorphism-shadow-button focus:outline-none focus:ring"
        onClick={() => {
          showModal(), playResult();
        }}
      >
        =
      </button>
      <button
        className="text-xl font-bold bg-white text-[#FFBD66] p-3.5 rounded-full active:bg-red-300 active:text-white neumorphism-shadow-button"
        onClick={() => {
          deleteValue(), playClick();
        }}
      >
        <img src={delIcon} alt="clear-icon" className="w-[28px]" />
      </button>
      <button
        className="text-xl font-bold bg-white text-[#FFBD66] px-4 py-3.5 rounded-full active:bg-[#FFBD66] active:text-white  neumorphism-shadow-button"
        onClick={() => {
          clear(), playClick();
        }}
      >
        <img src={clearIcon} alt="clear-icon" className="w-[28px]" />
      </button>
    </footer>
  );
};

export default Footer;
