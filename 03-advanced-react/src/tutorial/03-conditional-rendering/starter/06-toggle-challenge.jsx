import { useState } from "react";

const ToggleChallenge = () => {
  const [user, setUser] = useState("");

  const toggleUser = () => {
    if (user) {
      setUser("");
    } else {
      setUser("Mike");
    }
  };

  return (
    <section>
      <div>
        <button className="btn" onClick={toggleUser}>
          Toggle State
        </button>
      </div>
      {user ? (
        <div>
          <h4>{user}</h4>
        </div>
      ) : (
        <h4>No user</h4>
      )}
      {user && <User user={user} />}
    </section>
  );
};

const User = ({ user }) => {
  return (
    <div>
      <h4>{user}</h4>
    </div>
  );
};

export default ToggleChallenge;
