import Image from "next/image";
import Link from "next/link";
const CenterStudyLogin = () => {
  return (
    <>
      <main className="text-black flex flex-col items-center justify-start min-h-screen relative md:px-0 px-10 overflow-hidden">
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
            className='md:w-w-64 w-28'
            width={128}
            height={77}
          // className="w-32 h-32"
          />
          <div className="flex flex-col gap-1 w-full font-bold md:text-2xl lg:text-xl text-sm px-3 text-center md:text-left">
            <h1>डिजिटल शिक्षा तथा रोज़गार विकास संस्थान</h1>
            <h1>Institute of Digital Education & Employment Development, INDIA</h1>
            <h1 className="font-semibold md:text-xl text-sm w-full">
              AN ISO 9001:2015 CERTIFIED INSTITUTE
            </h1>
          </div>
        </div>

        <h1 className="text-4xl font-bold text-center my-6">Student-Center Login</h1>
        <div className="w-full bg-white  rounded-lg md:w-1/3 xl:w-1/3">
          <div className="w-full p-4 sm:p-12.5 xl:p-17.5">
            <form>
              <div className="mb-4">
                <label className="mb-2.5 block font-medium text-black dark:text-white">
                  Email
                </label>
                <div className="relative">
                  <input
                    type="email"
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
                    type="password"
                    placeholder="password"
                    className="md:w-11/12 w-full xl:w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-4 outline-none focus:border-primary focus-visible:shadow-none"
                  />

                </div>
              </div>

              <div className="mb-5">
                <input
                  type="submit"
                  value="Sign In"
                  className="w-full cursor-pointer rounded-lg border border-primary bg-sdmis-primary-600 p-4 text-white transition hover:bg-opacity-90"
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