import {fireEvent, render, screen } from '@testing-library/react';
import App from './App';



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



/* ---------------------------------------------------------------------------------------------------------------------------------------------- */



// test if the app renders 3 books for "destiny"
test('filtered amount of books for "destiny" is 3', () => {
  render(<App />);
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



/* ---------------------------------------------------------------------------------------------------------------------------------------------- */



// test if the app renders the comment area
test('change border', () => {
  render(<App />);
  const cardElements = screen.getAllByTestId("book-card");
  const firstBook = cardElements[0];
  fireEvent.click(firstBook);
  expect(firstBook).toHaveStyle("border: 3px solid red !important");
});



/* ---------------------------------------------------------------------------------------------------------------------------------------------- */



/* // test if on click the border of the book changes
test('renders commentArea component', () => {
  render(<App />);
  const cardElements = screen.getAllByTestId("book-card");
  fireEvent.click(cardElements[0]);
  const commentInputElement = screen.getByPlaceholderText(/write your comment here/i);
  expect(commentInputElement).toBeInTheDocument();
}); */
