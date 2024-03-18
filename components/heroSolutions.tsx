import React from 'react';
import { Container } from './container';


export const HeroSolutions = () => {
  return (
    <Container>
    <div className="text-center pt-16 pb-16">
      <h2 className="text-gradient my-6 text-5xl font-semibold md:text-7xl">
      Performance and precision
      </h2>
      <p className="mb-12 m-auto text-lg text-grey-dark md:text-xl md:w-1/2">
      Get a brid's eye view our customizable deashboard. Stay on top of things! Collect, curate, and annotate data. Train models and evaluate. Repeat.
      </p>
      <img src="/img/enginelines.svg" alt="Hero image" />
    </div>
    </Container>
  );
};