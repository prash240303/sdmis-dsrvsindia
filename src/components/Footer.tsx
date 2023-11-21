import Image from "next/image";
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
      <div className="w-full  bg-sdmis-primary-300 ">
        <div className="flex justify-center items-center flex-wrap gap-3 px-2 py-3 border-b border-sdmis-primary-600">
          {/* dynamic list of items */}
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
        <div className="flex flex-col md:text-base text-sm   gap-2 text-center items-center justify-center mt-4">
          <p>
            Copyright © 2022. Punjab School Education Board, Vidya Bhawan,
            Phase-8, SAS Nagar (Mohali), India. All rights reserved.
          </p>
          <p>
            For any query regarding this website Please Contact the
            WIM:board.pseb@punjab.gov.in (Feedback through Email)
          </p>
          <div className="flex gap-6 mt-2">
            <FaInstagram className="w-8 h-8" />
            <FaTwitter className="w-8 h-8" />
            <FaFacebook className="w-8 h-8" />
            <FaYoutube className="w-8 h-8" />
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
