

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

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
    { label: "Home", route: "/" },
    { label: "About us", route: "/home/about-us" },
    { label: "Contact Us", route: "/home/contact-us" },
    { label: "Service on Portal", route: "/home/service-on-portal" },
    { label: "Track Application", route: "/home/track-application" },
    { label: "Donation", route: "/home/donation" },
    { label: "Apply for New Branch / Study Centre", route: "/home/apply" },
    { label: "Direct Online Admission", route: "/home/online-admission" },
    { label: "Centre Locater", route: "/home/center-locator" },
    { label: "Slider", route: "/home/slider" },
    { label: "Latest Updates", route: "/home/latest-updates" },
    { label: "New Events", route: "/home/new-events" },
  ];

  const renderNavLinks = () => (
    <ul className="hidden md:flex lg:leading-tight text-xs bg-sdmis-primary-600 w-full justify-center items-center text-center text-white">
      {navItems.map((item, index) => (
        <Link key={index} href={item.route}>
          <li className="hover:bg-sdmis-primary-100 md:text-sm lg:text-xs hover:text-black border-l border-sdmis-primary-400 cursor-pointer px-2 md:py-1 lg:py-4">
            {item.label}
          </li>
        </Link>
      ))}
    </ul>
  );

  const renderDropdown = () => (
    <ul className="absolute left-0 bg-sdmis-primary-100 text-black z-10 shadow-lg">
      <Link href="/login-admin">
        <li className="hover:bg-sdmis-primary-600  hover:text-white cursor-pointer py-2 px-2">
          Admin
        </li>
      </Link>

      <Link href="/signin-student">
        <li className="hover:bg-sdmis-primary-600  hover:text-white cursor-pointer py-2 px-2">
          Student
        </li>
      </Link>

      <Link href="/study-center-login">
        <li className="hover:bg-sdmis-primary-600 hover:text-white cursor-pointer py-2 px-2">
          Study Centre
        </li>
      </Link>
    </ul>
  );

  return (
    <nav className={`border-b-8 border-sdmis-primary-100 bg-sdmis-primary-100 w-full  flex flex-col  items-center   ${inter.className}`}>
      <div className=" bg-sdmis-primary-600 w-full flex items-center justify-between px-4">
        <Link href="/" className="text-white text-sm underline">
          skip to main content
        </Link>
        <div className="bg-sdmis-primary-100 my-1 rounded-md ">
          <p className="leading-loose px-2 text-xs">{currentDateTime}</p>
        </div>
      </div>

      <div className="md:hidden flex text-center">
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
        <div className="hidden sm:block mr-2">
          <Image
            src="/images/logoside.jpg"
            alt="logo"
            width={150}
            height={100}
          />
        </div>
        <div className="hidden md:block relative text-white w-64">
          <button
            className="text-white bg-sdmis-primary-600 p-3"
            onClick={toggleDropdown}
          >
            Login / Sign Up
          </button>
          {showDropdown && renderDropdown()}
        </div>
      </div>

      <div className="md:hidden my-3 flex items-center justify-center bg-sdmis-primary-600 text-white w-fit p-3 text-center">
        <div className="relative">
          <button
            className="text-white bg-sdmis-primary-600"
            onClick={toggleDropdown}
          >
            Login / Sign Up
          </button>
          {showDropdown && renderDropdown()}
        </div>
      </div>

      <button className="md:hidden text-center mt-6 w-full bg-sdmis-primary-600 text-white" onClick={toggleMenu}>
        <span className="text-2xl py-2" >
          &#9776; Menu
        </span>
        {showMenu && renderNavLinks()}
      </button>

      {renderNavLinks()}
    </nav>
  );
};

export default Navbar;

