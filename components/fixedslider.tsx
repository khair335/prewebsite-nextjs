import React from 'react';
import Head from 'next/head';
import { Container } from './container';

export const Fixedslider = () => {
    return (
        <Container>
          <div className="flex pt-16 pb-16">
            <div className="sticky top-10 self-start text-md w-1/3 bg-blue-100 p-4 overflow-auto">
              <h2 className="text-2xl font-semibold md:mb-7 md:text-4xl">Storefronts that convert.</h2>
              <p className="text-xl">Get a brid's eye view our customizable deashboard. Stay on top of things! Collect, curate, and annotate data. Train models and evaluate. Repeat.</p>
             
            </div>
    
       
            <div className="flex-1 text-md min-h-screen w-1/2 bg-green-100 p-4 overflow-auto">
         <div className="mb-8">
            <p className="mb-4 text-xl">Best practices, built in. <span className="text-grey">
                Static analysis that pushes your performance forward.
               </span></p>
              <img src="/img/solution.svg" alt="Hero image" />
              </div>

              <div className="mb-8">
              <p className="mb-4 text-xl">Best practices, built in. <span className="text-grey">
                Static analysis that pushes your performance forward.
               </span></p>
              <img src="/img/speed.png" alt="Hero image" />
              </div>
            </div>
          </div>
          </Container>
      );
    };
    
    

