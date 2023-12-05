import HomeLayout from "@/components/home/Layout";
import { FaMailBulk, FaPhone, FaWhatsapp } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
const ContactUs = () => {
  return (
    <HomeLayout>
      <div className="bg-[#fbf5eb] flex flex-col items-start px-4 pt-8 sm:px-8 h-full">

        {/* <div className="text-center flex flex-col items-start mb-4 sm:mb-8">
          <h1 className="text-2xl sm:text-4xl font-bold text-sdmis-primary-600 mb-2 sm:mb-4">Socials</h1>
          <div className="flex justify-center space-x-4">
            <a href="#" className="text-lg sm:text-2xl text-blue-500 hover:text-blue-700">
              <FaInstagram />
            </a>
            <a href="#" className="text-lg sm:text-2xl text-blue-500 hover:text-blue-700">
              <FaFacebook />
            </a>
            <a href="#" className="text-lg sm:text-2xl text-red-500 hover:text-red-700">
              <FaYoutube />
            </a>
            <a href="#" className="text-lg sm:text-2xl text-blue-400 hover:text-blue-600">
              <FaTwitter />
            </a>
          </div>
        </div> */}

        <div className="w-full flex flex-col justify-center items-start mb-4 sm:mb-12">
          <div className="mb-4 sm:mb-8">
            <h1 className="text-2xl sm:text-4xl font-bold text-sdmis-primary-600 mb-2 sm:mb-4">Our Address</h1>
            <p className="text-base font-bold sm:text-lg text-left">
              <span className="block">डिजिटल शिक्षा तथा रोजगार विकास संस्थान</span>
              <span className="block">INSTITUTE OF DIGITAL EDUCATION AND EMPLOYMENT DEVELOPMENT</span>
              <span className="block">PO - Bagri, Tonk, Rajasthan 304801</span>
            </p>
          </div>


          <div className="flex flex-wrap gap-16">
            <div className="mb-4 text-left flex flex-col gap-1 items-center justify-center">
              <a href="" className="text-5xl">
                <FaWhatsapp />
              </a>
              <h1 className="text-lg sm:text-2xl font-bold ">Whatsapp</h1>
              <p className="text-base sm:text-lg">7688-992-247</p>
            </div>
            <div className="mb-4 text-left flex flex-col gap-1 items-center justify-center">
              <a href="" className="text-5xl">
                <FaPhone />
              </a>
              <h1 className="text-lg sm:text-2xl font-bold ">Tele-phone</h1>
              <p className="text-base sm:text-lg">01432-245010</p>
            </div>



            <div className="mb-4 text-left flex flex-col gap-1 items-center justify-center">
              <a href="" className="text-5xl">
                <HiOutlineMail />
              </a>
              <h1 className="text-lg sm:text-2xl font-bold ">E-mail</h1>
              <p className="text-base sm:text-lg">supportideed@nic.in</p>
            </div>

          </div>
          {/* <div className="mb-4 text-left">
            <h1 className="text-lg sm:text-2xl font-bold">Whatsapp Helpline</h1>
            <p className="text-base sm:text-lg">7688992247 (Only Working Hours)</p>
          </div> */}


        </div>
      </div>
    </HomeLayout>
  );
};

export default ContactUs;
