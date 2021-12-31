import * as Styled from "./../../Components/Grid/Grid.styled";
import * as StyledLanding from "./GridLanding.styled";

const GridLanding = () => {
  return (
    <>
      <Styled.Grid>
        <StyledLanding.Heading>HEllo am header </StyledLanding.Heading>
        <StyledLanding.Main ed="9">HEllo am main</StyledLanding.Main>
        <StyledLanding.Aside sd="9" ed="-1">
          HEllo am aside
        </StyledLanding.Aside>
        <StyledLanding.Footer>HELLO AM A FOOTER</StyledLanding.Footer>
      </Styled.Grid>
    </>
  );
};

export default GridLanding;
