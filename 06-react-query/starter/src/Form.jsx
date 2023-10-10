import { useState } from "react";
import { useCreateTask } from "./reactQueryCustomHooks";

const Form = () => {
  const [newItemName, setNewItemName] = useState("");

  const { createTask, isLoading } = useCreateTask();

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask(newItemName, {
      onSuccess: () => {
        setNewItemName("");
      },
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h4>task bud</h4>
      <div className="form-control">
        <input
          type="text "
          className="form-input"
          value={newItemName}
          onChange={(event) => setNewItemName(event.target.value)}
        />
        <button type="submit" className="btn" disabled={isLoading}>
          add task
        </button>
      </div>
    </form>
  );
};
export default Form;

// while the useQuery hook is there for get requests,
// useMutation is rect query's hook for post, put/patch, and delete requests
// it also has two helper options (methods) - onSuccess and onError
// these two can handle side effects such as invalidation and refetching
