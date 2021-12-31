import { useState } from "react/cjs/react.development";
import * as Styled from "./Tooltip.styled";

const Tooltip = (props) => {
  const [isVisible, setIsVisible] = useState(false);

  const showTooltipHandler = () => {
    setIsVisible(true);
  };

  const hideTooltipHandler = () => {
    setIsVisible(false);
  };

  return (
    <Styled.TooltipWrapper
      onMouseEnter={showTooltipHandler}
      onMouseLeave={hideTooltipHandler}
    >
      {props.children}

      {isVisible && (
        <Styled.Tooltip
          direction={props.direction}
          background={props.background}
          textColor={props.color}
        >
          {props.content}
        </Styled.Tooltip>
      )}
    </Styled.TooltipWrapper>
  );
};

export default Tooltip;
