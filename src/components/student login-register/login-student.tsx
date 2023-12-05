import Link from "next/link";

const StudentLogin = () => {
  return (
    <>
      <div className="w-full bg-white  rounded-lg md:w-1/3 xl:w-1/3">
        <div className="w-full px-7 py-5 sm:p-15 xl:p-18">
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
    </>
  );

}

export default StudentLogin;



