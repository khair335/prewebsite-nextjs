import { Container } from "./container";

export const Foundation = () => {
    return (
      <Container>
        <div className="pt-16 pb-16">
                <div className="text-center justify-center items-center md:text-left md:flex ">
                 <h2 className="text-gradient mb-4 text-2xl font-semibold md:mb-7 md:text-4xl">
                     Built on a foundation of fast, efficient testing
                </h2>
                </div>
            <div className="h-[48rem] overflow-hidden md:h-auto md:overflow-auto">
            <div className="flex snap-x snap-mandatory gap-6 overflow-x-auto px-8 justify-center pb-12 md:flex-wrap md:overflow-hidden">
              <div className="relative flex w-full shrink-0 snap-center flex-col justify-end overflow-hidden rounded-[4.8rem] border border-transparent-white bg-background p-8 text-left md:max-w-[calc(30%-12px)] md:basis-[calc(66.66%-12px)] md:p-9">
              <img src="/img/shopify.svg" alt="Shopify Logo" />
                <p className="mb-4 text-2xl">Best practices, built in.</p>
                <p className="text-xs text-grey">
                Fly through your tasks with rapid-fire keyboard shortcuts for
                everything. Literally everything.
               </p>
             </div>
             <div className="relative flex w-full shrink-0 snap-center flex-col justify-end overflow-hidden rounded-[4.8rem] border border-transparent-white bg-background yellow p-8 text-left md:basis-[calc(30%-12px)] md:p-9">
              <img src="/img/graph.svg" alt="Hero image" />
              <p className="mb-4 text-2xl">HTML/CSS</p>
              <p className="text-xs text-grey">
                 Built for speed with 50ms interactions and real-time sync.
              </p>
             </div>
             <div className="group relative flex w-full shrink-0 snap-center flex-col justify-end overflow-hidden rounded-[4.8rem] border border-transparent-white bg-background p-8 text-left md:basis-[calc(30%-12px)] md:p-9">
             <img src="/img/screen3.png" alt="Hero image" />
               <p className="mb-4 text-2xl">Javascript</p>
               <p className="text-xs text-grey">
                Comes with built-in workflows that create focus and routine.
              </p>
        </div>
      </div>
    </div>
 </div>
 </Container>
    );
};