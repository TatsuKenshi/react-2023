import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

const books = [
  {
    id: 0,
    author: "Jordan Moore",
    title: "Interesting Facts For Curious Minds",
    img: "./images/book-1.jpg",
  },
  {
    id: 1,
    author: "James Clear",
    title: "Atomic Habits",
    img: "https://m.media-amazon.com/images/I/81bGKUa1e0L._SY466_.jpg",
  },
];

const BookList = () => {
  return (
    <>
      <h1>Amazon Best Seller List</h1>
      <section className="booklist">
        {books.map((book) => {
          return <Book key={book.id} {...book} />;
        })}
      </section>
    </>
  );
};

const Book = (props) => {
  const { img, title, author } = props;
  console.log(props);
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  // <React.StrictMode>
  <BookList />
  // </React.StrictMode>
);

// // // jsx

// jsx uses react.createElement under the hood to create each html element.

// jsx file/function must return an element (unless it is a custom hook or another special file). There can be only one parent/main element.

// jsx react component names must start with a capital letter.

// to avoid the div soup, we can use an unnamed element - react fragment (<></> | <React.Fragment></React.Fragment> ).

// jsx element properties are always written in camelCase.

// jsx uses className instead of class.

// in jsx always, always close the tag, even the self-closing one.

// opening element tag (or opening parenthesis) needs to be in the same row as return.

// variables in jsx need to be expressions (which return a value), we can't use statements. Written inside single curlies.
