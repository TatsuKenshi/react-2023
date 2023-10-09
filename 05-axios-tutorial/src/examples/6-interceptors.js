import { useEffect } from "react";
import authFetch from "../axios/interceptors";

const url = "https://course-api.com/react-store-products";

const Interceptors = () => {
  const fetchData = async () => {
    try {
      const resp = await authFetch("/react-store-productss");
    } catch (error) {}
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <h2 className="text-center">interceptors</h2>;
};
export default Interceptors;

// interceptors are functions axios calls for each request.
// we can use them to transform a request before it leaves,
// also we can add custom logic for handling the response
// interceptors are generally used for complex applications
// example: authentication
