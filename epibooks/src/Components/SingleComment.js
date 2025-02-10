import { Button } from "react-bootstrap";
import { useState } from "react";


const token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzdkMDQ3YzdjMWUwYjAwMTUxNzIxYmEiLCJpYXQiOjE3Mzc5NzYxNjIsImV4cCI6MTczOTE4NTc2Mn0.d3aho08iLJMrdIKmjtIzwY37THFZkbrg6SkhOyCMylU`


const SingleComment = ({ comment, onUpdate, onDelete}) => {

    const [isEditing, setIsEditing] = useState(false);                              // isEditing is a state variable that holds the editing state when the user clicks on the modify button
    const [editedComment, setEditedComment] = useState(comment.comment);            // editedComment is a state variable that holds the edited comment when the user modifies the comment
    const [editedRate, setEditedRate] = useState(comment.rate);                     // editedRate is a state variable that holds the edited rate when the user modifies the rate

    const DeleteComment = (id) => {                                                 // DeleteComment is a function that deletes the comment
        fetch(`https://striveschool-api.herokuapp.com/api/comments/${id}`, {
            method: "DELETE",
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`Error in API call`);
                }
                alert("Comment deleted!");
                onDelete(id);                                                       // onDelete is a function that deletes the comment from the comments state variable and so the UI is updated
            })

            .catch((error) => {
                console.log(error);
            });
    }

    const modifyComment = () => {                                                      // modifyComment is a function that modifies the comment
        fetch(`https://striveschool-api.herokuapp.com/api/comments/${comment._id}`, {
            method: "PUT",
            body: JSON.stringify({
                comment: editedComment,
                rate: editedRate
            }),
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`Error in API call`);
                }
                alert("Comment modified!");
                setIsEditing(false);
                onUpdate(comment._id, editedComment, editedRate);                               // onUpdate is a function that updates the comments state variable when the user modifies the comment and so the UI is updated
            })
            .catch((error) => {
                console.log(error);
            });
    }

    return (
        <div className="col-12 mt-4">
            <div key={comment._id} className="d-flex gap-2 my-3 mx-3 align-items-center">
                {isEditing ? (                                                                  // if the user clicks on the modify button, the comment is displayed in an input field that the user can modify
                    <>
                        <input
                            type="text"
                            value={editedComment}
                            onChange={(e) => setEditedComment(e.target.value)}                  // onChange is a function that updates the editedComment state variable when the user modifies the comment
                        />
                        <input
                            type="number"
                            value={editedRate}
                            onChange={(e) => setEditedRate(e.target.value)}                     // onChange is a function that updates the editedRate state variable when the user modifies the rate
                        />
                        <Button
                            className="col-2"
                            variant="outline-success"                                           // onClick is a function that calls the modifyComment function when the user clicks on the save button
                            onClick={modifyComment}>
                            Save
                        </Button>
                        <Button
                            className="col-2"
                            variant="secondary"                                                 // onClick is a function that calls the setIsEditing function when the user clicks on the cancel button and serts the isEditing state variable to false which means that the comment is displayed as a paragraph
                            onClick={() => setIsEditing(false)}>
                            Cancel
                        </Button>
                    </>
                ) : (                                                                           // if the user doesn't click on the modify button, the comment is displayed as a paragraph and can't be modified
                    <>
                        <p className="col m-0">{comment.comment}</p>
                        <p className="col-1 m-0">{comment.rate}</p>
                        <Button
                            className="col-2"
                            variant="outline-danger"                                            // onClick is a function that calls the DeleteComment function when the user clicks on the delete button
                            onClick={() => DeleteComment(comment._id)}>
                            Delete
                        </Button>
                        <Button
                            className="col-2"
                            variant="outline-primary"                                           // onClick is a function that sets the isEditing state variable to true which means that the comment is displayed in an input field that the user can modify
                            onClick={() => setIsEditing(true)}>
                            Modify
                        </Button>
                    </>
                )}
            </div>
        </div>
    );
}



export default SingleComment;