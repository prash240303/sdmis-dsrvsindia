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
      <Image src="/images/backdrop.webp" priority={true} alt="bg" width={2000} height={2000} className='object-cover h-full absolute left-0 -z-10' />
      <h1 className="text-4xl pt-10 font-bold text-center">Student Register and Login Portal</h1>

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

      <div className='my-16 rounded-lg bg-white w-fit mx-auto self-center flex items-center justify-center '>
        {isRegistering ? <StudentRegister /> : <StudentLogin />}
      </div>

    </>
  );
};

export default StudentSignIn;
