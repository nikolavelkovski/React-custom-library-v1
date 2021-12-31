import * as Styled from "./CarouselItem.styled"


const CarouselItem = (props) => {


    return (
        <>
        <Styled.ItemWrapper show = {props.showSlide}>  
           <img src= {props.slide} alt="test" />   {/*  {props.children} - to be able to attach it to any code */}
        </Styled.ItemWrapper>
        </>

    );
}


export default CarouselItem;