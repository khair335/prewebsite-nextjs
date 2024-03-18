import { Container } from "./container"

export const Boxes = () => {
  return (
  <div className="text-white pt-16 pb-16">
    <Container>
      <div className="text-center justify-center items-center md:text-left md:flex">
        <h2 className="text-gradient mb-4 text-2xl font-semibold md:mb-7 md:text-4xl">
        What is Metricslink? Delete
        </h2>
        <p className="mb-12 max-w-[68rem] text-lg text-grey-dark md:ml-4 md:mb-7 md:text-xl">
          CRO Agency with an data driven engine for D2C & B2B Brands.
        </p>
      </div>
    <div className="overflow-hidden md:h-auto md:overflow-auto">
      <div className="grid snap-x snap-mandatory gap-6 overflow-x-auto px-8 justify-center pb-12 md:grid-cols-3 md:overflow-hidden">
        <div className="relative flex w-full shrink-0 snap-center flex-col justify-end overflow-hidden rounded-[0.8rem] border border-transparent-white bg-background text-left md:basis-[calc(66.66%-12px)] md:p-2">
        <img src="/img/graphmetrics.png" alt="Hero image" className="w-full" />
         <div className="p-6 md:p-6">
          <p className="mb-4 leading-snug text-2xl">Usability- and User Expierence</p>
          <p className="text-md text-primary-text">
            Fly through your tasks with rapid-fire keyboard shortcuts for
            everything. Literally everything.
          </p>
          </div>
        </div>
        <div className="relative flex w-full shrink-0 snap-center flex-col justify-end overflow-hidden rounded-[0.8rem] border border-transparent-white bg-background yellow text-left md:basis-[calc(30%-12px)]">
          <div className="dark:bg-black bg-white  dark:bg-grid-small-white/[0.2] bg-grid-small-black/[0.2] md:p-2">
          <img src="/img/funnel.png" alt="Hero image" className="w-1/2 m-auto box-shadow"/>
          </div>
          <div className="p-6 md:p-6">
          <p className="mb-4 leading-snug text-2xl">Funnel Analysis & Optimization</p>
          <p className="text-md text-primary-text">
            Built for speed with 50ms interactions and real-time sync.
          </p>
          </div>
        </div>
        <div className="group relative flex w-full shrink-0 snap-center flex-col justify-end overflow-hidden rounded-[0.8rem] border border-transparent-white bg-background text-left md:basis-[calc(30%-12px)] md:p-2">
        <img src="/img/speed.png" alt="Hero image" />
        <div className="p-6 md:p-6">
          <p className="mb-4 leading-snug text-2xl">Page Speed optimization</p>
          <p className="text-md text-primary-text">
            Comes with built-in workflows that create focus and routine.
          </p>
          </div>
        </div>
      </div>
    </div>
    </Container>
  </div>
  );
};