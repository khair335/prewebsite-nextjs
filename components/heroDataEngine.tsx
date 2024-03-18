import { Button } from "./button";
import { Container } from "./container";

export const HeroDataEngine = () => {
    return (
        <Container>
        <div className="pt-16 pb-16">    
            <div className="flex pt-4 lg:pt-10 px-[20px] py-[56px] items-center lg:container lg:px-20 mx-auto">
            <div className="px-[0px] lg:px-[2 80px]">
            <div className="text-left items-center md:text-left md:flex ">
           <h1 className="text-gradient mb-4 text-2xl font-semibold md:mb-7 md:text-7xl">
               Data Engine 
           <br /> Storefronts that convert.
            </h1>
             </div>
            <p className="text-md text-primary-text">
                Get a brid's eye view our customizable deashboard. Stay on top of things!
                Collect, curate, and annotate data. Train models and evaluate. Repeat.
           </p>
        
             <div className="flex w-full pt-8 justify-start gap-x-6">
            <Button variant="primary" size="large">
                Search for components
            </Button>
          </div>
         </div>

        <div className="relative min-h-[350px] w-full justify-center">
        <div className="bottom-15 flex w-full flex-col items-center">
        <img src="/img/enginelines.svg" alt="Hero image" />
        </div>
            </div>
        </div>
        </div>
        </Container>
    );
};