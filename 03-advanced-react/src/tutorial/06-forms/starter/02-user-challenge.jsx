import { useState } from "react";
import { data } from "../../../data";

const UserChallenge = () => {
  const [people, setPeople] = useState(data);
  const [name, setName] = useState("");

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      console.log("provide a value");
      return;
    }

    const newPerson = {
      id: Date.now(),
      name: name,
    };

    const newPeople = [...people, newPerson];
    setPeople(newPeople);
    setName("");
  };

  const removePerson = (id) => {
    const newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  };

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <h4>Add User</h4>
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            name
          </label>
          <input
            type="text"
            className="form-input"
            id="name"
            value={name}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>

      <section>
        {people.map((person) => {
          const { id, name } = person;
          return (
            <p key={id}>
              <span>{name}</span> {"  "}
              <button onClick={() => removePerson(id)} className="btn">
                remove
              </button>
            </p>
          );
        })}
      </section>
    </div>
  );
};
export default UserChallenge;
