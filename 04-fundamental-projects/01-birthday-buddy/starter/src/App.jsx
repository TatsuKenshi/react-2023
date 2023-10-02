import { useState } from "react";
import List from "./List";
import data from "./data";

const App = () => {
  const [people, setPeople] = useState(data);

  const clearList = () => {
    setPeople([]);
  };

  return (
    <main>
      <section className="container">
        <h3>{people.length} birthdays today</h3>
        <List people={people} />
        <button type="button" className="btn btn-block" onClick={clearList}>
          Clear List
        </button>
        <button
          type="button"
          className="btn btn-block"
          style={{ marginTop: "1rem" }}
          onClick={() => {
            setPeople([]);
          }}
        >
          Clear List
        </button>
      </section>
    </main>
  );
};
export default App;
