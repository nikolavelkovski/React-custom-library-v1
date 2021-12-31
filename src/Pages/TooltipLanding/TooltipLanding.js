import Tooltip from "../../Components/Tooltip/Tooltip";
import * as Styled from "./TooltipLanding.styled";
const TooltipLanding = () => {
  return (
    <>
      <h2>Tooltips examples:</h2>
      <p>
        The tooltips can be placed
        right,left,top(left,right,center),bottom(right,left,center) also can
        change the background and font color
      </p>
      <Styled.TooltipsWrapper>
        <Tooltip
          content="Hello am left tooltip"
          direction="left"
          background="green"
          color="white"
        >
          <p>Left side Tooltip</p>
        </Tooltip>
        <Tooltip
          content="Hello am right tooltip"
          direction="right"
          background="red"
          color="white"
        >
          <p>Right side Tooltip</p>
        </Tooltip>
        <Tooltip
          content="Hello am top tooltip"
          direction="top"
          background="yellow"
          color="black"
        >
          <p>Top side Tooltip</p>
        </Tooltip>
        <Tooltip
          content="Hello am bottom tooltip"
          direction="bottom"
          background="blue"
          color="white"
        >
          <p>Bottom side Tooltip</p>
        </Tooltip>
        <Tooltip
          content="Hello am top-right tooltip"
          direction="top-right"
          background="pink"
          color="white"
        >
          <p>Top-right side Tooltip</p>
        </Tooltip>
        <Tooltip
          content="Hello am top-left tooltip"
          direction="top-left"
          background="purple"
          color="white"
        >
          <p>Top-left side Tooltip</p>
        </Tooltip>
        <Tooltip
          content="Hello am bottom-right tooltip"
          direction="bottom-right"
        >
          <p>Bottom-right side Tooltip</p>
        </Tooltip>
        <Tooltip content="Hello am bottom-left tooltip" direction="bottom-left">
          <p>Bottom-left side Tooltip</p>
        </Tooltip>
      </Styled.TooltipsWrapper>
    </>
  );
};

export default TooltipLanding;
