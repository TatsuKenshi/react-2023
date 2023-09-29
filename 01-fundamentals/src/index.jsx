import React from "react";
import ReactDOM from "react-dom/client";
import BookList from "./BookList";

import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BookList />
  </React.StrictMode>
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

// const handleFormSubmission = (e) => {
//   e.preventDefault();
//   console.log("form submitted");

// we can pass the event object as a param in the reference function, as well.
// };

// // //

// react data flow - props can only be passed down the component ree.
// Context API, redux and other state libraries are exceptions
