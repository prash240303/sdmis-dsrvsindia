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
      <div className="w-full border-t border-sdmis-primary-600 bg-sdmis-primary-100 ">
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
          {/* <div className="flex gap-6 mt-2">
            <FaInstagram className="w-8 h-8" />
            <FaTwitter className="w-8 h-8" />
            <FaFacebook className="w-8 h-8" />
            <FaYoutube className="w-8 h-8" />
          </div> */}

          {/* Signup For Newsletter Section Of Footer */}
          <div className="bg-jse-neutral-900 w-full flex flex-col md:flex-row">
            <div className="flex flex-col  basis-3/5 gap-4 md:p-10 py-8 px-4">
              <div className="md:text-2xl text-xl  text-wrap">
                Sign Up for our newsletter
              </div>
              
            </div>
            <div className="flex basis-2/5 flex-row text-white md:p-10 px-8  pb-4  items-center justify-around">
              <input className="rounded-xl h-7/12 w-7/12 p-3 text-black" type="text" placeholder="Enter your email" />
              <button className="bg-sdmis-primary-600 md:p-4 p-3 h-7/12 w-4/12 rounded-xl">Notify Me</button>
            </div>
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
