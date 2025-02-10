import SingleComment from "./SingleComment";

const CommentList = ({ comments, setComments }) => {

    const handleUpdate = (id, newComment, newRate) => {
        setComments(
            comments.map((comment) =>
                comment._id === id ? { ...comment, comment: newComment, rate: newRate } : comment       //  if the id of the comment is the same as the id of the comment that was updated, update the comment, otherwise return the comment
            )
        );
    };

    const handleDelete = (id) => {
        setComments(comments.filter((comment) => comment._id !== id));                                  //  the array of comments is filtered, if the id of the comment is not the same as the id of the comment that was deleted, return the comment
    };

    if (comments.length > 0) {

        return (
            <div className="col-12 border-top border-bottom mt-4">
                {comments.map((comment) => (
                    <SingleComment key={comment._id} comment={comment} onUpdate={handleUpdate} onDelete={handleDelete}/>
                ))}
            </div>
        )
    };

}

export default CommentList;