import { useState } from "react";

const ControlledInputs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // do something with values
    console.log(name, email);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h4>controlled inputs</h4>
      <div>
        <label htmlFor="name" className="form-label">
          name
        </label>
        <input
          type="text"
          className="form-input"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="form-row">
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input
          type="email"
          className="form-input"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <button type="submit" className="btn btn-block">
        submit
      </button>
    </form>
  );
};
export default ControlledInputs;

// controlled input means there will be a state value
// either one for the entire form or each input separately
// whenever we update the form, state updates, too

// in react, each controlled input needs two things:
// // // value={correspondingState}
// // // onChange={changeHandlerFunction}
