import Image from "next/image";
import dynamic from "next/dynamic";
import React from "react";
// import MapComponent from "../components/MapComponent";
import {
  AiOutlineMail,
  AiOutlinePhone,
  AiOutlineEnvironment,
} from "react-icons/ai";

// Dynamically import MapComponent with SSR disabled
const MapComponent = dynamic(() => import("../components/MapComponent"), {
  ssr: false,
});

export default function Findus() {
  return (
    <>
      {/* Hero Section */}
      <section className="flex items-center justify-center bg-center bg-cover bg-[url('/imgs/contactus.png')] h-[30rem]">
        <div className=" mx-auto flex justify-center items-center">
          <h1 className="text-white text-5xl font-bold">Hitta oss</h1>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="md:-my-40 md:py-10 md:flex justify-center text-white md:mx-8">
        <div className="flex flex-col bg-[#08343D] md:w-[80%] w-full md:flex-row justify-evenly py-8 md:space-y-0 md:space-x-8">
          {/* Address */}
          <div className="flex flex-col items-center p-6 ">
            <div className=" border rounded-full p-2">
              <AiOutlineEnvironment size={20} />
            </div>

            <p className="text-lg font-bold mt-4">Adress</p>
            <p>Vickerkullavägen 2, 591 45 Motala</p>
          </div>
          {/* Email */}
          <div className="flex flex-col items-center p-6 rounded-lg">
            <div className=" border rounded-full p-2">
              <AiOutlineMail size={20} />
            </div>
            <p className="text-lg font-bold mt-4">Email</p>
            <p>order@pallhotell.se</p>
          </div>
          {/* Phone */}
          <div className="flex flex-col items-center  p-6 rounded-lg">
            <div className=" border rounded-full p-2">
              <AiOutlinePhone size={20} />
            </div>
            <p className="text-lg font-bold mt-4">Telefon</p>
            <p>0141-21 50 44</p>
          </div>
        </div>
      </section>

      {/* Feature Section */}
      <section className="md:p-12 p-8 md:mt-56 bg-[#F3F3F3]">
        <div className="mx-auto sm:w-[70%] flex flex-col md:flex-row items-center">
          {/* Image */}
          <div className="w-full md:w-1/2">
            <Image
              width={800}
              height={200}
              src={"/imgs/Rectangle45.png"}
              alt={"asdf"}
            ></Image>
          </div>
          {/* Text */}
          <div className="w-full text-center md:text-start  md:w-1/2 mt-8 md:mt-0 md:pl-12">
            <h2 className="text-3xl font-bold">
              Expertlösningar inom lagring, godshantering, dokumentation och
              vidare
            </h2>
            <p className="mt-4 text-sm">
              På vårt företag är vi specialiserade på att tillhandahålla
              heltäckande lösningar för alla dina logistikbehov.
            </p>
            <p className="mt-4 font-semibold">Christopher Jari, CEO</p>
          </div>
        </div>
      </section>

      <section className="bg-cover h-auto relative bg-[url('/imgs/Rectangle38.png')] ">
        <div className="absolute inset-0 bg-[#083740d8] "></div>
        <div className="relative z-10 container mx-auto text-center text-white py-16">
          <h2 className="text-4xl font-bold mb-4">
            Trygg, säker och fullständig frid <br />
            sinneslagring
          </h2>
          <p className="max-w-2xl mx-auto mb-6">
            Malesuada lacinia ipsum elit suscipit imperdiet tellus turpis
            commodo euismod dis lectus natoque donec mollis feugiat risus
            egestas etiam viverra.
          </p>
          <button
            className="bg-orange-500 text-white py-3
           px-8 rounded-lg shadow-md hover:bg-orange-600
            transition duration-300"
          >
            Kom igång
          </button>
        </div>
      </section>

      <section className="h-[500px] relative z-20">
        <MapComponent />
      </section>
    </>
  );
}
