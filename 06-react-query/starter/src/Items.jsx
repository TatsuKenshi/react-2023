import SingleItem from "./SingleItem";
import { useFetchTasks } from "./reactQueryCustomHooks";

const Items = () => {
  const { isLoading, isError, data } = useFetchTasks();

  if (isLoading) {
    return <p style={{ marginTop: "1rem" }}>Loading...</p>;
  }

  if (isError) {
    return <p style={{ marginTop: "1rem" }}>There was an error...</p>;
  }

  return (
    <div className="items">
      {/* {data.data.taskList.map((item) => {
        return <SingleItem key={item.id} item={item} />;
      })} */}
      {data.taskList.map((item) => {
        return <SingleItem key={item.id} item={item} />;
      })}
    </div>
  );
};
export default Items;

// first, we import the useQuery hook and assign it to a variable
// useQuery hook has two parameters: query key and query function
// // // query ke is a unique key, which is used internally for refetching, caching. and sharing queries between components
// // // query function is a function that returns a promise, which should either resolve the data or throw an error

// // // // //
// two ways to set up the queryFn:
// short -------------------------
// queryFn: () => customFetch.get("/"),
// map
// // // {data.data.taskList.map((item) =>

// long --------------------------
// queryFn: async () => {
//  const { data } = await customFetch.get("/");
//  return data;
// },
// map
// // // {data.taskList.map((item) =>
// // // // //
