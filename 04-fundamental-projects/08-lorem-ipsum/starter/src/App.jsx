import { useState } from "react";
import { nanoid } from "nanoid";
import data from "./data";

const App = () => {
  const [count, setCount] = useState(1);
  const [text, setText] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let amount = parseInt(count);
    setText(data.slice(0, amount));
  };

  return (
    <section className="section-center" onSubmit={handleSubmit}>
      <h4>Tired of boring Lorem Ipsum?</h4>
      <form action="" className="lorem-form">
        <label htmlFor="amount">paragraphs: </label>
        <input
          type="number"
          name="amount"
          id="amount"
          min="1"
          step="1"
          max="8"
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />
        <button className="btn" type="submit">
          generate
        </button>
      </form>
      <article className="lorem-text">
        {text.map((paragraph) => {
          return <p key={nanoid()}>{paragraph}</p>;
        })}
      </article>
    </section>
  );
};
export default App;
