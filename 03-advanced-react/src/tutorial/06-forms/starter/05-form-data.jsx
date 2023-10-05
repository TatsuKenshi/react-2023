import { useState } from "react";

const UncontrolledInputs = () => {
  const [value, setValue] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();

    // create the formData variable
    // assign it new FormData and pass the event's current target (your form)
    // FormData stores data in an array of arrays
    // each array has two values - the field's key and value
    const formData = new FormData(e.currentTarget);

    // Object.fromEntries flattens this array into an object
    const newUser = Object.fromEntries(formData);
    console.log(newUser);
    setValue(value + 1);

    // reset the fields after submit
    e.currentTarget.reset();
  };
  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <h4>Form Data API</h4>
        {/* name */}
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            name
          </label>
          <input type="text" className="form-input" id="name" name="name" />
        </div>
        {/* email */}
        <div className="form-row">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input type="email" className="form-input" id="email" name="email" />
        </div>
        {/* password */}
        <div className="form-row">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-input"
            id="password"
            name="password"
          />
        </div>

        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>
    </div>
  );
};
export default UncontrolledInputs;

// e.target refers to the element which triggers the event
// in onSubmit, this would be the form (because of submit button)

// e.currentTarget refers to the element the listener is listening
// in onSubmit, this would be the form
