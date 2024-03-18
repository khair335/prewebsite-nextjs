import React from 'react';
import classNames from "classnames";
import { Button } from './button';
import { ChevronIcon } from './icons/chevron';
import { Container } from './container';


export const HeroSnippets = () => {
  return (
    <Container>
    <div className="text-center">
      <h1 className={classNames("text-gradient my-6 text-6xl md:text-8xl")}>
        Metricslink is a better way
        <br /> to build products
      </h1>
      <p className={classNames("mb-12 text-lg text-primary-text md:text-xl")}>
        Meet the new standard for modern software development.
        <br /> Streamline issues, sprints, and product roadmaps.
      </p>
      <Button href="/" variant="primary" size="large">
        Get started
        <ChevronIcon />
      </Button>
      <img src="/img/hero.webp" alt="Hero image" />
    </div>
    </Container>
  );
};