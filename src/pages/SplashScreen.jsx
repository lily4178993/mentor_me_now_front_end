import React from 'react';
import { Link } from 'react-router-dom';

const SplashScreen = () => (
  <section className="absolute top-0 left-0 bg-splash_bg bg-cover bg-center h-screen w-screen">
    <section className="bg-[#111111]/60 w-full h-full flex justify-center items-center">
      <div className="lg:w-auto text-center flex flex-col justify-center items-center gap-6">
        <header className="px-4">
          <h1 className="font-semibold mg:w-[10ch] capitalize leading-[3.5rem] lg:leading-[5rem] text-primary-orange text-5xl lg:text-7xl">
            Begin your mentorship
            {' '}
            <br className="hidden lg:inline" />
            {' '}
            journey
            today
          </h1>
          <p className="text-base text-gray-200 mt-8">
            Connect with experienced mentors
          </p>
        </header>
        <div className="flex mt-4 text-gray-200 justify-center items-center gap-4">
          <Link
            to="login"
            className="py-2 lg:py-2 px-8 border-2 font-medium bg-primary-green border-primary-green text-gray-200 rounded"
          >
            Sign in
          </Link>
          <Link
            to="/sign_up"
            className="py-2 lg:py-2 px-8 font-medium bg-transparent border-2 border-primary-green text-primary-green rounded"
          >
            Create account
          </Link>
        </div>
      </div>
    </section>
  </section>
);

export default SplashScreen;
