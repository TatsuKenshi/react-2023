import { useEffect, useState } from "react";
const url = "https://api.github.com/users/QuincyLarson";

const MultipleReturnsFetchData = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState(null);

  const fetchUser = async () => {
    try {
      const response = await fetch(url);

      if (!response.ok) {
        setIsError(true);
        setIsLoading(false);
        // return to exit the function.
        // no use in parsing an error response.
        return;
      }

      const user = await response.json();
      setUser(user);
    } catch (error) {
      setIsError(true);
      console.log(error);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchUser();
    // note that create-react-app would ask for fetchUser to be added to the dependencies array, while vite does not.
    // with CRA, you'd also need useCallback.
  }, []);

  if (isLoading) {
    return (
      <section>
        <h2>Loading...</h2>
      </section>
    );
  }

  if (isError) {
    return (
      <section>
        <h2>Oops! Something went wrong! Try again later.</h2>
      </section>
    );
  }

  // destructure data only if there is a user in the state
  const { avatar_url, bio, company, name } = user;

  return (
    <section>
      <img
        src={avatar_url}
        alt={name}
        style={{ borderRadius: "2rem", width: "150px" }}
      />
      <div>
        <h2>{name}</h2>
        <h4>Works at {company}</h4>
        <p>{bio}</p>
      </div>
    </section>
  );
};

export default MultipleReturnsFetchData;

// Unlike axios, fetch API doesn't treat 4xx and 5xx HTTP status codes as errors, it considers them indicative of a successful request.
