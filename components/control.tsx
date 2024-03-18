import { Button } from "./button";
import { Container } from "./container";
import { ChevronIcon } from "./icons/chevron";

export const Control = () => {
  return (
    <Container>
      <div className="pt-16 pb-16">
              <div className="text-center justify-center items-center md:text-left md:flex md:flex-col">
              <h2 className="text-gradient mb-4 text-2xl font-semibold md:mb-7 md:text-4xl">
               Take control over your conversion rate.
              </h2>
              <p className="mb-12 max-w-[68rem] text-lg text-grey-dark md:ml-4 md:mb-7 md:text-md">
                Get in touch, integrate, execute.
                </p>
          <div className="relative text-center min-h-[350px] w-full justify-center">
              <div className="bottom-15 flex w-full flex-col items-center">
              <img src="/img/graphmetrics.png" className="w-1/2" alt="Graph image" />
              </div>
              <Button href="/" variant="primary" size="large">
        Get started
        <ChevronIcon />
      </Button>
          </div>
        </div>
      </div>
      </Container>
  );
};
