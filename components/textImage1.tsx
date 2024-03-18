import { Container } from "./container";

export const TextImage1 = () => {
    return (
        <Container>
        <div className="pt-16 pb-16">            
        <div className="flex pt-4 lg:pt-10 px-[20px] py-[56px] items-center lg:container lg:px-20 mx-auto">
            <div className="px-[0px] lg:px-[2 80px]">
            <h3 className="text-gradient mb-4 text-2xl font-semibold md:mb-7 md:text-4xl">
                 Know your target group. 
                </h3>
                <p className="text-xl text-primary-text">
                    Let your customers know you "get them" without compromising speed.
                </p>
            </div>
            
            <div className="relative min-h-[350px] w-full justify-center">
                <div className="bottom-15 flex w-full flex-col items-center">
                <img src="/img/screen1.png" alt="Hero image" />
                </div>
            </div>
        </div>
        </div>
        </Container>
    );
};