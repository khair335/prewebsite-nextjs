import { Container } from "./container";

export const Clients = () => {
    return (
      <Container>
      <div className="pt-16 pb-16">
        <p className="mb-12 text-center text-lg text-white md:text-xl">
            <span className="text-primary-text">
                Powering the world's greatest upcoming brands.
            </span>
            <b className="hidden md:block" /> From next-gen startups to estate enterprises.
        </p>
  
        <div className="flex flex-wrap justify-around gap-x-6 gap-y-8 [&_svg]:max-w-[16rem] [&_svg]:basis-[calc(50%-12px)] md:[&_svg]:basis-[calc(16.66%-20px)]">
            <img src="/img/icedrop.png" alt="Hero image" className="h-[42px]" />
            <img src="/img/4minds.png" alt="Hero image" className="h-[42px]" />
        </div>
      </div>
      </Container>
    );
  };
  