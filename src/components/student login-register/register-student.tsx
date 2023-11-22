const StudentRegister = () => {
  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-3" action="#" method="POST">
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
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
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
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
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                Confirm Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="confirm password"
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
                className="flex w-full justify-center rounded-md bg-sdmis-primary-600 hover:bg-sdmis-primary-300 hover:text-black px-3 py-1.5 text-sm font-semibold  text-white shadow-sm ">
                Sign in
              </button>
            </div>
          </form>

          <p className="mt-5 text-center text-sm">
            <a href="#" className="font-semibold hover:text-sdmis-neutral-500">
              Forgot Password?
            </a>
          </p>
        </div>
      </div>
    </>
  )
}

export default StudentRegister;

