import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
const StudentLogin = () => {
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
      router.push('/admin-dashboard');
    } else {
      // Invalid credentials
      alert('Invalid email or password. Please try again.');
    }
  };
  return (
    <>
      <div className="w-full px-12">
      <h1 className="text-gray-800 font-bold text-2xl mb-7">Sign In Student</h1>

        <form>
        
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
    </>
  );

}

export default StudentLogin;



