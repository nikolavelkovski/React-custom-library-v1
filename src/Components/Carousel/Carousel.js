import { useCallback, useEffect } from "react";
import { useState } from "react/cjs/react.development";
import * as Styled from "./Carousel.styled";
import CarouselItem from "./CarouselItem/CarouselItem";

const Carousel = (props) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slidesLength = props.items.length;
  const [showArrowControls, showDotControls] = [...props.showArrowsDotControls];

  // change on rightArrow
  const nextSlideHandler = useCallback(() => {
    setCurrentSlide(currentSlide === slidesLength - 1 ? 0 : currentSlide + 1);
  }, [currentSlide, slidesLength]);
  //change on leftArrow
  const prevSlideHandler = useCallback(() => {
    setCurrentSlide(currentSlide === 0 ? slidesLength - 1 : currentSlide - 1);
  }, [currentSlide, slidesLength]);
  //change on dots
  const showSlidenumber = (index) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    let timer;
    if (props.autoSlides) {
      timer = setTimeout(() => {
        props.direction === "right" && nextSlideHandler();
        props.direction === "left" && prevSlideHandler();
        //if no direction specified
        !props.direction && nextSlideHandler();
      }, props.time || 5000);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [
    currentSlide,
    props.time,
    props.autoSlides,
    props.direction,
    nextSlideHandler,
    prevSlideHandler,
  ]);

  // on left,right arrow key press
  useEffect(() => {
    const handleKeyDown = document.addEventListener("keydown", function (e) {
      e.key === "ArrowLeft" && prevSlideHandler();
      e.key === "ArrowRight" && nextSlideHandler();
    });

    return () => {
      document.removeEventListener("keydown",handleKeyDown);
    }
  },[prevSlideHandler,nextSlideHandler])
 

  const carouselItems = props.items.map((item, index) => (
    <CarouselItem
      key={index}
      slide={item.image}
      showSlide={index === currentSlide ? true : false}
    />
  ));

  const carouselControlDots = props.items.map((item, index) => (
    <Styled.DotButton
      key={index}
      onClick={() => showSlidenumber(index)}
      activeSlide={index === currentSlide ? true : false}
    />
  ));
  return (
    <Styled.Slider>
      <Styled.CarouselWrapper>{carouselItems}</Styled.CarouselWrapper>
      {showArrowControls && (
        <Styled.LeftArrow onClick={prevSlideHandler}> &larr; </Styled.LeftArrow>
      )}
      {showArrowControls && (
        <Styled.RightArrow onClick={nextSlideHandler}>&rarr;</Styled.RightArrow>
      )}
      {showDotControls && (
        <Styled.DotsContainer>{carouselControlDots}</Styled.DotsContainer>
      )}
    </Styled.Slider>
  );
};

export default Carousel;
