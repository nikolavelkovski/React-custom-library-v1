import { useState } from "react/cjs/react.development";
import * as Styled from "./AccordionItem.styled";

const AccordionItem = (props) => {
    const [showContent, setShowContent] = useState(false);


    const contentHandler = () => {
        setShowContent(!showContent);
    }


    const activeClass = showContent ? "active" : "";
  return (
    <Styled.AccordionItem onClick = {contentHandler} className= {activeClass} background = {props.background} headingFontColor = {props.headingFontColor}> 
    {/*  {props.children} - to be able to attach it to any code */}
      <p>{props.number}</p>
      <p>{props.title}</p>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24px"
        viewBox="0 0 24 24"
        width="24px"
        fill="#000000"
      >
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z" />
      </svg>
      <Styled.AccordionItemContent  className= {activeClass} >
          <p>{props.message}</p>
      </Styled.AccordionItemContent>
    </Styled.AccordionItem>
  );
};

export default AccordionItem;
