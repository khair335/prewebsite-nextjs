import AccordionItem from "./AccordionItem";
import { Container } from "./container";

export const Accordion = () => {
  return (
    <Container>
    <div>
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
