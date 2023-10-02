import { useState, useEffect } from "react";
import Loading from "./Loading";
import Error from "./Error";
import Tours from "./Tours";

const url = "https://course-api.com/react-tours-project";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [tours, setTours] = useState([]);

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  const fetchTours = async () => {
    setIsLoading(true);
    setIsError(false);

    try {
      const response = await fetch(url);

      if (!response.ok) {
        setIsError(true);
        setIsLoading(false);
        return;
      }

      const tours = await response.json();
      setTours(tours);
    } catch (error) {
      setIsError(true);
      console.log(error);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchTours();
  }, []);

  if (isLoading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  if (isError) {
    return (
      <main>
        <Error />
      </main>
    );
  }

  return (
    <main>
      {tours.length !== 0 ? (
        <Tours tours={tours} removeTour={removeTour} />
      ) : (
        <main>
          <div className="title">
            <h2>No tours left</h2>
            <button
              type="button"
              style={{ marginTop: "2rem" }}
              className="btn"
              onClick={fetchTours}
            >
              Refresh the list
            </button>
          </div>
        </main>
      )}
    </main>
  );
};
export default App;
