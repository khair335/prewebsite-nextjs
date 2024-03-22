import AccordionItem from "./AccordionItem";
import { Container } from "./container";

export const Accordion = () => {
  return (
    <Container>

      <div className='w-full'>
        <div className='max-w-[82px] w-full h-[36px] uppercase text-center text-[15px] rounded-[12px] border border-[#a5d708] flex justify-center items-center font-semibold mx-auto'>

          faq
        </div>
        <p className='max-w-[400px] w-full uppercase mx-auto text-[24px] sm:text-[48px] font-bold text-center leading-[50px] mt-10'>
          FREQUENTLY
          QUESTIONS
        </p>
      </div>
      <div className='my-16'>
        <AccordionItem title="Section 1">
          Content for section 1 goes here...
        </AccordionItem>
        <AccordionItem title="Section 2">
          Content for section 2 goes here...
        </AccordionItem>
        <AccordionItem title="Section 3">
          Content for section 3 goes here...
        </AccordionItem>
      </div>
    </Container>
  );
};

export default Accordion;
