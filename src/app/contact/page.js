"use client";
import React, { useState } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { PiPhoneCallThin } from "react-icons/pi";
import { CiLocationOn } from "react-icons/ci";
import dynamic from "next/dynamic";
import { IoArrowForward } from "react-icons/io5";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Dynamically import MapComponent with SSR disabled
const MapComponent = dynamic(() => import("../components/MapComponent"), {
  ssr: false,
});

const ContactPage = () => {
  const [loading, setLoading] = useState(false); // Loading state for submit button

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true); // Disable the submit button

    const formData = {
      firstName: event.target["first-name"].value,
      lastName: event.target["last-name"].value,
      email: event.target.email.value,
      phone: event.target.phone.value,
      company: event.target.company.value,
      orgNr: event.target.orgnr.value,
      message: event.target.message.value,
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        // Show success toast
        toast.success(result.message || "Tack för ditt mail, vi kontaktar dig inom kort!");

        // Clear the form
        event.target.reset();
      } else {
        // Show error toast
        toast.error(result.message || "Fel vid formulärinlämning.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Ett fel inträffade. Försök igen.");
    } finally {
      setLoading(false); // Re-enable the submit button
    }
  };

  return (
    <>
      {/* ToastContainer to display notifications */}
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
        <div className=" mx-auto flex justify-center items-center h-full">
          <h1 className="text-white md:text-5xl text-4xl font-bold text-center">
            Kontakta oss
          </h1>
        </div>
      </section>
      <section className="h-[500px] z-10 relative">
        <MapComponent />
      </section>

      <section className="pt-12 px-6 md:px-9 text-black w-full flex flex-col lg:flex-row gap-12 items-start justify-center">
        {/* Contact Information */}
        <div className="w-full lg:w-5/12 md:p-8 P-4 text-center md:text-start">
          <h2 className="text-xl font-bold mb-1">Kontakta oss</h2>
          <h3 className="text-lg font-semibold mb-4">Pallhotellet</h3>
          <div className="space-y-4 text-lg px-4 md:px-0">
            <div className="flex md:items-center justify-center md:justify-normal">
              <CiLocationOn size={23} />
              <p className="ml-1">Vickerkullavägen 2, 591 45 Motala</p>
            </div>
            <div className="flex mditems-center justify-center md:justify-normal">
              <PiPhoneCallThin size={20} />
              <p className="ml-2">0141-21 50 44</p>
            </div>
            <div className="flex items-center justify-center md:justify-normal">
              <AiOutlineMail size={19} />
              <p className="ml-2">order@pallhotellet.se</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="w-full lg:w-9/12  md:p-8 p-4">
          <h2 className="text-3xl font-bold mb-8">Kontakta oss</h2>
          <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* First Name */}
            <div className="flex flex-col">
              <input
                id="first-name"
                type="text"
                className="p-3 border border-gray-300 rounded-md focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition duration-200"
                placeholder="Förnamn *"
                required
              />
            </div>

            {/* Last Name */}
            <div className="flex flex-col">
              <input
                id="last-name"
                type="text"
                className="p-3 border border-gray-300 rounded-md focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition duration-200"
                placeholder="Efternamn *"
                required
              />
            </div>

            {/* Email */}
            <div className="flex flex-col">
              <input
                id="email"
                type="email"
                className="p-3 border border-gray-300 rounded-md focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition duration-200"
                placeholder="Email *"
                required
              />
            </div>

            {/* Phone Number */}
            <div className="flex flex-col">
              <input
                id="phone"
                type="text"
                className="p-3 border border-gray-300 rounded-md focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition duration-200"
                placeholder="Telefonnummer"
                required
              />
            </div>

            {/* Company */}
            <div className="flex flex-col sm:col-span-1">
              <input
                id="company"
                type="text"
                className="p-3 border border-gray-300 rounded-md focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition duration-200"
                placeholder="Företag"
              />
            </div>

            {/* OrgNr */}
            <div className="flex flex-col sm:col-span-1">
              <input
                id="orgnr"
                type="text"
                className="p-3 border border-gray-300 rounded-md focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition duration-200"
                placeholder="OrgNr"
              />
            </div>

            {/* Message */}
            <div className="flex flex-col sm:col-span-2">
              <textarea
                id="message"
                rows={4}
                className="p-3 border border-gray-300 rounded-md focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition duration-200"
                placeholder="Meddelande"
                required
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="sm:col-span-2">
              <button
                type="submit"
                disabled={loading}
                className={`my-3 flex items-center mx-auto md:mx-0 ${
                  loading ? "opacity-50 cursor-not-allowed" : "hover:text-[#ff6300]"
                } text-white hover:bg-white bg-[#ff6300] border-[#ff6300] border-2 text-nowrap md:py-3 py-2 
                      px-3 md:px-4 lg:px-8  
                rounded-md`}
              >
                {loading ? "Skickar..." : "Skicka"}
                <span className="bg-white rounded-full border-[#ff6300] border-2 p-1 ms-3">
                  <IoArrowForward color="#ff6300" size={23} />
                </span>
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
