import { useState, useEffect } from "react";
import { Container, Form, Button } from "react-bootstrap";



const token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzdkMDQ3YzdjMWUwYjAwMTUxNzIxYmEiLCJpYXQiOjE3Mzc5NzYxNjIsImV4cCI6MTczOTE4NTc2Mn0.d3aho08iLJMrdIKmjtIzwY37THFZkbrg6SkhOyCMylU`

// The AddComment component takes a single prop: asin. This prop is the unique identifier of the book that the user wants to comment on. It fetches the comments for the book with the given asin and renders the AddComment and CommentList components.
const AddComment = function ({ asin, newComment }) {

    const [comments, setComments] = useState({
        comment: '',
        rate: 1,
        elementId: null,
    });

    useEffect(() => {
        setComments({ ...comments, elementId: asin });                  // Setcomments is a function that sets the state of comments by spreading the previous state and adding the asin to the elementId property
    }, [asin]);


    const sendComment = async (e) => {
        e.preventDefault();
        try {
            let response = await fetch("https://striveschool-api.herokuapp.com/api/comments/", {
                method: "POST",
                body: JSON.stringify(comments),
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            });
            if (response.ok) {
                alert("Comment was sent!");
                setComments({
                    comment: "",
                    rate: 1,
                    elementId: null,
                });
                console.log(comments);
                newComment(comments);


            } else {
                console.log("an error occurred");
                alert("Something went wrong!");
            }
        } catch (error) {
            console.log(error);
        }
    }







    return (
        <Container>
            <Form onSubmit={sendComment} className="col-12">                        {/* This is the form that the user will use to submit their comment. The form has a single group of elements, which are laid out in a column. The group contains a label and a textarea for the user to enter their comment. It also contains a select element for the user to select their rating. The form also has a single button which will submit the form when clicked. */}

                <Form.Group className="d-flex flex-column justify-content-center">  {/*  This is the label for the comment textarea. It is centered and has a margin of 3px on the bottom. */}
                    <Form.Label className="text-center mb-3">Comment</Form.Label>   {/* This is the textarea where the user will enter their comment. It has a placeholder that says "Write your comment here". The value of the textarea is set to the value of the comments.comment state variable. When the user types something into the textarea, the state variable is updated with the value of the textarea. The textarea is 50 characters wide and 3 rows high. */}
                    <Form.Control
                        as="textarea"
                        cols={50}
                        rows={3}
                        placeholder="Write your comment here"
                        value={comments.comment}
                        onChange={(e) =>
                            setComments({ ...comments, comment: e.target.value })
                        } />                                                        {/* This is the label for the select element. It is centered and has a margin of 3px on the top and bottom. */}
                    
                    <Form.Label className="text-center my-3">Rate</Form.Label>      {/* This is the select element where the user will select their rating. The value of the select element is set to the value of the comments.rate state variable. When the user selects a new rating from the select element, the state variable is updated with the value of the select element. The select element has 5 options, numbered from 1 to 5. */}
                    <Form.Control
                        as="select"
                        value={comments.rate}
                        onChange={(e) =>
                            setComments({ ...comments, rate: e.target.value })
                        }
                    >
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </Form.Control>
                </Form.Group>
                <div className="text-center mt-3">                                   {/* This is the button that the user will click to submit the form. It is centered and has a margin of 3px on the top. When the button is clicked, the sendComment function is called. This function sends a POST request to the server with the comment and rating that the user entered. If the request is successful, the user is alerted that the comment was sent and the comments state variable is reset to its initial state. If the request fails, the user is alerted that something went wrong. */}
                    <Button type="submit" variant="outline-primary">Submit</Button>
                </div>
            </Form>
        </Container>
    );
}

export default AddComment;