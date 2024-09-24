"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image from "next/image";
import ProgressBar from "./components/ProgressBar";
import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";
import { useState, useRef } from "react";
import { IoArrowForward } from "react-icons/io5";
import Link from "next/link";

export default function HomePage() {
  const sliderRef = useRef(null); // Create a ref to access the Slider compone

  // Reusable SliderContent Component
  const SliderContent = () => (
    <div className="py-auto flex flex-col items-center space-y-10 text-white md:mt-10 px-3">
      <div>
        <h1 className="text-center md:text-5xl lg:text-7xl text-3xl px-10 font-bold mx-auto">
          Från 49 kronor per pall!
        </h1>
      </div>
      <div className="px-20">
        <p className="xl:text-xl text-center">Hyr din pallplats hos oss!</p>
      </div>
      <Link href="#frankr">
        <button
          className="hover:bg-white bg-[#ff6300] flex items-center hover:border-[#ff6300]
        hover:text-[#ff6300] text-white border-4 border-[#ff6300] text-nowrap py-1 md:py-3 font-bold px-3 md:px-5 lg:px-10 text-center rounded-md text-sm"
        >
          UPPTÄCK MER{" "}
          <span className="bg-white rounded-full md:p-2 p-1 ms-3 hover:bg-white border-2 border-[#ff6300]">
            <IoArrowForward color="#ff6300" size={19} />
          </span>
        </button>
      </Link>
    </div>
  );
  const SliderContent2 = () => (
    <div className="py-auto flex flex-col items-center space-y-10 text-white md:mt-10 px-3">
      <div>
        <h1 className="text-center md:text-5xl lg:text-7xl text-3xl px-10 font-bold mx-auto">
          Godshantering
        </h1>
      </div>
      <div className="px-10">
        <p className="xl:text-xl text-center">
          Vi tar hand om ut-och inlastning av ditt gods
        </p>
      </div>
      <Link href="/services#cargo">
      <button
         className="hover:bg-white bg-[#ff6300] flex items-center hover:border-[#ff6300]
         hover:text-[#ff6300] text-white border-4 border-[#ff6300] text-nowrap py-1 md:py-3 font-bold px-3 md:px-5 lg:px-10 text-center rounded-md text-sm"
         >
        UPPTÄCK MER
        <span className="bg-white rounded-full md:p-2 p-1 ms-3 hover:bg-white border-2 border-[#ff6300]">
          <IoArrowForward color="#ff6300" size={19} />
        </span>
      </button>
      </Link>
    </div>
  );
  const SliderContent3 = () => (
    <div className="py-auto flex flex-col items-center space-y-10 text-white md:mt-10 px-3">
      <div>
        <h1 className="text-center md:text-5xl lg:text-7xl text-3xl px-10 font-bold mx-auto">
          Vi ordnar hela flödet
        </h1>
      </div>
      <div className="px-20">
        <p className="xl:text-xl text-center">
          Vi tar hand om hela flödet åt er
        </p>
      </div>
      <Link href="/services#other">
      <button
         className="hover:bg-white bg-[#ff6300] flex items-center hover:border-[#ff6300]
         hover:text-[#ff6300] text-white border-4 border-[#ff6300] text-nowrap py-1 md:py-3 font-bold px-3 md:px-5 lg:px-10 text-center rounded-md text-sm"
         >
        UPPTÄCK MER
        <span className="bg-white rounded-full md:p-2 p-1 ms-3 hover:bg-white border-2 border-[#ff6300]">
          <IoArrowForward color="#ff6300" size={19} />
        </span>
      </button>
      </Link>
    </div>
  );

  // Banner slider settings

  // Custom Next Arrow
  const NextArrow = ({ onClick }) => {
    return (
      <div
        className="absolute top-1/2 right-0 transform -translate-y-1/2  bg-[#001D23D1]  p-2 rounded-full text-white cursor-pointer z-10"
        onClick={onClick}
      >
        <GrNext size={30} />
      </div>
    );
  };

  // Custom Previous Arrow
  const PrevArrow = ({ onClick }) => {
    return (
      <div
        className="absolute top-1/2 left-0 transform -translate-y-1/2 text-white bg-[#001D23D1]  p-2 rounded-full cursor-pointer z-10"
        onClick={onClick}
      >
        <GrPrevious size={30} />
      </div>
    );
  };

  const BannerSlider = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          // arrows: false,
        },
      },
    ],
  };

  // Slick Slider settings
  const sliderSettings = {
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
    autoplay: true,
  };

  // Testomonial slider settings

  const testimonials = [
    {
      image: "/imgs/Ellipse3.png",
      text: " Ställde upp med kort varsel när vi satt i klistret, kom med dubbelt antal mannar och gjorde hela jobbet även innan utsatt tid. En räddare i nöden!",
      name: "Stefan, VD",
      // profession: "Profession 1",
    },
    {
      image: "/imgs/Ellipse3.png",
      text: " Snabba, effektiva och trevliga - grymt bra killar! Rekommenderas starkt av oss!",
      name: "Mikael, VD",
      // profession: "Profession 2",
    },
    {
      image: "/imgs/Ellipse3.png",
      text: "Pallhotellet är det mest flexibla team vi har mött. Ställer alltid upp vid behov, alla tider och alla dagar. Stort tack!",
      name: "Magnus, Logistikansvarig",
      // profession: "Profession 3",
    },
    {
      image: "/imgs/Ellipse3.png",
      text: "Vi har frekventa behov av snabba in och utleveranser. Pallhotellet har hittils ordnat det med bravur. Schyssta priser, snabb kvalitetsservice, vad mer kan man begära? ",
      name: "Damir",
      profession: "Profession 4",
    },
  ];

  // Set the initial active slide to be the middle one
  const [activeSlide, setActiveSlide] = useState(
    Math.floor(testimonials.length / 2)
  );

  const handleSlideChange = (next) => {
    setActiveSlide(next);
  };

  const testimonialSettings = {
    centerMode: true,
    centerPadding: "0px",
    slidesToShow: 3,
    autoplay: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          arrows: true,
          autoplay: true,
          autoplaySpeed: 2000,
        },
      },
    ],
    beforeChange: (current, next) => handleSlideChange(next),
  };

  // Slider settings for What We Offer section

  const solutionSettings = {
    slidesToShow: 3,
    arrows: false,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          arrows: false,
        },
      },
    ],
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-[url('/imgs/Frame5892.png')] bg-cover bg-center h-screen flex justify-center md:px-20 items-center px-5">
        <div className="w-full max-w-5xl ">
          <Slider {...BannerSlider}>
            <SliderContent />
            <SliderContent2 />
            <SliderContent3 />
          </Slider>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="bg-[#08343D] lg:flex items-center justify-around px-10 md:px-20 text-white lg:py-4 py-14">
        <div className="flex items-center mx-6 mb-6 space-x-5 md:space-x-14">
          <Image
            src="/imgs/Layer_1.png"
            alt="Flexible warehousing"
            width={64}
            height={64}
          />
          <div className="pe-5">
            <h3 className="xl:text-xl md:text-sm font-bold text-sm lg:font-bold md:font-medium">
              Flexibel lagerhållning
            </h3>
            <p className="text-[0.6rem] md:text-[0.9rem]">
              Lagring hos oss är flexibelt och vi erbjuder både kort- och
              långtidsförvaring.
            </p>
          </div>
        </div>

        <div className="flex items-center mx-6 mb-6 space-x-5 md:space-x-14">
          <Image
            src="/imgs/Layer_2.png"
            alt="Fast order processing"
            width={64}
            height={64}
          />
          <div className="pe-5">
            <h3 className="xl:text-xl md:text-sm font-bold text-sm lg:font-bold md:font-medium">
              Snabb orderhantering
            </h3>
            <p className="text-[0.6rem] md:text-[0.9rem]">
            Med snabb orderhantering och ett stort lager lägger vi grunden för ett effektivare godshantering.
            </p>
          </div>
        </div>

        <div className="flex items-center mx-6 mb-6 space-x-5 md:space-x-14">
          <Image
            src="/imgs/Layer_3.png"
            alt="More efficient flow"
            width={64}
            height={64}
          />
          <div className="pe-5">
            <h3 className="xl:text-xl md:text-sm font-bold text-sm lg:font-bold md:font-medium">
              Effektivare flöde
            </h3>
            <p className="text-[0.6rem] md:text-[0.9rem]">
              Vi tar gärna hand om hela ditt flöde. Du behover bara ringa ett
              telefonnummer.
            </p>
          </div>
        </div>
      </section>

      {/* <!-- Section3 --> */}

      <section className="flex md:flex-row flex-col md:px-20 px-10 md:my-20 my-10">
        {/* <!--col-1 Text --> */}
        <div className="md:pe-8 inline-flex justify-center flex-col space-y-6 md:w-6/12 w-full text-center md:text-start">
          <div>
            <p className="bg-[#FF6F0F17] text-[#ff6300] inline-block p-4 text-lg">
              Vilka är vi
            </p>
          </div>
          <p className="md:text-4xl text-lg font-bold leading-loose">
            Vi hjälper dig med lagerhållning, godshantering, dokumentation och
            mycket mer.
          </p>
          <p className="text-gray-500">
          Våra lager har tillräcklig kapacitet för att ha många olika typer av gods, samt att vi kan erbjuda olika lageralternativ anpassade till olika förvaringskrav. Vi har en lång erfarenhet inom lagerhållning samt logistik och hjälper gärna till att hitta den optimala lösningen för er.
          </p>
          <p className="bg-[#7d7d7d21] text-gray-500 p-[2rem] pl-5 place-content-around ">
          "Förstår att godshantering kan vara en utmaning för många företag, det är därför vi erbjuder vår expertis till både små och stora företag. Vi har sedan länge arbetat med lager och terminaler och har en lång erfarenhet av att hantera olika typer av gods."
            <br />
            <span className="text-orange-600 mt-5">
              Christopher Jarl, VD Pallhotellet.se
            </span>
          </p>
          <div className="flex text-wrap justify-center md:justify-start space-y-5 sm:space-y-0">
            <Link href="/contact">
              <button
                className="flex items-center md:justify-around text-[#ff6300] hover:text-white hover:bg-[#ff6300] border-[#ff6300] border-2 text-nowrap md:py-3 py-2  px-3 md:px-4 lg:px-8  
           text-center rounded-md"
              >
                Kontakta oss
                <span className="bg-white rounded-full border-[#ff6300] border-2 p-1 ms-3">
                  <IoArrowForward color="#ff6300" size={23} />
                </span>
              </button>
            </Link>
          </div>
        </div>
        {/* <!--col-2 side Image --> */}
        <div className="my-10 md:my-0 md:flex justify-end md:px-5 md:w-6/12 w-full">
          <div className="relative">
            <Image
              src="/imgs/Rectangle4.png"
              width={500}
              height={200}
              alt="Background Image"
              className="w-full h-full "
            />
            <div className="absolute sm:-top-6 sm:-left-10 -top-3 -left-5 border-8 border-white">
              <Image
                src="/imgs/image2.png"
                width={500}
                height={300}
                alt="Overlay Image"
                className="md:w-[6rem] lg:w-[9rem] xl:w-[12rem] w-[5rem] sm:w-[9rem]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Slider: What We Offer */}

      <section className="bg-[#7d7d7d21] p-10 md:px-20">
        <div className="text-center space-y-4">
          <p className="bg-[#FF6F0F17] text-[#ff6300] p-3 inline-block">
            Vad erbjuder vi
          </p>
          <p className="md:text-[2rem] text-[1.2rem] font-bold md:w-5/12 mx-auto">
            Vi erbjuder flexibla och skräddarsydda lösningar
          </p>
        </div>

        <Slider {...solutionSettings}>
          <div className="md:px-5 mt-10">
            <div className=" rounded-t-3xl flex flex-col justify-center item-center text-center border-t-8 pb-0 mb-0 border-[#ff6300] bg-white">
              <div>
                <p className="inline-block px-2 rounded-md py-2 bg-[#ff6300] text-[1.2rem] -mt-1 text-white md:w-5/12 w-8/12 font-semibold">
                  Lagring
                </p>
              </div>
              <p className="px-2 mt-8 text-[1.3rem] font-bold md:h-10 h-20">
                Lager som passar allas behov
              </p>
              <p className="text-[#989898] py-4 w-11/12 md:w-8/12 mx-auto text-[1rem]  lg:h-24 sm:h-36">
                I våra lager har vi plats för alla typer av gods
              </p>
              {/* <!-- Greybox1 --> */}
              <div className="p-6">
                <ProgressBar
                  total={12000}
                  current={4921}
                  totalLabel="pallkapacitet"
                  currentLabel="pallar i lager"
                />
              </div>
              {/* <!-- Greybox Image --> */}
              <div className="w-full mt-4">
                <Image
                  width={1000}
                  height={500}
                  src="/imgs/Rectangle12.png"
                  alt="Grey box"
                />
              </div>
            </div>
          </div>

          {/* 2nd Box  */}

          <div className="md:px-5 mt-10">
            <div className=" rounded-t-3xl flex flex-col justify-center item-center text-center border-t-8 pb-0 mb-0 border-[#ff6300] bg-white">
              <div>
                <p className="inline-block px-2 rounded-md py-2 bg-[#ff6300] -mt-1 text-white md:w-5/12 w-8/12 font-semibold">
                  Godshantering
                </p>
              </div>
              <p className="px-2 mt-8 text-[1.3rem] font-bold md:h-10 h-20">
                Vi tar hand om dina varor
              </p>
              <p className="text-[#989898] py-4 w-11/12 md:w-8/12 mx-auto text-[1rem]  lg:h-24 sm:h-36">
                Vi ombesörjer lagerhållning och hjälper till med annat. 
              </p>
              {/* <!-- Greybox1 --> */}
              <div className="p-6 invisible">
                <ProgressBar
                  total={10}
                  current={4}
                  totalLabel="kunder som ml"
                  currentLabel="existing customers"
                />
              </div>
              {/* <!-- Greybox Image --> */}
              <div className="w-full mt-4">
                <Image
                  width={1000}
                  height={500}
                  src="/imgs/Rectangle13.png"
                  alt="Grey box"
                />
              </div>
            </div>
          </div>

          <div className="md:px-5 mt-10">
            <div className=" rounded-t-3xl flex flex-col justify-center item-center text-center border-t-8 pb-0 mb-0 border-[#ff6300] bg-white">
              <div>
                <p className="inline-block px-2 rounded-md py-2 bg-[#ff6300] -mt-1 text-white md:w-5/12 w-8/12 font-semibold">
                  Dokumentation
                </p>
              </div>
              <p className="px-2 mt-8 text-[1.3rem] font-bold md:h-10 h-20">
                Vi ordnar det mesta
              </p>
              <p className="text-[#989898] py-4 w-11/12 md:w-8/12 mx-auto text-[1rem]  lg:h-24 sm:h-36">
                Du som kund behöver bara ringa ett nummer.
              </p>
              {/* <!-- Greybox1 --> */}
              <div className="p-6 invisible">
                <ProgressBar
                  total={5}
                  current={1}
                  totalLabel="customers as ml"
                  currentLabel="Customer"
                />
              </div>
              {/* <!-- Greybox Image --> */}
              <div className="w-full mt-4">
                <Image
                  width={1000}
                  height={500}
                  src="/imgs/Rectangle14.png"
                  alt="Grey box"
                />
              </div>
            </div>
          </div>
        </Slider>
      </section>

      {/* Services section / 3-Images  */}

      <section className="my-10 bg-[url('/imgs/Frame5894.png')] p-10 md:p-20">
        <div className="flex flex-col justify-center lg:flex-row">
          <div className="lg:w-3/12 w-full lg:pt-44">
            <div className="relative my-10 lg:my-0 lg:flex justify-center  hidden">
              <div>
                <Image
                  width={350}
                  height={200}
                  src="/imgs/Rectangle12.png"
                  alt="Grey box"
                />
              </div>
              <div className="absolute top-0">
                <p
                  className="text-center rounded-md py-1 bg-[#ff6300]
             text-white px-8 inline font-semibold"
                >
                  Lagring
                </p>
              </div>
            </div>
          </div>

          <section id="frankr" className="lg:w-6/12 w-full text-white lg:px-10">
            <div className="text-center md:text-start space-y-10 mb-10 md:mb-40">
              <p className="md:px-2 px-5 text-3xl font-bold">
                Från 49kr / mån per pall
              </p>
              <p className="text-lg">
                Genom att endast betala för det utrymme du faktiskt använder kan
                du optimera ditt lager och eliminera onödiga kostnader. Detta
                kan vara särskilt fördelaktigt för företag med varierande
                lagerbehov eller för de som bedriver säsongsbaserad verksamhet.
              </p>
              <p className="text-lg">
                Att välja Pallhotellet.se för dina lagerbehov innebär att du
                inte bara får tillgång till flexibla och kostnadseffektiva
                lagerlösningar men även att du får en partner som är engagerad i
                att lösa ditt företags unika utmaningar samt hjälpa dig att
                optimera ditt lagerflöde.
              </p>
              <p className="text-lg">
                Vårt engagemang att hantera dina in- och utleveranser innebär
                att du kan lägga större fokus på ditt företags kärnverksamhet,
                vilket främjar effektivitet inom ditt företag. Dessutom är vårt
                erbjudande utformat för att vara så flexibelt som möjligt,
                vilket ger dig friheten att anpassa ditt lagerutrymme efter dina
                behov - när du behöver det!
              </p>
              <p className="text-lg">Kontakta oss gärna för mer info!</p>
            </div>
            <div className="lg:relative my-10 hidden lg:block">
              <div className="flex justify-center mt-10 lg:my-0 lg:absolute lg:-top-20 lg:right-0">
                <div className="flex justify-center relative">
                  <div>
                    <Image
                      width={350}
                      height={200}
                      src="/imgs/Rectangle14.png"
                      alt="Grey box"
                    />
                  </div>
                  <div className="absolute top-0">
                    <p
                      className="text-center rounded-md py-1 bg-[#ff6300] text-[1.2rem]
             text-white px-8 inline font-semibold"
                    >
                      Godshantering
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <div className="lg:w-3/12 w-full  hidden lg:block">
            <div className="flex justify-center relative">
              <Image
                width={350}
                height={200}
                src="/imgs/Rectangle13.png"
                alt="Grey box"
              />
              <div className="absolute top-0">
                <p
                  className="text-center rounded-md py-1 bg-[#ff6300] text-[1.2rem]
             text-white px-8 inline font-semibold"
                >
                  Godshantering
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Staff Section */}

      <section className="md:py-20 py-10 flex justify-center flex-col px-10">
        <div className="text-center space-y-8">
          <p className="bg-[#FF6F0F17] text-[#ff6300] inline text-xl font-semiobold p-3">
            Vår personal
          </p>
          <p className="md:text-4xl text-3xl font-bold md:w-2/12 w-5/12 mx-auto">
            Kontakta oss redan idag!
          </p>
        </div>

        <div className="my-10">
          {/* Regular layout for medium and larger screens */}
          <div className="hidden md:flex flex-col md:flex-row justify-center md:space-x-10 space-y-5 md:space-y-0">
            <div className="bg-[#f4f4f4] rounded-md text-center flex justify-center flex-col">
              <Image src="/imgs/1.png" alt="Staff 1" width={300} height={300} />
              <p className="pt-5 pb-1 text-lg  font-bold">Sylvain</p>
              <p className="py-1 text-lg text-[#FF6F0F]">Sälj / Kundkontakt</p>
              <p className="pt-1 pb-5 text-lg">0141-21 50 44 </p>
            </div>
            <div className="bg-[#F4F4F4] rounded-md text-center flex justify-center flex-col">
              <Image src="/imgs/2.png" alt="Staff 2" width={300} height={300} />
              <p className="pt-5 pb-1 text-lg  font-bold">Lukas</p>
              <p className="py-1 text-lg text-[#FF6F0F]">Sälj / Ekonomi</p>
              <p className="pt-1 pb-5 text-lg">0141-21 50 44 </p>
            </div>
            <div className="bg-[#F4F4F4] rounded-md text-center flex justify-center flex-col">
              <Image src="/imgs/3.png" alt="Staff 3" width={300} height={300} />
              <p className="pt-5 pb-1 text-lg  font-bold">Elma </p>
              <p className="py-1 text-lg text-[#FF6F0F]">Ekonomi </p>
              <p className="pt-1 pb-5 text-lg">0141-21 50 44 </p>
            </div>
          </div>

          {/* Slick Slider for small screens */}
          <div className="md:hidden px-10">
            <Slider {...sliderSettings}>
              <div>
                <div className="bg-[#f4f4f4] rounded-md text-center flex justify-center flex-col">
                  <Image
                    src="/imgs/1.png"
                    alt="Staff 1"
                    width={800}
                    height={300}
                  />
                  <p className="pt-5 pb-1 text-lg  font-bold">Sylvain</p>
                  <p className="py-1 text-lg text-[#FF6F0F]">
                    Sälj / Kundkontakt
                  </p>
                  <p className="pt-1 pb-5 text-lg">0141-21 50 44 </p>
                </div>
              </div>
              <div>
                <div className="bg-[#F4F4F4] rounded-md text-center flex justify-center flex-col">
                  <Image
                    src="/imgs/2.png"
                    alt="Staff 2"
                    width={800}
                    height={300}
                  />
                  <p className="pt-5 pb-1 text-lg  font-bold">Lukas</p>
                  <p className="py-1 text-lg text-[#FF6F0F]">Sälj / Ekonomi</p>
                  <p className="pt-1 pb-5 text-lg">0141-21 50 44 </p>
                </div>
              </div>
              <div>
                <div className="bg-[#F4F4F4] rounded-md text-center flex justify-center flex-col">
                  <Image
                    src="/imgs/3.png"
                    alt="Staff 3"
                    width={800}
                    height={300}
                  />
                  <p className="pt-5 pb-1 text-lg  font-bold">Elma </p>
                  <p className="py-1 text-lg text-[#FF6F0F]">Ekonomi </p>
                  <p className="pt-1 pb-5 text-lg">0141-21 50 44 </p>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </section>

      {/* Last Testimonial-Slider Section */}

      <section className="relative pt-10 md:pb-20 pb-10 px-10 md:px-[65px] bg-gray-100">
        <div className="text-center space-y-8 my-10">
          <p className="bg-[#FF6F0F17] text-[#ff6300] text-xl font-semibold p-3 inline">
            Kundomdömen
          </p>
          <p className="md:text-[2rem] text-[1.2rem] font-bold">
            Vad säger våra kunder om oss
          </p>
        </div>
        {/* Custom navigation buttons */}
        <div className="flex justify-center ">
          <div className="absolute transform z-20 translate-y-1/2 space-x-52">
            <button
              aria-label="Previous Slide"
              onClick={() => sliderRef.current.slickPrev()} // Use the ref to trigger slickPrev
            >
              <GrPrevious className="text-[#ff6300] text-3xl" />
            </button>

            <button
              aria-label="Next Slide"
              onClick={() => sliderRef.current.slickNext()} // Use the ref to trigger slickNext
            >
              <GrNext className="text-[#ff6300] text-3xl" />
            </button>
          </div>
        </div>
        <Slider ref={sliderRef} {...testimonialSettings}>
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`testimonial-slide ${
                activeSlide === index ? "active" : "inactive"
              }`}
            >
              <div className="pb-10 relative">
                <Image
                  src={testimonial.image}
                  className="mx-auto rounded-full p-1 border-2 border-[#ff6300]"
                  alt="{Client-Img ${index + 1}}"
                  width={90}
                  height={90}
                />
              </div>

              <div
                className={` text-white bg-[#ff6300]
                  text-center md:mx-8 mx-2 ${
                    activeSlide === index ? "opacity-100" : ""
                  }
                   bg-[#ff6300] rounded-lg md:p-5 p-4 space-y-2 text-white`}
              >
                <div className="md:min-h-32">
                  <p>{testimonial.text}</p>
                  <p className="font-semibold">{testimonial.name}</p>
                  {/* <p>{testimonial.profession}</p> */}
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </section>
    </div>
  );
}
