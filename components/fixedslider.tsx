import React from 'react';
import Head from 'next/head';
import { Container } from './container';

export const Fixedslider = () => {
  return (
    <Container>
      <div className="flex flex-col lg:flex-row pt-16 pb-16">
        <div className="sticky top-10 self-start text-md  lg:max-w-[380px] w-full bg-blue-100 p-1 sm:p-4 overflow-auto bg-black z-[49]">
          <h2 className="text-2xl font-semibold md:mb-7 md:text-4xl leading-[36px]">Storefronts that convert.</h2>
          <p className="text-xl text-grey-dark">Get a brid's eye view our customizable deashboard. Stay on top of things! Collect, curate, and annotate data. Train models and evaluate. Repeat.</p>

        </div>


        <div className="flex-1 text-md min-h-screen  w-full   bg-green-100 p-1 sm:p-4 overflow-auto">
          <div className="mb-8">
            <p className="mb-4 text-xl">Best practices, built in. <span className="text-grey">
              Static analysis that pushes your performance forward.
            </span></p>

            <div className='relative max-w-[600px] min-w-[600px] w-full'>
              <p className='text-white absolute top-[2px]  sm:top-2 left-4 sm:left-[29px] text-[8px] sm:text-[14px]'>Sanity</p>
              <p className='text-white absolute top-[39px] sm:top-[78px]  left-[11px] sm:left-[26px] text-[8px] sm:text-[14px]'>Shopify</p>
              <p className='text-white absolute top-[76px] sm:top-[150px] left-[10px] sm:left-[24px] text-[8px] sm:text-[14px]'>BigCommerce</p>
              <p className='text-white absolute top-[113px] sm:top-[222px] left-[6px] text-[6px] sm:text-[12px]'>Salesforce Commerce</p>
              <img className='max-w-[30px] sm:max-w-[56px]  w-full  absolute top-[47px] sm:top-[98px] right-[139px] sm:right-[277px]' src="/img/play.svg" alt="play-img" />
              <img className='max-w-[600px] min-w-[600px] w-full' src="/img/solution.svg" alt="Hero image" />
            </div>
          </div>

          <div className="mb-8">
            <p className="mb-4 text-xl">Best practices, built in. <span className="text-grey">
              Static analysis that pushes your performance forward.
            </span></p>
            <div className='relative w-full '>

              <img src="/img/speed.png" alt="Hero image" />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};



