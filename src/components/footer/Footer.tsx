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
  return (
    <footer className="fixed bottom-0 w-full min-h-[80px] bg-gradient-to-r from-blue-300 via-slate-200 to bg-pink-300 flex justify-center items-center gap-4 max-[362px]:gap-1 rounded-t-xl">
      <button
        className="text-2xl bg-white py-3 px-[1.35rem] rounded-full border-2 border-pink-400 active:bg-pink-400 active:text-white"
        onClick={plus}
      >
        +
      </button>
      <button
        className="text-2xl bg-white py-3 px-6 rounded-full border-2 border-pink-400 active:bg-pink-400 active:text-white"
        onClick={minus}
      >
        -
      </button>
      <button
        className="text-2xl bg-white py-3 px-5 rounded-full border-2 border-pink-400 active:bg-pink-400 active:text-white"
        onClick={showModal}
      >
        =
      </button>
      <button
        className="text-xl bg-white p-3.5 rounded-full border-2 border-pink-400 active:bg-pink-400 active:text-white"
        onClick={deleteValue}
      >
        del
      </button>
      <button
        className="text-xl bg-white px-4 py-3.5 rounded-full border-2 border-pink-400 active:bg-pink-400 active:text-white "
        onClick={clear}
      >
        AC
      </button>
    </footer>
  );
};

export default Footer;
