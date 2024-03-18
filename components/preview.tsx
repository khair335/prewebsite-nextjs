import { Button } from "./button";
import { Container } from "./container";

export const Preview = () => {
    return (
        <Container>
        <div className="pt-16 pb-16">
                <div className="text-center justify-center items-center md:text-left md:flex">
                 <h2 className="text-gradient mb-4 text-2xl font-semibold md:mb-7 md:text-4xl">
                     The framework of choice for upcoming brands
                </h2>
                </div>
            <div className="h-[48rem] overflow-hidden md:h-auto md:overflow-auto">
            <div className="flex snap-x snap-mandatory gap-6 overflow-x-auto justify-center pb-12 md:flex-wrap md:overflow-hidden">
              <div className="relative flex w-full gap-6 shrink-0 snap-center flex-col justify-start overflow-hidden md:max-w-[calc(24%-12px)] md:basis-[calc(66.66%-12px)]">
              <img className="rounded-[0.4rem]" src="/img/nexttemplate.avif" alt="Next image" />
             </div>
             <div className="relative flex w-full gap-6 shrink-0 snap-center flex-col justify-start overflow-hidden md:max-w-[calc(24%-12px)] md:basis-[calc(66.66%-12px)]">
             <img className="rounded-[0.4rem]" src="/img/twitch.avif" alt="Next image" />
            </div>
             <div className="relative flex w-full gap-6 shrink-0 snap-center flex-col justify-start  overflow-hidden md:max-w-[calc(24%-12px)] md:basis-[calc(66.66%-12px)]">
             <img className="rounded-[0.4rem]" src="/img/nexttemplate.avif" alt="Next image" />
             <div className="relative flex gap-6 shrink-0 snap-center justify-center overflow-hidden">
             <img className="rounded-[0.4rem] md:max-w-[calc(50%-12px)]" src="/img/nexttemplate.avif" alt="Next image" />
             <img className="rounded-[0.4rem] md:max-w-[calc(50%-12px)]" src="/img/nexttemplate.avif" alt="Next image" />
             </div>
             </div>
             <div className="relative flex w-full gap-6 shrink-0 snap-center flex-col justify-start overflow-hidden md:max-w-[calc(24%-12px)] md:basis-[calc(66.66%-12px)]">
             <img className="rounded-[0.4rem]" src="/img/nexttemplate.avif" alt="Next image" />
            </div>
             </div>
         </div>
                 <div className="text-center justify-center flex-col items-center md:text-left md:flex ">
                 <h2 className="text-gradient mb-4 text-2xl font-semibold md:mb-2 md:text-2xl">
                     For performance, efficiency and developer experience.
                </h2>
                <p className="mb-12 max-w-[68rem] text-lg text-grey-dark md:ml-4 md:mb-7 md:text-xl">
                Metricslink is trusted by some of the biggest names on the web.
                </p>
                <Button variant="primary" size="large">
                        View the Metricslink Showcases
                </Button>
                </div>
        </div>
        </Container>
    );
};