import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <nav className="border p-4">
      {/* Images displayed above the title in mobile view */}
      <div className="md:hidden flex  text-center">
        <Image src="/logo.jpg" alt="logo" width={128} height={77} className="w-20 h-20 mx-auto mb-4" />
        <Image src="/logoside.jpg" alt="logo" width={150} height={100} className="mx-auto w-28 h-20" />
      </div>

      <div className="flex gap-12 items-center justify-center w-full">
        {/* Images hidden in laptop view */}
        <div className="hidden sm:block">
          <Image src="/logo.jpg" alt="logo" width={128} height={77} className="w-48 h-32" />
        </div>
        <div className="flex flex-col gap-1 w-full font-bold md:text-2xl text-base px-3 text-center">
          <h1>डिजिटल शिक्षा तथा रोज़गार विकास संस्थान</h1>
          <h1>Institute of Digital Education & Employment Development, INDIA</h1>
          <h1 className="font-semibold md:text-xl text-sm w-full">AN ISO 9001:2015 CERTIFIED INSTITUTE</h1>
        </div>
        {/* Images hidden in laptop view */}
        <div className="hidden sm:block">
          <Image src="/logoside.jpg" alt="logo" width={150} height={100} />
        </div>
      </div>

      {/* Hamburger menu for mobile view */}
      <div className="md:hidden text-center mt-6 w-full bg-sdmis-primary-600 text-white">

        <button
          className="text-2xl focus:outline-none"
          onClick={toggleMenu}
        >
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
              <Link href="/" >Direct Online Admission</Link>
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
            {/* Add other list items as needed */}
          </ul>
        )}
      </div>




      <ul className="hidden md:flex text-base bg-sdmis-primary-600 gap-4 items-center text-center text-white">
        <li className="hover:bg-sdmis-primary-300 cursor-pointer px-2 py-5">
          <Link href="/">About us</Link>
        </li>
        <li className="hover:bg-sdmis-primary-300 cursor-pointer py-5">
          <Link href="/">Service on Portal</Link>
        </li>
        <li className="hover:bg-sdmis-primary-300 cursor-pointer py-5">
          <Link href="/">Service on Portal</Link>
        </li>
        <li className="hover:bg-sdmis-primary-300 cursor-pointer py-5">
          <Link href="/">Track Application</Link>
        </li>
        <li className="hover:bg-sdmis-primary-300 cursor-pointer py-5 px-2">
          <Link href="/">Contact Us</Link>
        </li>
        <li className="hover:bg-sdmis-primary-300 cursor-pointer py-8 px-2">
          <Link href="/">Donation</Link>
        </li>
        <li className="hover:bg-sdmis-primary-300  cursor-pointer py-5">
          <Link href="/">Apply for New Branch / Study Centre</Link>
        </li>
        <li className="hover:bg-sdmis-primary-300 cursor-pointer py-5">
          <Link href="/" >Direct Online Admission</Link>
        </li>
        <li className="hover:bg-sdmis-primary-300 cursor-pointer py-5">
          <Link href="/">Centre Locater</Link>
        </li>
        <li className="hover:bg-sdmis-primary-300 cursor-pointer px-2 py-8">
          <Link href="/">Slider</Link>
        </li>
        <li className="hover:bg-sdmis-primary-300 cursor-pointer py-5">
          <Link href="/">Latest Updates</Link>
        </li>
        <li className="hover:bg-sdmis-primary-300 cursor-pointer py-5">
          <Link href="/">New Events</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
