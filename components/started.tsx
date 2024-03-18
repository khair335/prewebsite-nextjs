import Image from "next/image";
import { Button } from "./button";
import { Container } from "./container";

export const Started = () => {
    return (
        <Container>
        <div className="pt-16 pb-16">
                <div className="flex flex-col flex-ctext-center justify-center items-center">
                <h2 className="text-gradient mb-4 text-2xl font-semibold md:mb-7 md:text-4xl">
                 THE NEXT STEPS
                </h2>
        
<ol className="flex items-center w-full text-sm font-medium text-center text-gray-500 dark:text-gray-400 sm:text-base">
    <li className="flex md:w-full items-center text-blue-600 dark:text-blue-500 sm:after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block dark:after:border-gray-700">
        <span className="flex flex-col items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500">
            <svg className="w-1/5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
            </svg>
            <div className="flex flex-col">
            Step 1 <span>Info</span>
            </div>
        </span>
    </li>
    <li className="flex md:w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block dark:after:border-gray-700">
    <span className="flex flex-col items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500">
            <svg className="w-1/5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
            </svg>
            <div className="flex flex-col">
            Step 2 <span>Info</span>
            </div>
        </span>
    </li>
    <li className="flex items-center">
    <span className="flex flex-col items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500">
            <svg className="w-1/5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
            </svg>
            <div className="flex flex-col">
            Step 3 <span>Info</span>
            </div>
        </span>
    </li>
</ol>



                <img src="/img/graphmetrics.png" className="w-1/2" alt="Graph image" />
            
        <div className="flex pt-4 lg:pt-10 px-[20px] py-[56px] items-center lg:container lg:px-20 mx-auto">
            <div className="px-[0px] lg:px-[2 80px]">
                <p className="text-md text-primary-text">
                    Get a brid's eye view our customizable deashboard. Stay on top of things!
                    Collect, curate, and annotate data. Train models and evaluate. Repeat.
                </p>
                
                <div className="flex w-full justify-center pt-8 gap-x-6">
                    <Button variant="primary" size="large">
                        Book a Demo Call Now
                    </Button>
                </div>
            </div>
            </div>
         </div>
        </div>
        </Container>
    );
};