const StudentRegister = () => {
  return (
    <>
      <div className="w-full bg-white xl:mx-0 md:mx-0 mx-5 rounded-lg md:w-1/3 xl:w-1/3">
        <div className="w-full px-7 pt-5  xl:px-8 xl:pt-5">
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
            <div className="mb-6">
              <label className="mb-2.5 block font-medium text-black dark:text-white">
                Confirm Password
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
                value="Sign up"
                className="w-full cursor-pointer rounded-lg  bg-sdmis-primary-600 p-4 text-white transition hover:bg-opacity-90"
              />
            </div>

           
          </form>
        </div>
      </div>
    </>
  )
}

export default StudentRegister;

