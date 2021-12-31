import { useState } from "react/cjs/react.development";
import * as Styled from "./Pagination.styled";
import PaginationItem from "./PaginationItem/PaginationItem";

const Pagination = (props) => {
  const [currentPage, setCurrentPage] = useState(1);
  const pages = useState(Math.round(props.dataLimit * props.pageLimit / props.dataLimit));

  const nextPageHandler = () => {
    setCurrentPage((prevPageState) => prevPageState + 1);
  };
  const prevPageHandler = () => {
    setCurrentPage((prevPageState) => prevPageState - 1);
  };
  const changePage = (e) => {
    const pageNumber = Number(e.target.textContent);
    if (pageNumber) {
      setCurrentPage(pageNumber);
    } else {
      console.log(`It's not a valid nuber`);
      return false;
    }
  };
  const getPaginatedData = () => {
    //ex: page 2,limit items 10  20 - 10 = 10 will start from 10th item;
    const startIndex = currentPage * props.dataLimit - props.dataLimit; 
    const endIndex = startIndex + props.dataLimit;
    return props.data.slice(startIndex, endIndex);
  };
  const getPaginationGroup = () => {
    let start =
      Math.floor((currentPage - 1) / props.pageLimit) * props.pageLimit;

    // will return array  with numbers from start to the limit ex limit 10 Array(10)
    //.fill() => [undefined,undefined..undefined] => .map() if start 0 => [1,2,3,4,5,6,7,8,9,10]
    return new Array(props.pageLimit)
      .fill()
      .map((_, index) => start + index + 1);
  };


  const paginationItems = getPaginatedData().map((item,index) => (
    <PaginationItem key={index} data={item} />
  ));

  const PaginationButtons = getPaginationGroup().map((item, index) => (
    <Styled.PaginationItemButton
      key={index}
      onClick={changePage}
      active={currentPage === item ? true : false}

    >{index + 1}</Styled.PaginationItemButton>
  ));


  return (
    <>
      <h2>{props.title}</h2>
      <p>You can change how much pages to be displayed and items per page</p>
      <Styled.ItemsContainer>{paginationItems}</Styled.ItemsContainer>
      <Styled.PaginationWrapper>
        <Styled.Prev
          onClick={prevPageHandler}
          disabled={currentPage === 1 ? true : false}
        >
          Prev
        </Styled.Prev>
        {PaginationButtons}

        <Styled.Next
          onClick={nextPageHandler}
          disabled={currentPage === pages[0] ? true : false}
        >
          Next
        </Styled.Next>
      </Styled.PaginationWrapper>
    </>
  );
};

export default Pagination;
