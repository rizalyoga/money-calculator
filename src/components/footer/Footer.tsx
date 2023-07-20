import useSound from "use-sound";

// Icon
import clearIcon from "../../assets/icon/clear.png";
import delIcon from "../../assets/icon/del-arrow.png";
import minusIcon from "../../assets/icon/minus.png";
import plusIcon from "../../assets/icon/plus.png";
import equalIcon from "../../assets/icon/equal.png";

//  Audio
import resultSoundEffect from "../../assets/audio/Sama_Dengan.mp3";
import plusSoundEffect from "../../assets/audio/ditambah.mp3";
import minusSoundEffect from "../../assets/audio/dikurangi.mp3";
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
  const [playPlus] = useSound(plusSoundEffect);
  const [playMinus] = useSound(minusSoundEffect);

  return (
    <footer className="fixed bottom-0 w-full min-h-[80px] bg-gradient-to-r bg-[#EE8997] flex justify-center items-center gap-4 max-[362px]:gap-1 rounded-t-xl ">
      <button
        className="text-4xl text-[#EE8997] font-bold bg-white py-4 px-[1rem] rounded-full active:bg-red-300 active:text-white neumorphism-shadow-button"
        onClick={() => {
          plus(), playPlus();
        }}
      >
        <img src={plusIcon} alt="plus-icon" />
      </button>
      <button
        className="text-4xl text-[#EE8997] font-bold bg-white py-4 px-4 rounded-full active:bg-red-300 active:text-white neumorphism-shadow-button"
        onClick={() => {
          minus(), playMinus();
        }}
      >
        <img src={minusIcon} alt="minus-icon" />
      </button>
      <button
        className="font-bold text-4xl bg-[#FFBD66] text-white py-4 px-4 rounded-full active:bg-red-300 active:text-white neumorphism-shadow-button focus:outline-none focus:ring"
        onClick={() => {
          showModal();
          //  playResult();
        }}
      >
        <img src={equalIcon} alt="equal-icon" className="w-[28px]" />
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
