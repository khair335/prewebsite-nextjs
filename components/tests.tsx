import { Container } from "./container";

export const Tests = () => {
    return (
      <Container>
        <div className="pt-16 pb-16">
                <div className="text-center justify-center items-center md:text-center md:flex ">
                 <h2 className="text-gradient mb-4 text-2xl font-semibold md:mb-7 md:text-4xl">
                     Tests that makes your conversion rate
                     <br />as happy as your customers
                </h2>
                </div>
            <div className="overflow-hidden md:h-auto md:overflow-auto">
            <div className="grid snap-x snap-mandatory gap-6 overflow-x-auto px-8 justify-center pb-12 md:flex-wrap md:overflow-hidden md:grid-cols-2">
              <div className="relative flex w-full shrink-0 snap-center flex-col justify-start overflow-hidden rounded-[0.8rem] border border-transparent-white bg-background p-8 text-left md:p-9">
                <p className="mb-4 text-xl">Best practices, built in. <span className="text-grey">
                Static analysis that pushes your performance forward.
               </span></p>
               <img src="/img/window.svg" alt="Window image" />
             </div>
             <div className="relative flex w-full shrink-0 snap-center flex-col justify-start overflow-hidden rounded-[0.8rem] border border-transparent-white bg-background yellow p-8 text-left md:p-9">
             <p className="mb-4 text-xl">Personalize for your audience. <span className="text-grey">
                Pre-render versions of your site with Middleware.
               </span></p>
              <img src="/img/personalize.svg" alt="Personalize image" />
             </div>
             <div className="relative flex w-full shrink-0 snap-center flex-col justify-start overflow-hidden rounded-[0.8rem] border border-transparent-white bg-background yellow p-8 text-left md:p-9">
             <p className="mb-4 text-xl">Get experimental. <span className="text-grey">
                A/B test without degrading CLS, with Edge Config.
               </span></p>
              <img src="/img/ab-testing.svg" alt="AB image" />
             </div>
             <div className="group relative flex w-full shrink-0 snap-center flex-col justify-start overflow-hidden rounded-[0.8rem] border border-transparent-white bg-background p-8 text-left md:p-9">
             <p className="mb-4 text-xl">Oberserve. <span className="text-grey">
                Tools to measure real user experience on the devices they're using.
               </span></p>
              <img src="/img/tracking.svg" alt="Tracking image" />
        </div>
      </div>
    </div>
 </div>
 </Container>
    );
};
