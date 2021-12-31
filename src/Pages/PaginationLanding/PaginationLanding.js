import { useEffect, useState } from 'react/cjs/react.development';
import Pagination from '../../Components/Pagination/Pagination';


const url = 'https://jsonplaceholder.typicode.com/posts'

const PaginationLanding = () => {
const [posts, setPosts] = useState([]);
const [error, setError] = useState('');


useEffect(() => {
    fetch(url).then((response) => {
        if(response.ok) return response.json();
        throw new Error("Something went wrong while requesting posts");
    })
    .then((posts) => setPosts(posts))
    .catch((error) => setError(error.message))
},[])
 
if(error) return <h1>{error}</h1>

const calculateDataPageLimit = (pageLimit, dataLimit) => {
    if(pageLimit * dataLimit >= posts.length){
        return [pageLimit = 1, dataLimit = posts.length]
    }
    else return [pageLimit, dataLimit];
}

const [pageLimitNum, dataLimitNum] = calculateDataPageLimit(5,12); // insert how much pages to be displayed and items per page
return (
    <>
        {posts.length > 0 ? (
            <Pagination data = {posts} title = "Posts" pageLimit = {pageLimitNum} dataLimit = {dataLimitNum} />
        ) : (
            <h1>No posts to display!</h1>
        )}
    </>
)

}

export default PaginationLanding