import Image from "next/image";
import { Button } from "./button";
import { Container } from "./container";
import step1 from "../public/img/step1.png";
import step2 from "../public/img/step2.png";
import step3 from "../public/img/step3.png";
import './started.css'

export const Started = () => {
    return (
        <Container>
            <div className="pt-16 pb-16">
                <div className="flex flex-col flex-ctext-center justify-center items-center">
                    <h2 className="text-gradient mb-4 text-2xl font-semibold md:mb-16 md:text-[48px] uppercase">
                        THE NEXT STEPS
                    </h2>


                    <div className='flex flex-col sm:flex-row w-full gap-y-[100px] sm:gap-y-0 justify-between items-start relative'>
                        <div className='absolute  hidden top-[14px] w-full h-[1px] px-[196px] sm:flex justify-center items-center gap-[112px]'>
                            <div className=' w-1/2 h-[1px] bg-[#a5d708]'></div>
                            <div className=' w-1/2 h-[1px] bg-[#a5d708]'></div>
                        </div>
                        <div className="flex flex-col items-center max-w-full sm:max-w-[280px] w-full   sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500">
                            <Image
                                src={step1}
                                width={32}
                                height={32}
                                alt="step1"
                                className=''
                            />
                            <p className="text-[#a5d708] text-[16px] font-bold uppercase pt-2">
                                Step 1
                            </p>
                            <p className='py-4 text-lg text-nowrap'>Choose a date</p>
                            <p className='text-[16px] font-medium text-center'>Click on the button and select a suitable date in our calendar
                            </p>
                        </div>
                        {/* <div className='absolute max-w-[200px] w-full h-[1px] bg-[#a5d708]'></div> */}
                        <div className="flex flex-col items-center max-w-full sm:max-w-[280px] w-full   sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500">
                            <Image
                                src={step1}
                                width={32}
                                height={32}
                                alt="step1"
                                className=''
                            />
                            <p className="text-[#a5d708] text-[16px] font-bold uppercase pt-2">
                                Step 2
                            </p>
                            <p className='py-4 text-lg text-nowrap'>Choose a date</p>
                            <p className='text-[16px] font-medium text-center'>Click on the button and select a suitable date in our calendar
                            </p>
                        </div>
                        <div className="flex flex-col items-center max-w-full sm:max-w-[280px] w-full   sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500">
                            <Image
                                src={step1}
                                width={32}
                                height={32}
                                alt="step1"
                                className=''
                            />
                            <p className="text-[#a5d708] text-[16px] font-bold uppercase pt-2">
                                Step 3
                            </p>
                            <p className='py-4 text-lg text-nowrap'>Choose a date</p>
                            <p className='text-[16px] font-medium text-center'>Click on the button and select a suitable date in our calendar
                            </p>
                        </div>
                    </div>




                    {/* <div className='w-full mx-auto my-[80px] flex justify-center items-center'>
                        <img src="/img/graphmetrics.png" className="w-1/2" alt="Graph image" />
                    </div> */}



                    <div className='max-auto flex justify-center items-center mt-[200px]'>
                        <div className='relative max-w-[580px] w-full  '>
                            <div className='banner_glow '></div>
                            <img src="/img/blockLine.png" className="" alt="Graph image" />
                            <img src="/img/logo banner-p-500.png" className="max-w-[160px] flex justify-center items-center mx-auto my-auto w-full absolute top-0 left-0 right-0 bottom-0" alt="Graph image" />
                        </div>
                    </div>

                    <div className='max-w-[570px] w-full text-[56px] font-bold leading-[52px] text-center'>
                        BECOME A <span className='text-[#c1fe00]'>WORLD-CLASS</span> MARKETER
                    </div>
                    <button className='max-w-[335px] h-[64px] bg-[#c1fe00] w-full rounded-full text-black my-16 font-bold text-[18px] hover:bg-white mx-auto'>
                        BOOK AN APPOINTMENT NOW

                    </button>
                </div>
            </div>
        </Container>
    );
};