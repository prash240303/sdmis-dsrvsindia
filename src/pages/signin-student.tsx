import React, { useState } from 'react';
import Link from 'next/link';
import StudentLogin from "@/components/student login-register/login-student";
import StudentRegister from "@/components/student login-register/register-student";
import Image from 'next/image';
const StudentSignIn = () => {
  const [isRegistering, setIsRegistering] = useState(true);

  const toggleComponent = () => {
    setIsRegistering((prev) => !prev);
  };

  return (
    <>
      {/* <main className="text-black flex flex-col items-center justify-start min-h-screen relative overflow-hidden">
        <Image
          src="/images/backdrop.webp"
          priority={true}
          alt="bg"
          width={2000}
          height={2000}
          className='object-cover w-full h-full absolute -z-10'
        />

        <div className="flex md:flex-row mt-4 flex-col items-center">
          <Image
            src="/images/logo.png"
            alt="logo"
            width={128}
            height={77}
          // className="w-32 h-32"
          />
          <div className="flex flex-col gap-1 w-full font-bold md:text-2xl lg:text-xl text-base px-3 text-center md:text-left">
            <h1>डिजिटल शिक्षा तथा रोज़गार विकास संस्थान</h1>
            <h1>Institute of Digital Education & Employment Development, INDIA</h1>
            <h1 className="font-semibold md:text-xl text-sm w-full">
              AN ISO 9001:2015 CERTIFIED INSTITUTE
            </h1>
          </div>
        </div>

        <h1 className="md:text-4xl text-2xl :mt-10 mt-2 font-bold text-center">Student Register and Login Portal</h1>

        <div className="flex justify-center mt-4">
          <div className="flex space-x-4">
           
            <button
              className={`px-4 py-2   bg-sdmis-primary-100 rounded-lg  ${!isRegistering ? 'bg-sdmis-primary-600 text-white' : ''}`}
              onClick={() => setIsRegistering(false)}>
              Login
            </button>
            <button
              className={`px-4 py-2   bg-sdmis-primary-100 rounded-lg  ${isRegistering ? 'bg-sdmis-primary-600 text-white' : ''}`}
              onClick={() => setIsRegistering(true)}>
              Register
            </button>
          </div>
        </div>

        <div className='mt-4 w-full flex items-center justify-center'>
          {isRegistering ? <StudentRegister /> : <StudentLogin />}

        </div>
      </main> */}
      <main className="h-screen md:flex">
        <div className="relative overflow-hidden bg-[url('/images/background.jpg')] md:flex w-1/2 justify-around items-center hidden" >
          <div className="flex md:flex-row mt-4 flex-col items-center">
            <Image
              src="/images/logo.png"
              alt="logo"
              className='md:w-w-64 z-1 w-28'
              width={128}
              height={77}
            />
            <div className="flex flex-col  z-1 text-white  gap-1 w-full font-bold md:text-2xl lg:text-xl text-sm px-3 text-center md:text-left">
              <h1>डिजिटल शिक्षा तथा रोज़गार विकास संस्थान</h1>
              <h1>Institute of Digital Education & Employment Development, INDIA</h1>
              <h1 className="font-semibold md:text-xl text-sm w-full">
                AN ISO 9001:2015 CERTIFIED INSTITUTE
              </h1>
              <button className=" w-28 bg-white text-sdmis-primary-600 hover:bg-sdmis-primary-100 mt-4 py-2  font-bold mb-2"> <Link href="/">Website
              </Link> </button>
            </div>
          </div>
          <div className="absolute inset-0 bg-black  opacity-50"></div>
        </div>



        <div className="flex flex-col md:w-1/2 justify-center items-center bg-white">

        <div className='md:hidden mb-6  mx-7 flex items-center flex-col gap-3'>
            <Image
              src="/images/logo.png"
              alt="logo"
              className='md:w-w-64 z-1 w-28'
              width={128}
              height={77}
            />
            <h1 className=" w-full font-bold text-center text-xl">Institute of Digital Education & Employment Development, INDIA</h1>
          </div>

          {/* tabs  */}
            <div className="flex justify-center md:mb-5 xl:mb-8 mb-12  space-x-4">

              <button
                className={`px-4 py-2   bg-sdmis-primary-100 rounded-lg  ${!isRegistering ? 'bg-sdmis-primary-600 text-white' : ''}`}
                onClick={() => setIsRegistering(false)}>
                Login
              </button>
              <button
                className={`px-4 py-2   bg-sdmis-primary-100 rounded-lg  ${isRegistering ? 'bg-sdmis-primary-600 text-white' : ''}`}
                onClick={() => setIsRegistering(true)}>
                Register
              </button>
            </div>

          
          <div className="w-full">
            <div className=' w-full flex items-center justify-center'>
              {isRegistering ? <StudentRegister /> : <StudentLogin />}
            </div>
            
          </div>
        </div>
      </main>
    </>
  );
};

export default StudentSignIn;
