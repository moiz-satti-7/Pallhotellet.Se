"use client";
import React, { useState, useRef } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { PiPhoneCallThin } from "react-icons/pi";
import { CiLocationOn } from "react-icons/ci";
import dynamic from "next/dynamic";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"; // Importing required styles for DatePicker
import { FaCalendarAlt } from "react-icons/fa"; // Optional: Icon for calendar

// Dynamically import MapComponent with SSR disabled
// const MapComponent = dynamic(() => import("../components/MapComponent"), {
//   ssr: false,
// });

const QuoteForm = () => {
  const [checkedSections, setCheckedSections] = useState({
    kallager: false,
    varmlager: false,
    utomhusforvaring: false,
    forrad: false,
    gaffeltruck: false,
    container: false,
    ompackning: false,
    handtruck: false,
    gaffeltruck2: false,
    travers: false,
    containerhandling: false,
    skrymmande: false,
    helpDocumentation: false,
    orderManagement: false,
    upphandling: false,
    kringfunktioner: false,
    completeSolution: false,
  });

  const handleCheckboxChange = (section) => {
    setCheckedSections((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  // Calendar Input Settings

  const [startDate, setStartDate] = useState(null); // For "From" date
  const [endDate, setEndDate] = useState(null); // For "Till" (Until) date
  const datePickerStartRef = useRef(null);
  const datePickerEndRef = useRef(null);

  const handleStartDateClick = () => {
    if (datePickerStartRef.current) {
      datePickerStartRef.current.setOpen(true); // Open the start date picker
    }
  };

  const handleEndDateClick = () => {
    if (datePickerEndRef.current) {
      datePickerEndRef.current.setOpen(true); // Open the end date picker
    }
  };
  return (
    <>
      <section className="flex items-center justify-center text-white bg-center bg-cover bg-[url('/imgs/contactus.png')] md:py-56 pt-32 pb-20">
        <div className=" mx-auto flex justify-center items-center h-full">
          <h1 className="text-white text-3xl md:text-5xl font-bold">
            Offertförfrågan
          </h1>
        </div>
      </section>

      {/* <section className="h-[500px]">
        <MapComponent />
      </section> */}

      <section className="py-12 px-4 md:px-9 text-black w-full flex flex-col lg:flex-row gap-12 items-start justify-center">
        <div className="w-full lg:w-4/12 px-8">
          <h2 className="text-xl font-bold mb-1">Kontakt</h2>
          <h3 className="text-lg font-semibold mb-4">Pallhotellet</h3>
          <div className="space-y-4 text-lg">
            <div className="flex items-center">
              <CiLocationOn size={20} />
              <p className="ml-4">Vickerkullavägen 2, 591 45 Motala</p>
            </div>
            <div className="flex items-center">
              <PiPhoneCallThin size={20} />
              <p className="ml-4">0141-21 50 44</p>
            </div>
            <div className="flex items-center">
              <AiOutlineMail size={20} />
              <p className="ml-4">order@pallhotellet.se</p>
            </div> 
          </div>
        </div>
        <div className="w-full lg:w-10/12 px-8 ">
          <h2 className="text-3xl font-bold mb-8">Offertförfrågan</h2>
          <form className="flex flex-col gap-6">
            {/* Contact Form */}
            {/* 1. Företagsuppgifter */}
            <div>
              <h2 className="text-2xl font-bold mb-6">
                {" "}
                1. Företagsuppgifter{" "}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  name="firstName"
                  placeholder="Namn"
                  className="focus:outline-orange-500 p-3 border border-gray-300 rounded-md"
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Efternamn"
                  className="focus:outline-orange-500 p-3 border border-gray-300 rounded-md"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="focus:outline-orange-500 p-3 border border-gray-300 rounded-md"
                />
                <input
                  name="phone"
                  placeholder="Telefon"
                  className="p-3 border border-gray-300 rounded-md focus:outline-orange-500"
                />

                <input
                  type="text"
                  name="company"
                  placeholder="Företag"
                  className="focus:outline-orange-500 p-3 border border-gray-300 rounded-md"
                />
                <input
                  type="text"
                  name="orgNr"
                  placeholder="OrgNr"
                  className="focus:outline-orange-500 p-3 border border-gray-300 rounded-md"
                />
              </div>
              <div className="border-t-2 border-[#A0ABBB] my-6"></div>
            </div>

            {/* 2. Hyra av lageryta */}
            <div>
              <h2 className="text-2xl font-bold mb-3">2. Hyra av lageryta</h2>
              {/* Kallager */}
              <p className="mb-4 font-semibold">2.1 Kallager</p>
              <div className="my-10">
                <label className="flex md:items-center mb-3">
                  <div className="w-2/12 md:w-auto md:me-3">
                    <input
                      type="checkbox"
                      className="mr-2 size-6"
                      checked={checkedSections.kallager}
                      onChange={() => handleCheckboxChange("kallager")}
                    />
                  </div>
                  <div className="w-10/12">
                    Vill hyra pallplatser INOMHUS I KALLAGER
                  </div>
                </label>

                {checkedSections.kallager && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <input
                      type="number"
                      name="pallplatserKallager"
                      placeholder="Antal pallplatser"
                      className="p-3 border border-gray-300 rounded-md focus:outline-orange-500"
                    />
                    <input
                      type="text"
                      name="Pallvikt/snitt"
                      placeholder="Pallvikt/snitt"
                      className="p-3 border border-gray-300 rounded-md focus:outline-orange-500"
                    />
                    <input
                      type="text"
                      name="Antalkragar"
                      placeholder="Antal kragar"
                      className="p-3 border border-gray-300 rounded-md focus:outline-orange-500"
                    />

                    <div
                      className="relative w-full"
                      onClick={handleStartDateClick}
                    >
                      <div className="flex items-center justify-between w-full py-3 pl-3 pr-10 border border-gray-300 rounded-md shadow-sm cursor-pointer focus-within:border-orange-500 sm:text-sm">
                        <DatePicker
                          ref={datePickerStartRef}
                          selected={startDate}
                          onChange={(date) => setStartDate(date)}
                          placeholderText="Från och med"
                          dateFormat="yyyy-MM-dd"
                          className="focus:outline-none w-full bg-transparent pointer-events-none"
                        />
                        <FaCalendarAlt className="text-gray-400 pointer-events-none" />
                      </div>
                    </div>
                    <div
                      className="relative w-full"
                      onClick={handleEndDateClick}
                    >
                      <div className="flex items-center justify-between w-full py-3 pl-3 pr-10 border border-gray-300 rounded-md shadow-sm cursor-pointer focus-within:border-orange-500 sm:text-sm">
                        <DatePicker
                          ref={datePickerEndRef}
                          selected={endDate}
                          onChange={(date) => setEndDate(date)}
                          placeholderText="Till och med"
                          dateFormat="yyyy-MM-dd"
                          className="focus:outline-none w-full bg-transparent pointer-events-none"
                        />
                        <FaCalendarAlt className="text-gray-400 pointer-events-none" />
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className="border-t-2 border-dotted border-[#A0ABBB] my-6"></div>

              {/* Varmlager */}
              <div className="my-10">
                <p className="my-5 font-semibold">2.2 Varmlager</p>
                <label className="flex md:items-center my-10">
                  <div className="w-2/12 md:w-auto md:me-3">
                    <input
                      type="checkbox"
                      checked={checkedSections.varmlager}
                      onChange={() => handleCheckboxChange("varmlager")}
                      className="mr-2 size-6"
                    />
                  </div>
                <div className="w-10/12">
                  Vill hyra pallplatser INOMHUS I UPPVÄRMT LAGER
                </div>
                </label>

                {checkedSections.varmlager && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <input
                      type="number"
                      name="pallplatserVarmager"
                      placeholder="Antal pallplatser"
                      className="p-3 border border-gray-300 rounded-md focus:outline-orange-500"
                    />
                    <input
                      type="text"
                      name="Pallvikt/snitt"
                      placeholder="Pallvikt/snitt"
                      className="p-3 border border-gray-300 rounded-md focus:outline-orange-500"
                    />
                    <input
                      type="text"
                      name="Antalkragar"
                      placeholder="Antal kragar"
                      className="p-3 border border-gray-300 rounded-md focus:outline-orange-500"
                    />
                    <div
                      className="relative w-full"
                      onClick={handleStartDateClick}
                    >
                      <div className="flex items-center justify-between w-full py-3 pl-3 pr-10 border border-gray-300 rounded-md shadow-sm cursor-pointer focus-within:border-orange-500 sm:text-sm">
                        <DatePicker
                          ref={datePickerStartRef}
                          selected={startDate}
                          onChange={(date) => setStartDate(date)}
                          placeholderText="Från och med"
                          dateFormat="yyyy-MM-dd"
                          className="focus:outline-none w-full bg-transparent pointer-events-none"
                        />
                        <FaCalendarAlt className="text-gray-400 pointer-events-none" />
                      </div>
                    </div>
                    <div
                      className="relative w-full"
                      onClick={handleEndDateClick}
                    >
                      <div className="flex items-center justify-between w-full py-3 pl-3 pr-10 border border-gray-300 rounded-md shadow-sm cursor-pointer focus-within:border-orange-500 sm:text-sm">
                        <DatePicker
                          ref={datePickerEndRef}
                          selected={endDate}
                          onChange={(date) => setEndDate(date)}
                          placeholderText="Till och med"
                          dateFormat="yyyy-MM-dd"
                          className="focus:outline-none w-full bg-transparent pointer-events-none"
                        />
                        <FaCalendarAlt className="text-gray-400 pointer-events-none" />
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className="border-t-2 border-dotted border-[#A0ABBB] my-6"></div>

              {/* Utomhusförvaring */}
              <h2 className="my-5 font-semibold">2.3 Utomhusförvaring</h2>
              <div className="flex md:items-center my-10">
                <div className="w-2/12 md:w-auto md:me-3">
                  <input
                    type="checkbox"
                    id="utomhusforvaring"
                    checked={checkedSections.utomhusforvaring}
                    onChange={() => handleCheckboxChange("utomhusforvaring")}
                    className="mr-2 size-6"
                  />
                </div>
                <div className="w-10/12">
                  <label htmlFor="utomhusforvaring">
                    Vill hyra av inhägnat LAGERYTA UTOMHUS
                  </label>
                </div>
              </div>

              {checkedSections.utomhusforvaring && (
                <>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                    <input
                      type="text"
                      placeholder="Yta i m2"
                      className="p-2 border rounded focus:outline-orange-500"
                    />
                    <input
                      type="text"
                      placeholder="Höjd"
                      className="p-2 border rounded focus:outline-orange-500"
                    />
                    <input
                      type="text"
                      placeholder="Bredd"
                      className="p-2 border rounded focus:outline-orange-500"
                    />
                    <input
                      type="text"
                      placeholder="Längd"
                      className="p-2 border rounded focus:outline-orange-500"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                    <div
                      className="relative w-full"
                      onClick={handleStartDateClick}
                    >
                      <div className="flex items-center justify-between w-full py-3 pl-3 pr-10 border border-gray-300 rounded-md shadow-sm cursor-pointer focus-within:border-orange-500 sm:text-sm">
                        <DatePicker
                          ref={datePickerStartRef}
                          selected={startDate}
                          onChange={(date) => setStartDate(date)}
                          placeholderText="Från och med"
                          dateFormat="yyyy-MM-dd"
                          className="focus:outline-none w-full bg-transparent pointer-events-none"
                        />
                        <FaCalendarAlt className="text-gray-400 pointer-events-none" />
                      </div>
                    </div>
                    <div
                      className="relative w-full"
                      onClick={handleEndDateClick}
                    >
                      <div className="flex items-center justify-between w-full py-3 pl-3 pr-10 border border-gray-300 rounded-md shadow-sm cursor-pointer focus-within:border-orange-500 sm:text-sm">
                        <DatePicker
                          ref={datePickerEndRef}
                          selected={endDate}
                          onChange={(date) => setEndDate(date)}
                          placeholderText="Till och med"
                          dateFormat="yyyy-MM-dd"
                          className="focus:outline-none w-full bg-transparent pointer-events-none"
                        />
                        <FaCalendarAlt className="text-gray-400 pointer-events-none" />
                      </div>
                    </div>
                    <select className="p-3 border border-gray-300 rounded-md focus:outline-orange-500">
                      <option value="">Typ av gods</option>
                      <option value="skrymmande">Skrymmande</option>
                      <option value="ej-skrymmande">Ej skrymmande</option>
                    </select>
                  </div>
                </>
              )}

              <div className="border-t-2 border-dotted border-[#A0ABBB] my-6"></div>

              {/* Hyra av förråd */}
              <h2 className="my-5 font-semibold">2.4 Hyra av förråd</h2>
              <div className="flex md:items-center my-10">
                <div className="w-2/12 md:w-auto md:me-3">
                  <input
                    type="checkbox"
                    checked={checkedSections.forrad}
                    onChange={() => handleCheckboxChange("forrad")}
                    id="forrad"
                    className="size-6"
                  />
                </div>
                <div className="w-10/12">
                  <label htmlFor="forrad">Vill hyra INOMHUSFÖRRÅD</label>
                </div>
              </div>

              {checkedSections.forrad && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <input
                    type="text"
                    placeholder="Ytan i m2"
                    className="p-2 border rounded focus:outline-orange-500"
                  />

                  <div
                    className="relative w-full"
                    onClick={handleStartDateClick}
                  >
                    <div className="flex items-center justify-between w-full py-3 pl-3 pr-10 border border-gray-300 rounded-md shadow-sm cursor-pointer focus-within:border-orange-500 sm:text-sm">
                      <DatePicker
                        ref={datePickerStartRef}
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                        placeholderText="Från och med"
                        dateFormat="yyyy-MM-dd"
                        className="focus:outline-none w-full bg-transparent pointer-events-none"
                      />
                      <FaCalendarAlt className="text-gray-400 pointer-events-none" />
                    </div>
                  </div>
                  <div className="relative w-full" onClick={handleEndDateClick}>
                    <div className="flex items-center justify-between w-full py-3 pl-3 pr-10 border border-gray-300 rounded-md shadow-sm cursor-pointer focus-within:border-orange-500 sm:text-sm">
                      <DatePicker
                        ref={datePickerEndRef}
                        selected={endDate}
                        onChange={(date) => setEndDate(date)}
                        placeholderText="Till och med"
                        dateFormat="yyyy-MM-dd"
                        className="focus:outline-none w-full bg-transparent pointer-events-none"
                      />
                      <FaCalendarAlt className="text-gray-400 pointer-events-none" />
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="border-t-2 border-[#A0ABBB] mb-6"></div>

            {/* Section 3 - Inlastning / utlastning */}

            <h2 className="text-2xl font-semibold">
              3. Inlastning / utlastning
            </h2>

            {/* Lossning, ompackning */}
            <h3 className="font-semibold">3.1 Lossning, ompackning</h3>
            <div className="space-y-10">
              <div className="flex md:items-center">
                <div className="w-2/12 md:w-auto md:me-3">
                  <input
                    type="checkbox"
                    // checked={checkedSections.gaffeltruck}
                    onChange={() => handleCheckboxChange("gaffeltruck")}
                    id="gaffeltruck"
                    className="size-6"
                  />
                </div>
                <div className="w-10/12">
                  <label htmlFor="gaffeltruck">
                    Lossning/lastning lastbil med gaffeltruck önskas
                  </label>
                </div>
              </div>

              <div className="flex md:items-center">
                <div className="w-2/12 md:w-auto md:me-3">
                  <input
                    type="checkbox"
                    // checked={checkedSections.container}
                    onChange={() => handleCheckboxChange("container")}
                    id="container"
                    className="mr-2 size-6"
                  />
                </div>
                <div className="w-10/12">
                  <label htmlFor="container">
                    Lossning/lastning av container önskas
                  </label>
                </div>
              </div>

              <div className="flex md:items-center">
                <div className="w-2/12 md:w-auto md:me-3">
                  <input
                    type="checkbox"
                    // checked={checkedSections.ompackning}
                    onChange={() => handleCheckboxChange("ompackning")}
                    id="ompackning"
                    className="mr-2 size-6"
                  />
                </div>
                <div className="w-10/12">
                  <label htmlFor="ompackning">
                    Ompackning och plock önskas
                  </label>
                </div>
              </div>
            </div>

            <div className="border-t-2 border-dotted border-[#A0ABBB] my-6"></div>

            {/* Additional Checkboxes */}

            <div className="flex md:items-center">
              <div className="w-2/12 md:w-auto md:me-3">
                <input
                  type="checkbox"
                  id="containerhandling"
                  checked={checkedSections.containerhandling}
                  onChange={() => handleCheckboxChange("containerhandling")}
                  className="mr-2 size-6"
                />
              </div>
              <div className="w-10/12">
                <label htmlFor="containerhandling">
                  Containerhantering /packetering
                </label>
              </div>
            </div>

            <div className="border-t-2 border-dotted border-[#A0ABBB] my-6"></div>

            <div className="flex md:items-center">
              <div className="w-2/12 md:w-auto md:me-3">
                <input
                  type="checkbox"
                  id="skrymmande"
                  // checked={checkedSections.skrymmande}
                  onChange={() => handleCheckboxChange("skrymmande")}
                  className="mr-2 size-6"
                />
              </div>
              <div className="w-10/12">
                <label htmlFor="skrymmande">Hantering av skrymmande gods</label>
              </div>
            </div>

            <div className="border-t-2 border-dotted border-[#A0ABBB] my-6"></div>

            {/* Section 3.3 - Redskap och maskiner */}
            <h3 className="text-md font-semibold mb-4">
              3.2 Redskap och maskiner
            </h3>

            <div className="mb-6 space-y-10">
              <div className="w-full flex flex-wrap">
                <div className="w-2/12 md:w-auto md:me-3">
                  <input
                    type="checkbox"
                    // checked={checkedSections.handtruck}
                    onChange={() => handleCheckboxChange("handtruck")}
                    id="handtruck"
                    className="mr-2 size-6"
                  />
                </div>
                <div className="w-10/12">
                  <label htmlFor="handtruck">Handtruck önskas</label>
                </div>

                <div className="md:w-1/2 flex items-center">
                  {/* {checkedSections.handtruck && (
                    <input
                      type="text"
                      placeholder="Antal timmar"
                      className="p-2 border focus:outline-orange-500 rounded mt-5 md:mt-0"
                    />
                  )} */}
                </div>
              </div>

              <div className="flex md:items-center">
                <div className="w-2/12 md:w-auto md:me-3">
                  <input
                    type="checkbox"
                    // checked={checkedSections.gaffeltruck2}
                    onChange={() => handleCheckboxChange("gaffeltruck2")}
                    id="gaffeltruck2"
                    className="mr-2 size-6"
                  />
                </div>
                <div className="w-10/12">
                  <label htmlFor="gaffeltruck2">Gaffeltruck önskas</label>
                </div>
              </div>

              <div className="flex md:items-center">
                <div className="w-2/12 md:w-auto md:me-3">
                  <input
                    type="checkbox"
                    // checked={checkedSections.travers}
                    onChange={() => handleCheckboxChange("travers")}
                    id="travers"
                    className="mr-2 size-6"
                  />
                </div>
                <div>
                  <label htmlFor="travers">Travers önskas (max 7ton)</label>
                </div>
              </div>
            </div>

            <div className="border-t-2 border-dotted border-[#A0ABBB] my-6"></div>

            {/* Section 4 - Kringtjänster */}
            <div className="flex flex-col items-center justify-center">
              <div className="bg-white w-full">
                <h2 className="text-2xl font-bold mb-6 text-gray-900">
                  4. Kringtjänster
                </h2>

                {/* Help with Documentation */}
                {/* <div className="my-10 flex flex-wrap space-y-5">
                  <label className="flex items-center md:w-1/2">
                    <input
                      type="checkbox"
                      className="size-6 me-2"
                      checked={checkedSections.helpDocumentation}
                      onChange={() => handleCheckboxChange("helpDocumentation")}
                    />
                    <span>Hjälp med dokumentation föradrar</span>
                  </label>
                  {checkedSections.helpDocumentation && (
                    <input
                      type="text"
                      placeholder="Antal timmar"
                      className="mt-2 p-2 border rounded focus:border-orange-500 md:w-1/2"
                    />
                  )}
                </div> */}

                <div className="border-t-2 border-dotted border-[#A0ABBB] my-6"></div>

                {/* Order Management */}
                <div className="my-10 space-y-5">
                  <label className="flex">
                    <div className="w-2/12 md:w-auto md:me-3">
                      <input
                        type="checkbox"
                        className="size-6 me-2"
                        // checked={checkedSections.orderManagement}
                        onChange={() => handleCheckboxChange("orderManagement")}
                      />
                    </div>
                    <div className="w-10/12">
                      Hjälp med dokumentation önskas
                    </div>
                  </label>
                  {/* {checkedSections.orderManagement && (
                    <input
                      type="text"
                      placeholder="Antal timmar"
                      className="mt-2 p-2 border rounded focus:border-orange-500 md:w-1/2"
                    />
                  )} */}
                </div>

                <div className="border-t-2 border-dotted border-[#A0ABBB] my-6"></div>

                {/* Upphandling */}
                <div className="my-10">
                  <label className="flex md:items-center">
                    <div className="w-2/12 md:w-auto md:me-3">
                      <input
                        type="checkbox"
                        // checked={checkedSections.upphandling}
                        onChange={() => handleCheckboxChange("upphandling")}
                        className="size-6"
                      />
                    </div>
                    <div className="w-10/12">
                      Hjälp med orderhantering önskas
                    </div>
                  </label>
                  {/* {checkedSections.upphandling && (
                    <div className="flex flex-wrap my-7 gap-5">
                      <input
                        type="text"
                        placeholder="Upphandlingsprocess"
                        className="p-2 border border-gray-300 rounded md:w-1/2 focus:ring-orange-500 focus:border-orange-500"
                      />
                      <input
                        type="text"
                        placeholder="Leveransmetod"
                        className="p-2 border border-gray-300 rounded md:w-1/2 focus:ring-orange-500 focus:border-orange-500"
                      />
                    </div>
                  )} */}
                </div>

                <div className="border-t-2 border-dotted border-[#A0ABBB] my-6"></div>

                {/* Kringfunktioner */}
                <div className="my-10">
                  <label className="flex md:items-center">
                    <div className="w-2/12 md:w-auto md:me-3">
                      <input
                        type="checkbox"
                        className="me-2 size-6"
                        checked={checkedSections.kringfunktioner}
                        onChange={() => handleCheckboxChange("kringfunktioner")}
                      />
                    </div>
                    <div className="w-10/12">
                      Behöver hjälp med andra kringtjänster, såsom montering,
                      underhåll etc. Vi önskar mer info.
                    </div>
                  </label>
                </div>

                <div className="border-t-2 border-dotted border-[#A0ABBB] my-6"></div>

                {/* Complete Solution */}
                <div className="my-10">
                  <label className="flex md:items-center">
                    <div className="w-2/12 md:w-auto md:me-3">
                      <input
                        type="checkbox"
                        className="me-2 size-6"
                        checked={checkedSections.completeSolution}
                        onChange={() =>
                          handleCheckboxChange("completeSolution")
                        }
                      />
                    </div>
                    <div className="w-10/12">
                      Behöver förslag till en komplett 3pl lösning, önskar
                      gärna mer info.
                    </div>
                  </label>
                </div>

                {/* Submit Button */}
                <div className="text-center">
                  <button
                    type="submit"
                    className="bg-orange-500 px-5 text-white py-3 w-full rounded-lg hover:bg-orange-600"
                  >
                    Skicka
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default QuoteForm;
