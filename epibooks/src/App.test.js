import {fireEvent, render, screen } from '@testing-library/react';
import App from './App';

/* ---------------------------------------------------------------RENDERING TESTS--------------------------------------------------------------- */



// test if the app renders a welcome message
test('welcome alert', () => {
  render(<App />);
  const alertElement = screen.queryByText(/benvenuto in BOOKS ON A TREE!/i);
  expect(alertElement).toBeInTheDocument();
});


// test if the app renders 150 books
test('amount of books is 150', () => {
  render(<App />);
  const cardElements = screen.queryAllByTestId("book-card");
  expect(cardElements).toHaveLength(150);
});


// test if the app renders the comment area
test('renders commentArea component', () => {
  render(<App />);
  const detailsElements = screen.getAllByText(/Details/i);
  fireEvent.click(detailsElements[0]);
  const commentInputElement = screen.getByPlaceholderText(/write your comment here/i);
  expect(commentInputElement).toBeInTheDocument();
});



/* ---------------------------------------------------------------FILTERING TESTS--------------------------------------------------------------- */



// test if the app renders 3 books for "destiny"
test('filtered amount of books for "destiny" is 3', () => {
  render(<App />);
  const backButton = screen.getByText(/back to all books/i);
  fireEvent.click(backButton);
  const Searchinput = screen.getByPlaceholderText(/search for a book/i);
  fireEvent.change (Searchinput, { target: { value: "destiny" } })
  const AllTheBooks = screen.getAllByTestId("book-card");
  expect(AllTheBooks).toHaveLength(3);
});


// test if the app renders 3 books for "wish"
test('filtered amount of books for "wish" is 2', () => {
  render(<App />);
  const Searchinput = screen.getByPlaceholderText(/search for a book/i);
  fireEvent.change (Searchinput, { target: { value: "wish" } })
  const AllTheBooks = screen.getAllByTestId("book-card");
  expect(AllTheBooks).toHaveLength(2);
});



/* ---------------------------------------------------------------CHANGING TESTS--------------------------------------------------------------- */



// test if on click the border of the fisrt selected book changes
test('change border of the first book', () => {
  render(<App />);
  const cardElements = screen.getAllByTestId("book-card");
  const firstBook = cardElements[0];
  fireEvent.click(firstBook);
  expect(firstBook).toHaveStyle("border: 3px solid red");
});



// test if on click the border of the second selected book changes and the border of the first selected book turns back to none
test('change border of the second book', () => {
  render(<App />);
  const cardElements = screen.getAllByTestId("book-card");
  const firstBook = cardElements[0];
  const secondBook = cardElements[1];
  fireEvent.click(secondBook);
  expect(secondBook).toHaveStyle("border: 3px solid red");
  expect(firstBook).toHaveStyle("border: none");
})



/* ---------------------------------------------------------------COMMENT TESTS--------------------------------------------------------------- */


// test if on loading page there is no singleComment
test('no presense of singleComment on loading page', () => {
  render(<App />);
  const singleComment = screen.queryByTestId("single-comment");
  expect(singleComment).toBeNull();
})



/* ---------------------------------------------------------------COMMENTLIST TESTS--------------------------------------------------------------- */



//test if onclicking the details button the comment list appears
test('comment list appears', async () => {
  render(<App />);
  const tokenField = screen.getByPlaceholderText(/insert your token/i);
  fireEvent.change (tokenField, { target: { value: "xxxx" } })              // inserisci il tuo token al posto di xxxx
  const detailsElements = screen.getAllByText(/Details/i);
  fireEvent.click(detailsElements[0]);
  const commentList = await screen.findAllByTestId("single-comment");
  expect(commentList).not.toHaveLength(0);
})