"use client";
import React, { useState } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { PiPhoneCallThin } from "react-icons/pi";
import { CiLocationOn } from "react-icons/ci";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaCalendarAlt } from "react-icons/fa";
import { IoArrowForward } from "react-icons/io5";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const QuoteForm = () => {
  // Initial form state
  const initialFormState = {
    // Main fields
    name: "",
    aftername: "",
    email: "",
    telephone: "",
    foretag: "",
    orgnr: "",

    // Checkbox: kallager
    kallager: {
      isChecked: false,
      antalpallplaster: "", // Number of pallet places
      snitt: "", // Average
      antalKragar: "", // Number of collars
      franOchMed: null, // From date
      tillOchMed: null, // To date
    },

    // Checkbox: varmlager
    varmlager: {
      isChecked: false,
      antalpallplaster: "",
      snitt: "",
      antalKragar: "",
      franOchMed: null,
      tillOchMed: null,
    },

    // Checkbox: utomhusforvaring
    utomhusforvaring: {
      isChecked: false,
      ytaIM2: "", // Area in m²
      hojd: "", // Height
      bredd: "", // Width
      langd: "", // Length
      franOchMed: null,
      tillOchMed: null,
      typAvGods: "", // Type of goods (dropdown selection)
    },

    // Checkbox: hyra av forrad
    hyraAvForrad: {
      isChecked: false,
      ytanIM2: "", // Area in m²
      franOchMed: null,
      tillOchMed: null,
    },

    // Services without subfields
    services: {
      // 3.1 Lossning, ompackning
      lossningLastbilGaffeltruckOnskas: false,
      lossningLastningContainerOnskas: false,
      ompackningPlockOnskas: false,
      containerhanteringPacketering: false,
      hanteringSkrymmandeGods: false,

      // 3.2 Redskap och maskiner
      handtruckOnskas: false,
      gaffeltruckOnskas: false,
      traversOnskas: false,

      // Kringtjänster
      hjalpDokumentationOnskas: false,
      hjalpOrderhanteringOnskas: false,
      behoverHjalpKringtjansterMerInfo: false,
      behoverForslagKomplett3plLosning: false,
    },
  };

  const [formState, setFormState] = useState(initialFormState);

  // Loading state to manage submission status
  const [loading, setLoading] = useState(false);

  const handleCheckboxChange = (section, field) => {
    if (field) {
      // For services and nested fields
      setFormState((prevState) => ({
        ...prevState,
        [section]: {
          ...prevState[section],
          [field]: !prevState[section][field],
        },
      }));
    } else {
      // For main checkboxes
      setFormState((prevState) => ({
        ...prevState,
        [section]: {
          ...prevState[section],
          isChecked: !prevState[section].isChecked,
        },
      }));
    }
  };

  const handleInputChange = (section, field, value) => {
    if (field) {
      setFormState((prevState) => ({
        ...prevState,
        [section]: {
          ...prevState[section],
          [field]: value,
        },
      }));
    } else {
      setFormState((prevState) => ({
        ...prevState,
        [section]: value,
      }));
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true); // Disable the submit button

    try {
      const response = await fetch("/api/quotation", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formState),
      });

      if (response.ok) {
        // Show success toast
        toast.success("Tack för ditt mail, vi kontaktar dig inom kort!");

        // Clear the form by resetting the form state to initial values
        setFormState(initialFormState);
      } else {
        // Show error toast with response status text
        toast.error("Fel: " + response.statusText);
      }
    } catch (error) {
      console.error("Error submitting form:", error);

      // Show error toast
      toast.error("Ett fel inträffade. Försök igen.");
    } finally {
      setLoading(false); // Re-enable the submit button
    }
  };



  return (
    <>
 <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

      <section className="flex items-center justify-center text-white bg-center bg-cover bg-[url('/imgs/contactus.png')] md:py-56 pt-32 pb-20">
        <div className="mx-auto flex justify-center items-center h-full">
          <h1 className="text-white text-3xl md:text-5xl font-bold">
            Offertförfrågan
          </h1>
        </div>
      </section>

      <section className="py-12 px-4 md:px-9 text-black w-full flex flex-col lg:flex-row gap-12 items-start justify-center">
        <div className="w-full lg:w-4/12 px-8">
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
        <div className="w-full lg:w-10/12 px-8">
          <h2 className="text-3xl font-bold mb-8">Offertförfrågan</h2>
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            {/* 1. Företagsuppgifter */}
            <div>
              <h2 className="text-2xl font-bold mb-6">1. Företagsuppgifter</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  required
                  type="text"
                  name="name"
                  value={formState.name}
                  onChange={(e) =>
                    handleInputChange("name", null, e.target.value)
                  }
                  placeholder="Namn"
                  className="focus:outline-orange-500 p-3 border border-gray-300 rounded-md"
                />
                <input
                  required
                  type="text"
                  name="aftername"
                  value={formState.aftername}
                  onChange={(e) =>
                    handleInputChange("aftername", null, e.target.value)
                  }
                  placeholder="Efternamn"
                  className="focus:outline-orange-500 p-3 border border-gray-300 rounded-md"
                />
                <input
                  required
                  type="email"
                  name="email"
                  value={formState.email}
                  onChange={(e) =>
                    handleInputChange("email", null, e.target.value)
                  }
                  placeholder="Email"
                  className="focus:outline-orange-500 p-3 border border-gray-300 rounded-md"
                />
                <input
                  required
                  name="telephone"
                  value={formState.telephone}
                  onChange={(e) =>
                    handleInputChange("telephone", null, e.target.value)
                  }
                  placeholder="Telefon"
                  className="p-3 border border-gray-300 rounded-md focus:outline-orange-500"
                />
                <input
                  required
                  type="text"
                  name="foretag"
                  value={formState.foretag}
                  onChange={(e) =>
                    handleInputChange("foretag", null, e.target.value)
                  }
                  placeholder="Företag"
                  className="focus:outline-orange-500 p-3 border border-gray-300 rounded-md"
                />
                <input
                  required
                  type="text"
                  name="orgnr"
                  value={formState.orgnr}
                  onChange={(e) =>
                    handleInputChange("orgnr", null, e.target.value)
                  }
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
                      checked={formState.kallager.isChecked}
                      onChange={() => handleCheckboxChange("kallager")}
                    />
                  </div>
                  <div className="w-10/12">
                    Vill hyra pallplatser INOMHUS I KALLAGER
                  </div>
                </label>

                {formState.kallager.isChecked && (
                  <div className="">
                    <div className="flex md:justify-between flex-wrap md:flex-nowrap space-y-5 md:space-y-0 my-5 md:space-x-4 ">
                      <input
                        type="number"
                        name="antalpallplaster"
                        placeholder="Antal pallplatser"
                        value={formState.kallager.antalpallplaster}
                        onChange={(e) =>
                          handleInputChange(
                            "kallager",
                            "antalpallplaster",
                            e.target.value
                          )
                        }
                        className="p-3 border border-gray-300 rounded-md focus:outline-orange-500 w-full  md:w-6/12"
                      />
                      <div className="md:w-6/12 md:space-x-5 flex flex-wrap md:flex-nowrap space-y-5 md:space-y-0 ">
                        <input
                          type="text"
                          name="snitt"
                          placeholder="Pallvikt/snitt"
                          value={formState.kallager.snitt}
                          onChange={(e) =>
                            handleInputChange(
                              "kallager",
                              "snitt",
                              e.target.value
                            )
                          }
                          className="p-3 border border-gray-300 rounded-md focus:outline-orange-500 w-full  md:w-6/12"
                        />
                        <input
                          type="text"
                          name="antalKragar"
                          placeholder="Antal kragar"
                          value={formState.kallager.antalKragar}
                          onChange={(e) =>
                            handleInputChange(
                              "kallager",
                              "antalKragar",
                              e.target.value
                            )
                          }
                          className="p-3 border border-gray-300 rounded-md focus:outline-orange-500 w-full  md:w-6/12"
                        />
                      </div>
                    </div>

                    <div className="flex md:space-x-3 flex-wrap md:flex-nowrap space-y-5 md:space-y-0">
                      <div className="relative w-full">
                        <div className="flex items-center justify-between w-full py-3 pl-3 pr-10 border border-gray-300 rounded-md shadow-sm focus-within:border-orange-500 ">
                          <DatePicker
                            selected={formState.kallager.franOchMed}
                            onChange={(date) =>
                              handleInputChange("kallager", "franOchMed", date)
                            }
                            placeholderText="Från och med"
                            dateFormat="yyyy-MM-dd"
                            className="focus:outline-none w-full bg-transparent"
                          />
                          <FaCalendarAlt className="text-gray-400" />
                        </div>
                      </div>
                      <div className="relative w-full">
                        <div className="flex items-center justify-between w-full py-3 pl-3 pr-10 border border-gray-300 rounded-md shadow-sm focus-within:border-orange-500 ">
                          <DatePicker
                            selected={formState.kallager.tillOchMed}
                            onChange={(date) =>
                              handleInputChange("kallager", "tillOchMed", date)
                            }
                            placeholderText="Till och med"
                            dateFormat="yyyy-MM-dd"
                            className="focus:outline-none w-full bg-transparent"
                          />
                          <FaCalendarAlt className="text-gray-400" />
                        </div>
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
                      checked={formState.varmlager.isChecked}
                      onChange={() => handleCheckboxChange("varmlager")}
                      className="mr-2 size-6"
                    />
                  </div>
                  <div className="w-10/12">
                    Vill hyra pallplatser INOMHUS I UPPVÄRMT LAGER
                  </div>
                </label>

                {formState.varmlager.isChecked && (
                  <div className="">
                    <div className="flex md:justify-between flex-wrap md:flex-nowrap space-y-5 md:space-y-0 my-5 md:space-x-4">
                      <input
                        type="number"
                        name="antalpallplaster"
                        placeholder="Antal pallplatser"
                        value={formState.varmlager.antalpallplaster}
                        onChange={(e) =>
                          handleInputChange(
                            "varmlager",
                            "antalpallplaster",
                            e.target.value
                          )
                        }
                        className="p-3 border border-gray-300 rounded-md focus:outline-orange-500 w-full  md:w-6/12"
                      />
                      <div className="md:w-6/12 md:space-x-5 flex-wrap md:flex-nowrap space-y-5 md:space-y-0 flex">
                        <input
                          type="text"
                          name="snitt"
                          placeholder="Pallvikt/snitt"
                          value={formState.varmlager.snitt}
                          onChange={(e) =>
                            handleInputChange(
                              "varmlager",
                              "snitt",
                              e.target.value
                            )
                          }
                          className="p-3 border border-gray-300 rounded-md focus:outline-orange-500 w-full  md:w-6/12"
                        />
                        <input
                          type="text"
                          name="antalKragar"
                          placeholder="Antal kragar"
                          value={formState.varmlager.antalKragar}
                          onChange={(e) =>
                            handleInputChange(
                              "varmlager",
                              "antalKragar",
                              e.target.value
                            )
                          }
                          className="p-3 border border-gray-300 rounded-md focus:outline-orange-500 w-full  md:w-6/12"
                        />
                      </div>
                    </div>

                    <div className="flex md:space-x-3 flex-wrap md:flex-nowrap space-y-5 md:space-y-0 ">
                      <div className="relative w-full">
                        <div className="flex items-center justify-between w-full py-3 pl-3 pr-10 border border-gray-300 rounded-md shadow-sm focus-within:border-orange-500 ">
                          <DatePicker
                            selected={formState.varmlager.franOchMed}
                            onChange={(date) =>
                              handleInputChange("varmlager", "franOchMed", date)
                            }
                            placeholderText="Från och med"
                            dateFormat="yyyy-MM-dd"
                            className="focus:outline-none w-full bg-transparent"
                          />
                          <FaCalendarAlt className="text-gray-400" />
                        </div>
                      </div>
                      <div className="relative w-full">
                        <div className="flex items-center justify-between w-full py-3 pl-3 pr-10 border border-gray-300 rounded-md shadow-sm focus-within:border-orange-500 ">
                          <DatePicker
                            selected={formState.varmlager.tillOchMed}
                            onChange={(date) =>
                              handleInputChange("varmlager", "tillOchMed", date)
                            }
                            placeholderText="Till och med"
                            dateFormat="yyyy-MM-dd"
                            className="focus:outline-none w-full bg-transparent"
                          />
                          <FaCalendarAlt className="text-gray-400" />
                        </div>
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
                    checked={formState.utomhusforvaring.isChecked}
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

              {formState.utomhusforvaring.isChecked && (
                <>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                    <input
                      type="text"
                      placeholder="Yta i m2"
                      value={formState.utomhusforvaring.ytaIM2}
                      onChange={(e) =>
                        handleInputChange(
                          "utomhusforvaring",
                          "ytaIM2",
                          e.target.value
                        )
                      }
                      className="p-2 border rounded focus:outline-orange-500"
                    />
                    <input
                      type="text"
                      placeholder="Höjd"
                      value={formState.utomhusforvaring.hojd}
                      onChange={(e) =>
                        handleInputChange(
                          "utomhusforvaring",
                          "hojd",
                          e.target.value
                        )
                      }
                      className="p-2 border rounded focus:outline-orange-500"
                    />
                    <input
                      type="text"
                      placeholder="Bredd"
                      value={formState.utomhusforvaring.bredd}
                      onChange={(e) =>
                        handleInputChange(
                          "utomhusforvaring",
                          "bredd",
                          e.target.value
                        )
                      }
                      className="p-2 border rounded focus:outline-orange-500"
                    />
                    <input
                      type="text"
                      placeholder="Längd"
                      value={formState.utomhusforvaring.langd}
                      onChange={(e) =>
                        handleInputChange(
                          "utomhusforvaring",
                          "langd",
                          e.target.value
                        )
                      }
                      className="p-2 border rounded focus:outline-orange-500"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                    <div className="relative w-full">
                      <div className="flex items-center justify-between w-full py-3 pl-3 pr-10 border border-gray-300 rounded-md shadow-sm focus-within:border-orange-500 ">
                        <DatePicker
                          selected={formState.utomhusforvaring.franOchMed}
                          onChange={(date) =>
                            handleInputChange(
                              "utomhusforvaring",
                              "franOchMed",
                              date
                            )
                          }
                          placeholderText="Från och med"
                          dateFormat="yyyy-MM-dd"
                          className="focus:outline-none w-full bg-transparent"
                        />
                        <FaCalendarAlt className="text-gray-400" />
                      </div>
                    </div>
                    <div className="relative w-full">
                      <div className="flex items-center justify-between w-full py-3 pl-3 pr-10 border border-gray-300 rounded-md shadow-sm focus-within:border-orange-500 ">
                        <DatePicker
                          selected={formState.utomhusforvaring.tillOchMed}
                          onChange={(date) =>
                            handleInputChange(
                              "utomhusforvaring",
                              "tillOchMed",
                              date
                            )
                          }
                          placeholderText="Till och med"
                          dateFormat="yyyy-MM-dd"
                          className="focus:outline-none w-full bg-transparent"
                        />
                        <FaCalendarAlt className="text-gray-400" />
                      </div>
                    </div>
                    <select
                      value={formState.utomhusforvaring.typAvGods}
                      onChange={(e) =>
                        handleInputChange(
                          "utomhusforvaring",
                          "typAvGods",
                          e.target.value
                        )
                      }
                      className="p-3 border border-gray-300 rounded-md focus:outline-orange-500"
                    >
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
                    checked={formState.hyraAvForrad.isChecked}
                    onChange={() => handleCheckboxChange("hyraAvForrad")}
                    id="hyraAvForrad"
                    className="size-6"
                  />
                </div>
                <div className="w-10/12">
                  <label htmlFor="hyraAvForrad">Vill hyra INOMHUSFÖRRÅD</label>
                </div>
              </div>

              {formState.hyraAvForrad.isChecked && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <input
                    type="text"
                    placeholder="Ytan i m2"
                    value={formState.hyraAvForrad.ytanIM2}
                    onChange={(e) =>
                      handleInputChange(
                        "hyraAvForrad",
                        "ytanIM2",
                        e.target.value
                      )
                    }
                    className="p-2 border rounded focus:outline-orange-500"
                  />
                  <div className="relative w-full">
                    <div className="flex items-center justify-between w-full py-3 pl-3 pr-10 border border-gray-300 rounded-md shadow-sm focus-within:border-orange-500 ">
                      <DatePicker
                        selected={formState.hyraAvForrad.franOchMed}
                        onChange={(date) =>
                          handleInputChange(
                            "hyraAvForrad",
                            "franOchMed",
                            date
                          )
                        }
                        placeholderText="Från och med"
                        dateFormat="yyyy-MM-dd"
                        className="focus:outline-none w-full bg-transparent"
                      />
                      <FaCalendarAlt className="text-gray-400" />
                    </div>
                  </div>
                  <div className="relative w-full">
                    <div className="flex items-center justify-between w-full py-3 pl-3 pr-10 border border-gray-300 rounded-md shadow-sm focus-within:border-orange-500 ">
                      <DatePicker
                        selected={formState.hyraAvForrad.tillOchMed}
                        onChange={(date) =>
                          handleInputChange(
                            "hyraAvForrad",
                            "tillOchMed",
                            date
                          )
                        }
                        placeholderText="Till och med"
                        dateFormat="yyyy-MM-dd"
                        className="focus:outline-none w-full bg-transparent"
                      />
                      <FaCalendarAlt className="text-gray-400" />
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="border-t-2 border-[#A0ABBB] mb-6"></div>

            {/* Section 3 - Inlastning / utlastning */}
            <h2 className="text-2xl font-semibold">3. Inlastning / utlastning</h2>

            {/* Lossning, ompackning */}
            <h3 className="font-semibold">3.1 Lossning, ompackning</h3>
            <div className="space-y-10">
              <div className="flex md:items-center">
                <div className="w-2/12 md:w-auto md:me-3">
                  <input
                    type="checkbox"
                    checked={
                      formState.services.lossningLastbilGaffeltruckOnskas
                    }
                    onChange={() =>
                      handleCheckboxChange(
                        "services",
                        "lossningLastbilGaffeltruckOnskas"
                      )
                    }
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
                    checked={
                      formState.services.lossningLastningContainerOnskas
                    }
                    onChange={() =>
                      handleCheckboxChange(
                        "services",
                        "lossningLastningContainerOnskas"
                      )
                    }
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
                    checked={formState.services.ompackningPlockOnskas}
                    onChange={() =>
                      handleCheckboxChange(
                        "services",
                        "ompackningPlockOnskas"
                      )
                    }
                    id="ompackning"
                    className="mr-2 size-6"
                  />
                </div>
                <div className="w-10/12">
                  <label htmlFor="ompackning">Ompackning och plock önskas</label>
                </div>
              </div>
            </div>

            <div className="border-t-2 border-dotted border-[#A0ABBB] my-6"></div>

            {/* Additional Checkboxes */}
            <div className="flex md:items-center">
              <div className="w-2/12 md:w-auto md:me-3">
                <input
                  type="checkbox"
                  id="containerhanteringPacketering"
                  checked={
                    formState.services.containerhanteringPacketering
                  }
                  onChange={() =>
                    handleCheckboxChange(
                      "services",
                      "containerhanteringPacketering"
                    )
                  }
                  className="mr-2 size-6"
                />
              </div>
              <div className="w-10/12">
                <label htmlFor="containerhanteringPacketering">
                  Containerhantering /packetering
                </label>
              </div>
            </div>

            <div className="border-t-2 border-dotted border-[#A0ABBB] my-6"></div>

            <div className="flex md:items-center">
              <div className="w-2/12 md:w-auto md:me-3">
                <input
                  type="checkbox"
                  id="hanteringSkrymmandeGods"
                  checked={formState.services.hanteringSkrymmandeGods}
                  onChange={() =>
                    handleCheckboxChange(
                      "services",
                      "hanteringSkrymmandeGods"
                    )
                  }
                  className="mr-2 size-6"
                />
              </div>
              <div className="w-10/12">
                <label htmlFor="hanteringSkrymmandeGods">
                  Hantering av skrymmande gods
                </label>
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
                    checked={formState.services.handtruckOnskas}
                    onChange={() =>
                      handleCheckboxChange("services", "handtruckOnskas")
                    }
                    id="handtruck"
                    className="mr-2 size-6"
                  />
                </div>
                <div className="w-10/12">
                  <label htmlFor="handtruck">Handtruck önskas</label>
                </div>
              </div>

              <div className="flex md:items-center">
                <div className="w-2/12 md:w-auto md:me-3">
                  <input
                    type="checkbox"
                    checked={formState.services.gaffeltruckOnskas}
                    onChange={() =>
                      handleCheckboxChange("services", "gaffeltruckOnskas")
                    }
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
                    checked={formState.services.traversOnskas}
                    onChange={() =>
                      handleCheckboxChange("services", "traversOnskas")
                    }
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

                <div className="border-t-2 border-dotted border-[#A0ABBB] my-6"></div>

                {/* Order Management */}
                <div className="my-10 space-y-5">
                  <label className="flex">
                    <div className="w-2/12 md:w-auto md:me-3">
                      <input
                        type="checkbox"
                        className="size-6 me-2"
                        checked={
                          formState.services.hjalpDokumentationOnskas
                        }
                        onChange={() =>
                          handleCheckboxChange(
                            "services",
                            "hjalpDokumentationOnskas"
                          )
                        }
                      />
                    </div>
                    <div className="w-10/12">
                      Hjälp med dokumentation önskas
                    </div>
                  </label>
                </div>

                <div className="border-t-2 border-dotted border-[#A0ABBB] my-6"></div>

                {/* Upphandling */}
                <div className="my-10">
                  <label className="flex md:items-center">
                    <div className="w-2/12 md:w-auto md:me-3">
                      <input
                        type="checkbox"
                        checked={
                          formState.services.hjalpOrderhanteringOnskas
                        }
                        onChange={() =>
                          handleCheckboxChange(
                            "services",
                            "hjalpOrderhanteringOnskas"
                          )
                        }
                        className="size-6"
                      />
                    </div>
                    <div className="w-10/12">
                      Hjälp med orderhantering önskas
                    </div>
                  </label>
                </div>

                <div className="border-t-2 border-dotted border-[#A0ABBB] my-6"></div>

                {/* Kringfunktioner */}
                <div className="my-10">
                  <label className="flex md:items-center">
                    <div className="w-2/12 md:w-auto md:me-3">
                      <input
                        type="checkbox"
                        className="me-2 size-6"
                        checked={
                          formState.services.behoverHjalpKringtjansterMerInfo
                        }
                        onChange={() =>
                          handleCheckboxChange(
                            "services",
                            "behoverHjalpKringtjansterMerInfo"
                          )
                        }
                      />
                    </div>
                    <div className="w-10/12">
                      Behöver hjälp med andra kringtjänster, såsom montering,
                      underhåll etc. Vi önskar mer info.
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
                        checked={
                          formState.services.behoverForslagKomplett3plLosning
                        }
                        onChange={() =>
                          handleCheckboxChange(
                            "services",
                            "behoverForslagKomplett3plLosning"
                          )
                        }
                      />
                    </div>
                    <div className="w-10/12">
                      Behöver förslag till en komplett 3pl lösning, önskar
                      gärna mer info.
                    </div>
                  </label>
                </div>

                {/* Submit Button */}
                <div className="text-center">
                <button
          type="submit"
          disabled={loading}
          className={`my-3 flex items-center mx-auto md:mx-0 ${
            loading ? "opacity-50 cursor-not-allowed" : "hover:text-[#ff6300]"
          } text-white hover:bg-white bg-[#ff6300] border-[#ff6300] border-2 text-nowrap md:py-3 py-2 px-3 md:px-4 lg:px-8 rounded-md`}
        >
          {loading ? "Skickar..." : "Skicka"}
          <span className="bg-white rounded-full border-[#ff6300] border-2 p-1 ms-3">
            <IoArrowForward color="#ff6300" size={23} />
          </span>
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
