import { useState, useEffect } from "react";
import AddComment from "./AddComment";
import CommentList from "./CommentList";
import Loading from "./Loading";
import ErrorMessage from "./ErrorMessage";

const token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzdkMDQ3YzdjMWUwYjAwMTUxNzIxYmEiLCJpYXQiOjE3Mzc5NzYxNjIsImV4cCI6MTczOTE4NTc2Mn0.d3aho08iLJMrdIKmjtIzwY37THFZkbrg6SkhOyCMylU`

// The CommentArea component is a functional component that takes a single prop named asin, fetches the comments for the book with the given asin, and renders the AddComment and CommentList components.
const CommentArea = ({ asin, /* book */ }) => {

    const [comments, setComments] = useState([]); // comments is the state variable that holds the comments
    const [isLoading, setIsLoading] = useState(false); // isLoading is the state variable that holds the loading state
    const [error, setError] = useState(false); // error is the state variable that holds the error state
    
    /* const selectedBook = book.find((book) => book.asin === asin); */
    
    const handleNewComment = (newComment) => {
        setComments([...comments, newComment]);
    };

    useEffect(() => {
        if (asin) {  // if asin is not null, fetch the data
            fetchData()  // fetchData is a function that fetches the data
        }
    }, [asin]// this means that the effect will be triggered only once when the component mounts});
    )

    const fetchData = () => {        
        setIsLoading(true);
        fetch(`https://striveschool-api.herokuapp.com/api/comments/${asin}`, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`Error in API call`);
                }
                return response.json()
            })
            .then((data) => {
                if (data.length > 0) {
                    setComments(data);
                    setIsLoading(false);
                    setError(false);
                } else {
                    setComments(data);
                    setIsLoading(false);
                    throw new Error("No comments available");
                }
            })
            .catch((error) => {
                setError(error.message);
                setIsLoading(false);
                console.log(error);
            });
    }






    return (
        <div className="text-center pt-4 bg-dark" style={{ marginBottom: '80px'}}>
            {isLoading && <Loading />}                      {/* if isLoading is true, render the Loading component */}
            {error && <ErrorMessage message={error} />}     {/* if error is true, render the ErrorMessage component */}
            <AddComment asin={asin} newComment={handleNewComment}/>                      {/* render the AddComment component */}
            <CommentList comments={comments} setComments={setComments}/>             {/* render the CommentList component */}
        </div>
    )
}

export default CommentArea;