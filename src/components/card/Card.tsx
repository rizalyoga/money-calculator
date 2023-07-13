import { rupiah } from "../../helper/formatRupiah";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import useSound from "use-sound";

// Image
import seratusRibu from "../../assets/pecahan-uang/100000.webp";
import limaPuluhRibu from "../../assets/pecahan-uang/50000.webp";
import duaPuluhRibu from "../../assets/pecahan-uang/20000.webp";
import sepuluhRibu from "../../assets/pecahan-uang/10000.jpg";
import limaRibu from "../../assets/pecahan-uang/5000.webp";
import duaRibu from "../../assets/pecahan-uang/2000.jpeg";
import seribu from "../../assets/pecahan-uang/1000.webp";
import limaRatus from "../../assets/pecahan-uang/500.webp";
import duaRatus from "../../assets/pecahan-uang/200.webp";
import seratus from "../../assets/pecahan-uang/100.webp";

// Audio
import tapSoundEffect from "../../assets/audio/klick-effect.mp3";
import play100rp from "../../assets/audio/100.mp3";
import play200rp from "../../assets/audio/200.mp3";
import play500rp from "../../assets/audio/500.mp3";
import play1000rp from "../../assets/audio/1000.mp3";
import play2000rp from "../../assets/audio/2000.mp3";
import play5000rp from "../../assets/audio/5000.mp3";
import play10000rp from "../../assets/audio/10000.mp3";
import play20000rp from "../../assets/audio/20000.mp3";
import play50000rp from "../../assets/audio/50000.mp3";
import play100000rp from "../../assets/audio/100000.mp3";

interface CardProps {
  nominal: string;
  image?: string;
  inputMoney: (nominal: string) => void;
}

const Card = ({ nominal, inputMoney }: CardProps) => {
  const [play100] = useSound(play100rp);
  const [play200] = useSound(play200rp);
  const [play500] = useSound(play500rp);
  const [play1000] = useSound(play1000rp);
  const [play2000] = useSound(play2000rp);
  const [play5000] = useSound(play5000rp);
  const [play10000] = useSound(play10000rp);
  const [play20000] = useSound(play20000rp);
  const [play50000] = useSound(play50000rp);
  const [play100000] = useSound(play100000rp);

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

  const playSoundEffect = (nominal: number) => {
    if (nominal === 100000) {
      play100000();
    } else if (nominal === 50000) {
      play50000();
    } else if (nominal === 20000) {
      play20000();
    } else if (nominal === 10000) {
      play10000();
    } else if (nominal === 5000) {
      play5000();
    } else if (nominal === 2000) {
      play2000();
    } else if (nominal === 1000) {
      play1000();
    } else if (nominal === 500) {
      play500();
    } else if (nominal === 200) {
      play200();
    } else if (nominal === 100) {
      play100();
    }
  };

  const setFlipImageMoney = (nominal: number) => {
    switch (nominal) {
      case 100000:
        return seratusRibu;
      case 50000:
        return seratusRibu;
      case 20000:
        return seratusRibu;
      case 10000:
        return seratusRibu;
      case 5000:
        return seratusRibu;
      case 2000:
        return seratusRibu;
      case 1000:
        return seratusRibu;
      case 500:
        return seratusRibu;
      case 200:
        return seratusRibu;
      case 100:
        return seratusRibu;
      default:
        break;
    }
  };

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    speed: 200,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  return (
    <div
      className="money-button flex flex-col cursor-pointer bg-gradient-to-br from-[#FC93B4] to bg-[#D27889] active:bg-gradient-to-r active:bg-[#FBD0D7] rounded-3xl neumorphism-shadow focus:outline-none focus:ring"
      title={`${nominal} rupiah`}
      onClick={() => {
        inputMoney(nominal), playSoundEffect(+nominal);
      }}
    >
      <div className="image-money object-cover ">
        <Slider {...settings}>
          <img
            className={`h-[12.5rem] w-full ${
              +nominal < 1000 ? "object-cover" : "object-fill"
            }  rounded-t-3xl`}
            src={setImageMoney(+nominal)}
            alt="nominal-image"
          />

          {/* <img
            className={`h-[12.5rem] w-full ${
              +nominal < 1000 ? "object-cover" : "object-fill"
            }  rounded-t-md`}
            src={setFlipImageMoney(+nominal)}
            alt="nominal-image"
          /> */}
        </Slider>
      </div>
      <span className="text-center py-2 text-[#F2F3F9] font-bold">
        {rupiah(+nominal)}
      </span>
    </div>
  );
};

export default Card;
