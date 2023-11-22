import { useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';

const AdminLogin = () => {
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e:any) => {
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
      router.push('/admin-dashboard');
    } else {
      // Invalid credentials
      alert('Invalid email or password. Please try again.');
    }
  };

  return (
    <>
      <main className=" text-black  flex flex-col items-center justify-start min-h-screen">
        <Image src="/images/backdrop.webp" priority={true} alt="bg" width={2000} height={2000} className='object-cover h-full absolute left-0 -z-10' />
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

        <div className="max-w-md bg-white shadow-lg px-10 pb-8 pt-6 rounded-lg text-black mx-auto">
          <form className="space-y-6">
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
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="block w-full rounded-md px-2 py-1.5 text-gray-900 border border-sdmis-neutral-300 sm:text-sm"
                />
              </div>
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium leading-6">
                Password
              </label>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="block w-full rounded-md px-2 py-1.5 text-gray-900 border border-sdmis-neutral-300 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <button
                type="submit"
                onClick={handleLogin}
                className="flex mt-8 w-full justify-center rounded-md bg-yellow-900 hover:bg-sdmis-primary-100 hover:text-black px-3 py-1.5 text-sm font-semibold text-white shadow-sm"
              >
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
  );
};

export default AdminLogin;
