import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
const CenterStudyLogin = () => {
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: any) => {
    e.preventDefault();

    // Basic validation
    if (!email || !password) {
      alert('Please enter both email and password.');
      return;
    }
    // Replace this with your actual login logic
    // For now, let's consider a dummy authentication
    if (email === 'admin@example.com' && password === 'adminpassword') {
      // Successful login, redirect to admin dashboard
      router.push('/studycenter-dashboard');
    } else {
      // Invalid credentials
      alert('Invalid email or password. Please try again.');
    }
  };
  return (
    <>
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
              </Link>
              </button>
            </div>
          </div>
          <div className="absolute inset-0 bg-black  opacity-50"></div>
        </div>

        <div className="flex md:w-1/2 justify-center py-10 items-center bg-white">
          <div className="w-full px-7 py-5 sm:p-15 xl:p-18">
            <form className='px-8'>
              <div className='md:hidden mb-12 flex  items-center flex-col gap-3'>
                <Image
                  src="/images/logo.png"
                  alt="logo"
                  className='md:w-w-64 z-1 w-28'
                  width={128}
                  height={77}
                />
                <h1 className=" w-full font-bold text-center text-xl">Institute of Digital Education & Employment Development, INDIA</h1>
              </div>

              <h1 className="text-gray-800 font-bold text-2xl mb-7">Sign In Student Study Center</h1>

              <div className="mb-4">
                <label className="mb-2.5 block font-medium text-black dark:text-white">
                  Email
                </label>
                <div className="relative">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="md:w-11/12 w-full xl:w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label className="mb-2.5 block font-medium text-black dark:text-white">
                  Password
                </label>
                <div className="relative">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="password"
                    className="md:w-11/12 w-full xl:w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-4 outline-none focus:border-primary focus-visible:shadow-none"
                  />
                </div>
              </div>

              <div className="mb-5">
                <input
                  type="submit"
                  onClick={handleLogin}
                  value="Sign In"
                  className="w-full cursor-pointer rounded-lg text-lg bg-sdmis-primary-600 p-4 text-white transition hover:bg-opacity-90"
                />
              </div>

              <div className=" text-center">
                <Link href="/">
                  Forgot passowrd?
                </Link>
              </div>
            </form>
          </div>
        </div>
      </main>
    </>
  )
}
export default CenterStudyLogin;