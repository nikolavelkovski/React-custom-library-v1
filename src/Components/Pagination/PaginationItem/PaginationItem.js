import * as Styled from "./PaginationItem.styled";

const PaginationItem = (props) => {
  const { id: postId, title : postTitle,body: postBody } = props.data;
  return ( // {props.children} - to be able to attach it to any code
      <Styled.Post>
        <Styled.PostId>{postId}</Styled.PostId>
        <h2>{postTitle}</h2>
        <p>{postBody}</p>
      </Styled.Post>
  );
};

export default PaginationItem;
