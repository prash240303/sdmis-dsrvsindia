
import Image from "next/image"
const AdminLogin = () => {
  return (
    <>
      <main className="bg-[url('/images/backdrop.png')] bg-cover bg-center bg-no-repeat text-black  flex flex-col items-center justify-start min-h-screen">
        <div className="flex md:flex-row flex-col items-center">
          <Image
            src="/images/logo.png"
            alt="logo"
            width={128}
            height={77}
            className="w-32 h-32"
          />
          <div className="flex flex-col gap-1 w-full font-bold md:text-2xl lg:text-xl  text-base px-3 text-center  md:text-left">
            <h1>डिजिटल शिक्षा तथा रोज़गार विकास संस्थान</h1>
            <h1>
              Institute of Digital Education & Employment Development, INDIA
            </h1>
            <h1 className="font-semibold md:text-xl text-sm w-full">
              AN ISO 9001:2015 CERTIFIED INSTITUTE
            </h1>
          </div>
        </div>

        <h1 className="text-4xl font-bold text-center my-6">Admin Login</h1>


        <div className="max-w-md bg-white shadow-lg  px-10 pb-8 pt-6 rounded-lg  text-black mx-auto">
            <form className="space-y-6" action="#" method="POST">
              <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6">
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="block w-full rounded-md px-2  py-1.5 text-gray-900 border border-sdmis-neutral-300  sm:text-sm "
                  />
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-sm font-medium leading-6">
                    Password
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="block w-full rounded-md  px-2  py-1.5 text-gray-900 border border-sdmis-neutral-300  sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <button
                  type="submit"
                className="flex mt-8 w-full justify-center rounded-md bg-yellow-900 hover:bg-sdmis-primary-100 hover:text-black px-3 py-1.5 text-sm font-semibold  text-white shadow-sm ">
                Sign in Admin
              </button>
            </div>
          </form>

            <p className="mt-5 text-center text-sm">
              <a href="#" className="font-semibold hover:text-sdmis-neutral-500">
                Forgot Password?
              </a>
            </p>
          </div>
      </main>
    </>
  )
}

export default AdminLogin