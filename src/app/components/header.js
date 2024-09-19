"use client"; // Enable client-side interactivity
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaCaretDown } from "react-icons/fa";
import Link from "next/link";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaFacebook, FaTwitter } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
import { FiInstagram } from "react-icons/fi";

export default function Header() {
  const [isSticky, setIsSticky] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleScroll = () => {
        const headerSecondDiv = document.getElementById("stickyDiv");
        const stickyPoint = headerSecondDiv?.offsetTop || 0;

        if (window.pageYOffset > stickyPoint) {
          setIsSticky(true);
        } else {
          setIsSticky(false);
        }
      };

      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  // Toggle mobile menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Toggle dropdown for Tjänster
  const toggleDropdown = () => {
    if (!pathname.startsWith("/services")) {
      setDropdownOpen(!dropdownOpen);
    }
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        !event.target.closest(".dropdown-container") &&
        !event.target.closest(".dropdown-btn")
      ) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header
      className={`text-white justify-between items-center w-full fixed top-0 left-0 z-50 pb-2`}
    >
      <div className="px-20 mx-auto border border-gray-700 text-gray-400 hidden md:flex justify-between items-center py-2">
        <div className="flex md:text-sm xl:text-lg text-sm items-center space-x-6">
          <div className="hover:text-white flex items-center space-x-3">
            <p>591 45 Motala, Sweden.</p>
            <FaLocationDot />
          </div>
          <div className="hover:text-white flex items-center space-x-3">
            <p>info@pallhotellet.se</p>
            <MdEmail />
          </div>
        </div>
        <div className="flex text-sm md:text-sm xl:text-lg items-center">
          <p className="hover:text-white">Följ oss:</p>
          <div className="px-4 cursor-pointer md:space-x-4 space-x-2 flex">
            <FaFacebook className="hover:text-white" />
            {/* <FaTwitter className="hover:text-white" />
            <IoLogoLinkedin className="hover:text-white" />
            <FiInstagram className="hover:text-white" /> */}
          </div>
        </div>
      </div>

      <div className="flex md:justify-center justify-around">
        <div
          id="stickyDiv"
          className={`text-white flex justify-between items-center
             w-full py-4 bg-[#001d24] px-8 md:mx-20 ${
               isSticky
                 ? "bg-[#001d24] fixed top-0 z-50 px-8 md:px-20"
                 : "md:relative absolute "
             }`}
        >
          <div className="md:w-4/12 lg:h-auto">
            <Link className="w-full" href="/">
              <Image
                src="/imgs/Pallhotellet.se.png"
                alt="Logo"
                width={200}
                height={250}
              />
            </Link>
          </div>

          {/* Mobile menu toggler */}
          <div className="md:hidden">
            <button className="text-white" onClick={toggleMenu}>
              <GiHamburgerMenu /> {/* Mobile menu icon */}
            </button>
          </div>

          <div className="md:w-8/12 hidden md:flex items-center justify-between space-x-2">
            {/* Desktop menu */}
            <ul
              id="menu"
              className="hidden md:flex text-nowrap lg:space-x-14 md:space-x-2 lg:text-lg font-semibold "
            >
              <li
                className={`${
                  pathname === "/" ? "text-[#ff6300]" : "hover:text-[#ff6300]"
                }`}
              >
                <Link className="w-full" href="/">
                  Hem
                </Link>
              </li>
              {/* <li
                className={`${
                  pathname === "/findus"
                    ? "text-[#ff6300]"
                    : "hover:text-[#ff6300]"
                }`}
              >
                <Link className="w-full" href="/findus">Hitta oss</Link>
              </li> */}
              <li
                className={`relative group dropdown-container ${
                  pathname.startsWith("/services")
                    ? "text-[#ff6300]"
                    : "hover:text-[#ff6300]"
                }`}
                onMouseEnter={toggleDropdown}
                onMouseLeave={toggleDropdown}
              >
                <div className="flex items-center">
                  <Link className="w-full" href="/services">
                    Tjänster
                  </Link>
                  <span className="ms-3">
                    {!pathname.startsWith("/services") && <FaCaretDown />}
                  </span>
                </div>

                {/* Dropdown */}
                {dropdownOpen && (
                  <ul className="absolute top-10 bg-white rounded font-medium text-[#001d24] py-2 z-50">
                    <li className="px-3 py-1 text-nowrap hover:bg-slate-300">
                      <Link className="w-full" href="/services#indoor">
                        Lagerhållning inomhus
                      </Link>
                    </li>
                    <li className="px-3 py-1 text-nowrap hover:bg-slate-300">
                      <Link className="w-full" href="/services#outdoor">
                        Lagerhållning utomhus
                      </Link>
                    </li>
                    <li className="px-3 py-1 text-nowrap hover:bg-slate-300">
                      <Link className="w-full" href="/services#rental">
                        Hyra av förråd
                      </Link>
                    </li>
                    <li className="px-3 py-1 text-nowrap hover:bg-slate-300">
                      <Link className="w-full" href="/services#cargo">
                        Godshantering
                      </Link>
                    </li>
                    <li className="px-3 py-1 text-nowrap hover:bg-slate-300">
                      <Link className="w-full" href="/services#other">
                        Övrigt
                      </Link>
                    </li>
                  </ul>
                )}
              </li>

              <li
                className={`${
                  pathname === "/contact"
                    ? "text-[#ff6300]"
                    : "hover:text-[#ff6300]"
                }`}
              >
                <Link className="w-full" href="/contact">
                  Kontakt
                </Link>
              </li>

              <Link className="w-full" href="/login">
                <li
                  className={`${
                    pathname === "/login"
                      ? "text-[#ff6300]"
                      : "hover:text-[#ff6300]"
                  }`}
                >
                  Logga in
                </li>
              </Link>
            </ul>

            {/* Request for Quotation Button (Desktop) */}
            <div className="border-2 hidden md:block outline-2 xl:px-6 md:px-2 border-[#ff6300] rounded-md">
              <Link className="w-full" href="/quotation">
                <button className="hover:text-[#ff6300] md:py-2 py-1 font-semibold">
                  Offertförfrågan
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu - Only shown when toggled */}

      {menuOpen && (
        <div className="md:hidden bg-[#001d24] text-white px-4 z-60 pt-[70px] pb-10">
          <ul className="">
            <Link
              className="w-full"
              href="/"
              onClick={() => setMenuOpen(false)}
            >
              <li className="text-white hover:text-[#ff6300] my-3 text-md font-semibold px-4">
                Hem
              </li>
            </Link>

            {/* <li className="text-white hover:text-[#ff6300] my-3 text-md font-semibold px-4">
              <Link className="w-full" href="/findus" onClick={() => setMenuOpen(false)}>
                Hitta oss
              </Link>
            </li> */}

            <li
              className={`relative group dropdown-container ${
                pathname.startsWith("/services")
                  ? "text-[#ff6300]"
                  : "hover:text-[#ff6300]"
              }`}
            >
              <div className="flex">
              <Link className="w-full" href="/services">
                <div
                  className="flex items-center text-md font-semibold px-4"
                  onClick={() => setMenuOpen(false)}
                >
                  Tjänster
                </div>
              </Link>

              <span className="ms-3"
                      onClick={toggleDropdown}>
                    {!pathname.startsWith("/services") && <FaCaretDown />}
                  </span>
                  </div>
              {/* Dropdown */}
              {dropdownOpen && (
                <ul className="bg-white text-[#001d24] text-md py-3 my-2 z-50 rounded">
                  <Link
                    className="w-full"
                    href="/services#indoor"
                    onClick={() => setMenuOpen(false)}
                  >
                    <li className="px-3 py-1 text-nowrap hover:bg-slate-300">
                      Lagerhållning inomhus
                    </li>
                  </Link>

                  <Link
                    className="w-full"
                    href="/services#outdoor"
                    onClick={() => setMenuOpen(false)}
                  >
                    <li className="px-3 py-1 text-nowrap hover:bg-slate-300">
                      Lagerhållning utomhus
                    </li>
                  </Link>

                  <Link
                    className="w-full"
                    href="/services#rental"
                    onClick={() => setMenuOpen(false)}
                  >
                    <li className="px-3 py-1 text-nowrap hover:bg-slate-300">
                      Hyra av förråd
                    </li>
                  </Link>

                  <Link
                    className="w-full"
                    href="/services#cargo"
                    onClick={() => setMenuOpen(false)}
                  >
                    <li className="px-3 py-1 text-nowrap hover:bg-slate-300">
                      Godshantering
                    </li>
                  </Link>

                  <Link
                    className="w-full"
                    href="/services#other"
                    onClick={() => setMenuOpen(false)}
                  >
                    <li className="px-3 py-1 text-nowrap hover:bg-slate-300">
                      Övrigt
                    </li>
                  </Link>
                </ul>
              )}
            </li>

            <Link
              className="w-full"
              href="/contact"
              onClick={() => setMenuOpen(false)}
            >
              <li className="text-white hover:text-[#ff6300] my-3 text-md font-semibold px-4">
                Kontakt
              </li>
            </Link>

            <Link
              className="w-full"
              href="/login"
              onClick={() => setMenuOpen(false)}
            >
              <li className="text-white hover:text-[#ff6300] my-3 text-md font-semibold px-4">
                Logga in
              </li>
            </Link>
          </ul>
       
          {/* Mobile Request for Quotation Button */}
          <div className="mt-4 border-2 border-[#ff6300] rounded-md">
            <button
              className="w-full py-2 text-md  hover:text-[#ff6300]"
              onClick={() => setMenuOpen(false)}
            >
              <Link className="w-full" href="/quotation">
                Offertförfrågan
              </Link>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
