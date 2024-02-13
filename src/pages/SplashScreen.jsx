import React from 'react';

const SplashScreen = () => (
  <section className="absolute bg-splash_bg bg-cover bg-center h-screen w-screen">
    <section className="bg-[#111111]/60 w-full h-full flex justify-center items-center">
      <div className="lg:w-auto text-center flex flex-col justify-center items-center gap-6">
        <header className="px-4">
          <h1 className="font-semibold mg:w-[10ch] capitalize leading-[3.5rem] lg:leading-[5rem] text-primary-orange text-5xl lg:text-7xl">
            Begin your mentorship
            {' '}
            <br className="hidded lg:visible" />
            {' '}
            journey
            today
          </h1>
          <p className="text-white text-base mt-8">
            Connect with experienced mentors
          </p>
        </header>
        <div className="flex mt-4 justify-center items-center gap-4">
          <button
            type="button"
            className="py-3 lg:py-3 px-8 font-medium bg-primary-blue text-white rounded"
          >
            Sign In
          </button>
          <button
            type="button"
            className="py-3 lg:py-3 px-8 font-medium bg-primary-blue text-white rounded"
          >
            Sign up
          </button>
        </div>
      </div>
    </section>
  </section>
);

export default SplashScreen;
