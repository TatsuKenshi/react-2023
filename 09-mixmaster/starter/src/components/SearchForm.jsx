import React from "react";
import Wrapper from "../assets/wrappers/SearchForm";
import { Form, useNavigation } from "react-router-dom";

const SearchForm = ({ searchTerm }) => {
  const navigate = useNavigation();
  const isSubmitting = navigate.state === "submitting";

  return (
    <Wrapper>
      <Form className="form">
        <input
          type="search"
          name="search"
          id="search"
          defaultValue={searchTerm}
          className="form-input"
        />
        <button className="btn" type="submit" disabled={isSubmitting}>
          {isSubmitting ? "searching..." : "search"}
        </button>
      </Form>
    </Wrapper>
  );
};

export default SearchForm;
