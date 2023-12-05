import React, { useState } from 'react';
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
      <main className="text-black flex flex-col items-center justify-start min-h-screen relative overflow-hidden">
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
              className={`px-4 py-2 border border-black bg-sdmis-primary-300 rounded-lg  ${isRegistering ? 'bg-sdmis-primary-600 text-white' : ''}`}
              onClick={() => setIsRegistering(true)}>
              Register
            </button>
            <button
              className={`px-4 py-2 border border-black bg-sdmis-primary-300 rounded-lg  ${!isRegistering ? 'bg-sdmis-primary-600 text-white' : ''}`}
              onClick={() => setIsRegistering(false)}>
              Login
            </button>
          </div>
        </div>

        <div className='mt-4 w-full flex items-center justify-center'>
          {isRegistering ? <StudentRegister /> : <StudentLogin />}

        </div>
      </main>
    </>
  );
};

export default StudentSignIn;
