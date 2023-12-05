import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

import { FaInstagram, FaFacebook, FaYoutube, FaTwitter } from "react-icons/fa";
export default function Footer() {
  const footerItems = [
    "About Us",
    "Contact Us",
    "Terms & Conditions",
    "Privacy Policy",
    "Help",
    "FAQs",
    "Feedback",
    "Sitemap",
  ];

  return (
    <>
      {/* Footer */}
      <div className={`w-full border-t border-sdmis-primary-600 bg-sdmis-primary-100 ${inter.className}`}>
        <div className="flex justify-center items-center flex-wrap gap-3 px-2 py-3 border-b border-sdmis-primary-600">
          |
          {footerItems.map((item, index) => (
            <a
              key={index}
              href="#"
              className="text-sdmis-neutral-500 hover:text-sdmis-primary-600"
            >
              {item} |
            </a>
          ))}
        </div>
        <div className="flex flex-col md:text-base text-sm my-4  gap-2 text-center items-center justify-center">
          <p>
            Copyright © 2022. Punjab School Education Board, Vidya Bhawan,
            Phase-8, SAS Nagar (Mohali), India. All rights reserved.
          </p>
          <p>
            For any query regarding this website Please Contact the
            WIM:board.pseb@punjab.gov.in (Feedback through Email)
          </p>
        </div>

        {/* Signup For Newsletter Section Of Footer */}
        <div className="w-full flex my-4 py-4 items-center justify-center md:gap-24 gap-0 flex-col md:flex-row">
          <div className="flex flex-col md:pb-0 pb-4  px-4">
            <div className="md:text-2xl text-xl font-bold text-wrap">
              Sign Up for our Newsletter
            </div>
          </div>
          <div className="flex md:flex-row flex-col md:gap-0 gap-4 text-white  items-center justify-around">
            <input className="rounded-xl h-7/12 md:w-72 w-52 mr-4 p-3 border border-sdmis-primary-600 text-black" type="text" placeholder="Enter your email" />
            <button className="bg-sdmis-primary-600 py-3 md:px-5 px-3 rounded-xl">Notify Me</button>
          </div>
        </div>
        <div className="flex bg-sdmis-primary-600 md:text-sm text-xs  flex-col text-white  items-center justify-center text-center  gap-4  mt-4 ">
          <div className="flex md:flex-row flex-col md:gap-4 gap-2 mt-4">
            <p>  Total Visitors: 1231157</p>
            <p> Last Updated On : 2023-11-06 10:44:2</p>
          </div>
          <p>
            This site is best viewed in 1024 * 768 resolution with latest
            version of Chrome, Firefox, Safari and Internet Explorer(Edge).
          </p>
        </div>
      </div>
    </>
  );
}



// <p className="md:border-r border-sdmis-primary-600 border-0"> Total Visitors: 1231157 </p>
// <p>  Last Updated On : 2023-11-06 10:44:2</p>
// <p>This site is best viewed in 1024 * 768 resolution with latest version of Chrome, Firefox, Safari and Internet Explorer(Edge).</p>
