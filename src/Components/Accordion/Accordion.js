import * as Styled from "./Accordion.styled";
import AccordionItem from "./AccordionItem/AccordionItem";

const Accordion = (props) => {
  const accordionItems = props.accordionItems.map((item, index) => (
    <AccordionItem
      key={item.id}
      number={"0" + (index + 1)}
      title={item.title}
      message={item.message}
    //   background="orange"
    //   headingFontColor="orange"
    />
  ));

  return <Styled.Accordion>{accordionItems}</Styled.Accordion>;
};

export default Accordion;
