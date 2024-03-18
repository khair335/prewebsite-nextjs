import { VercelLogo } from "@/app/logos/vercel";
import { Container } from "./container";

export const PromotionDataEngine = () => {
    return (
      <Container>
        <div className="pt-16 pb-16">    
            <div className="h-[48rem] overflow-hidden md:h-auto md:overflow-auto">
            <div className="flex snap-x snap-mandatory gap-6 overflow-x-auto px-8 justify-center pb-12 md:flex-wrap md:overflow-hidden">
              <div className="relative flex w-full shrink-0 snap-center flex-col justify-end overflow-hidden rounded-[0.8rem] border border-transparent-white bg-background p-8 text-left md:max-w-[calc(24%-12px)] md:basis-[calc(66.66%-12px)] md:p-9">
                <p className="text-md">34% increases</p>
                <p className="text-md text-grey">
                in site conversions.
               </p>
               <div className="w-1/2">
              <VercelLogo />
              </div>
             </div>
             <div className="relative flex w-full shrink-0 snap-center flex-col justify-end overflow-hidden rounded-[0.8rem] border border-transparent-white bg-background yellow p-8 text-left md:basis-[calc(24%-12px)] md:p-9">
             <p className="text-md">6x faster</p>
                <p className="text-md text-grey">
                to build + deploy.
               </p>
              <div className="w-1/2">
              <VercelLogo />
              </div>
             </div>
             <div className="relative flex w-full shrink-0 snap-center flex-col justify-end overflow-hidden rounded-[0.8rem] border border-transparent-white bg-background yellow p-8 text-left md:basis-[calc(24%-12px)] md:p-9">
             <p className="text-md">1 year</p>
                <p className="text-md text-grey">
                of development saved.
               </p>
              <div className="w-1/2">
              <VercelLogo />
              </div>
             </div>
             <div className="group relative flex w-full shrink-0 snap-center flex-col justify-end overflow-hidden rounded-[0.8rem] border border-transparent-white bg-background p-8 text-left md:basis-[calc(24%-12px)] md:p-9">
             <p className="text-md">60% increase</p>
                <p className="text-md text-grey">
                in page speeds.
               </p>
              <div className="w-1/2">
              <VercelLogo />
              </div>
        </div>
      </div>
    </div>
        </div>
        </Container>
    );
};