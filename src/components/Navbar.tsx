import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [currentDateTime, setCurrentDateTime] = useState("");

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const updateDateTime = () => {
    const now = new Date();
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      timeZoneName: "short",
    };
    const formattedDateTime = now.toLocaleString("en-US");
    setCurrentDateTime(formattedDateTime);
  };

  useEffect(() => {
    updateDateTime();
    // Update every second
    const intervalId = setInterval(updateDateTime, 1000);
    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  const navItems = [
    { label: "About us", route: "/" },
    { label: "Service on Portal", route: "/" },
    { label: "Track Application", route: "/" },
    { label: "Contact Us", route: "/" },
    { label: "Donation", route: "/" },
    { label: "Apply for New Branch / Study Centre", route: "/" },
    { label: "Direct Online Admission", route: "/" },
    { label: "Centre Locater", route: "/" },
    { label: "Slider", route: "/" },
    { label: "Latest Updates", route: "/" },
    { label: "New Events", route: "/" },
  ];

  return (
    <nav className="border-b-8 border-sdmis-primary-300 bg-sdmis-primary-100 w-full  flex flex-col items-center">
      <div className=" bg-sdmis-primary-600 w-full flex items-center justify-between px-4">
        <div className="flex items-start justify-center">
          <Image
            src="/next.svg"
            alt="logo"
            width={128}
            height={77}
            className="w-12 h-6 "
          />
          <Image
            src="/next.svg"
            alt="logo"
            width={128}
            height={77}
            className="w-12 h-6 "
          />
        </div>
        <Link href="/" className="text-white text-sm underline">
          skip to main content
        </Link>
        <div>
          <p className="text-white text-xs">{currentDateTime}</p>
        </div>
      </div>

      {/* Images displayed  in mobile view */}
      <div className="md:hidden flex   text-center">
        <Image
          src="/images/logo.png"
          alt="logo"
          width={128}
          height={77}
          className="w-20 h-20 mx-auto mb-4"
        />
        <Image
          src="/images/logoside.jpg"
          alt="logo"
          width={150}
          height={100}
          className="mx-auto w-28 h-20"
        />
      </div>

      <div className="flex bg-sdmis-primary-100 bg-[url('/images/texture.jpg')]  items-center justify-center w-full">
        {/* Images hidden in laptop view */}
        <div className="hidden sm:block">
          <Image
            src="/images/logo.png"
            alt="logo"
            width={128}
            height={77}
            className="w-48 h-32"
          />
        </div>
        <div className="flex flex-col gap-1 my-2  w-full font-bold md:text-2xl lg:text-xl  text-base px-3 md:text-left text-center">
          <h1>डिजिटल शिक्षा तथा रोज़गार विकास संस्थान</h1>
          <h1>
            Institute of Digital Education & Employment Development, INDIA
          </h1>
          <h1 className="font-semibold md:text-xl text-sm w-full">
            AN ISO 9001:2015 CERTIFIED INSTITUTE
          </h1>
        </div>
        {/* Images hidden in laptop view */}
        <div className="hidden sm:block mr-2">
          <Image
            src="/images/logoside.jpg"
            alt="logo"
            width={150}
            height={100}
          />
        </div>

        {/* Custom dropdown for Login/Sign Up (hidden for mobile view) */}
        <div className="hidden md:block relative text-white w-64">
          <button
            className="text-white bg-sdmis-primary-600 p-3"
            onClick={toggleDropdown}
          >
            Login / Sign Up
          </button>
          {showDropdown && (
            <ul className="absolute left-0 bg-sdmis-primary-100 text-black z-10 shadow-lg ">
              <li className="hover:bg-sdmis-primary-600  hover:text-white cursor-pointer px-8 py-2">
                <Link href="/login-admin">Admin</Link>
              </li>
              <li className="hover:bg-sdmis-primary-600  hover:text-white cursor-pointer text-center py-2">
                <Link href="/signin-student">Student</Link>
              </li>
              <li className="hover:bg-sdmis-primary-600 hover:text-white cursor-pointer text-center py-2">
                <Link href="/">E-Mitra</Link>
              </li>
            </ul>
          )}
        </div>
      </div>

      {/* mobile view signup button */}
      <div className="md:hidden my-3 flex items-center justify-center bg-sdmis-primary-600 text-white w-fit p-3 text-center">
        <div className="relative">
          <button
            className="text-white bg-sdmis-primary-600"
            onClick={toggleDropdown}
          >
            Login / Sign Up
          </button>
          {showDropdown && (
            <ul className="absolute left-0 bg-sdmis-primary-100 text-black z-10 shadow-lg ">
              <li className="hover:bg-sdmis-primary-600  hover:text-white cursor-pointer px-8 py-2">
                <Link href="/login-admin">Admin</Link>
              </li>
              <li className="hover:bg-sdmis-primary-600  hover:text-white cursor-pointer text-center py-2">
                <Link href="/login-student">Student</Link>
              </li>
              <li className="hover:bg-sdmis-primary-600 hover:text-white cursor-pointer text-center py-2">
                <Link href="/">E-Mitra</Link>
              </li>
            </ul>
          )}
        </div>
      </div>

      {/* Hamburger menu for mobile view */}
      <div className="md:hidden text-center mt-6 w-full bg-sdmis-primary-600 text-white">
        <button className="text-2xl focus:outline-none" onClick={toggleMenu}>
          &#9776; Menu
        </button>

        {showMenu && (
          <ul className="text-base bg-sdmis-primary-600 mt-2">
            <li className="hover:bg-sdmis-primary-300 cursor-pointer  py-2">
              <Link href="/">About us</Link>
            </li>
            <li className="hover:bg-sdmis-primary-300 cursor-pointer py-2">
              <Link href="/">Service on Portal</Link>
            </li>
            <li className="hover:bg-sdmis-primary-300 cursor-pointer py-2">
              <Link href="/">Track Application</Link>
            </li>
            <li className="hover:bg-sdmis-primary-300 cursor-pointer py-2 ">
              <Link href="/">Contact</Link>
            </li>
            <li className="hover:bg-sdmis-primary-300 cursor-pointer py-2 ">
              <Link href="/">Donation</Link>
            </li>
            <li className="hover:bg-sdmis-primary-300  cursor-pointer py-2">
              <Link href="/">Apply for New Branch / Study Centre</Link>
            </li>
            <li className="hover:bg-sdmis-primary-300 cursor-pointer py-2">
              <Link href="/">Direct Online Admission</Link>
            </li>
            <li className="hover:bg-sdmis-primary-300 cursor-pointer py-2">
              <Link href="/">Centre Locater</Link>
            </li>
            <li className="hover:bg-sdmis-primary-300 cursor-pointer py-2">
              <Link href="/">Slider</Link>
            </li>
            <li className="hover:bg-sdmis-primary-300 cursor-pointer py-2">
              <Link href="/">Latest Updates</Link>
            </li>
            <li className="hover:bg-sdmis-primary-300 cursor-pointer py-2">
              <Link href="/">New Events</Link>
            </li>
          </ul>
        )}
      </div>

      {/* Navigation items for desktop view */}
      <ul className="hidden md:flex lg:leading-tight text-xs bg-sdmis-primary-600 w-full justify-center items-center text-center text-white">
        {navItems.map((item, index) => (
          <li
            key={index}
            className="hover:bg-sdmis-primary-100 md:text-sm lg:text-xs hover:text-black border-l border-sdmis-primary-400 cursor-pointer px-2 md:py-1 lg:py-4"
          >
            <Link href={item.route}>{item.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
