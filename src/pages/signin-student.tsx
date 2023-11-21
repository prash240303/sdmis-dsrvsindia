import React, { useState } from 'react';
import StudentLogin from "@/components/student login-register/login-student";
import StudentRegister from "@/components/student login-register/register-student";
import Navbar from '@/components/Navbar';

const StudentSignIn = () => {
  const [isRegistering, setIsRegistering] = useState(true);

  const toggleComponent = () => {
    setIsRegistering((prev) => !prev);
  };

  return (
    <div>
      <Navbar />

      <h1 className="text-4xl mt-10 font-bold text-center">Student Register and Login Portal</h1>
      {/* Toggle to select between register and login buttons */}
      <div className="flex justify-center mt-4">
        <div className="flex space-x-4">
          <button
            className={`px-4 py-2 border border-black bg-sdmis-primary-300 rounded-lg  ${isRegistering ? 'bg-sdmis-primary-600 text-white' : ''}`}
            onClick={() => setIsRegistering(true)}
          >
            Register
          </button>
          <button
            className={`px-4 py-2 border border-black bg-sdmis-primary-300 rounded-lg  ${!isRegistering ? 'bg-sdmis-primary-600 text-white' : ''}`}
            onClick={() => setIsRegistering(false)}
          >
            Login
          </button>
        </div>
      </div>


      {/* Conditionally render the components based on state */}
      {isRegistering ? <StudentRegister /> : <StudentLogin />}
    </div>
  );
};

export default StudentSignIn;
