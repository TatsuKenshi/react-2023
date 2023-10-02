import { useState } from "react";

const UserChallenge = () => {
  const [user, setUser] = useState();

  const login = () => {
    setUser({ name: "Mike" });
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <>
      {/* components route */}
      <section>
        {!user ? (
          <NoUser login={login} />
        ) : (
          <UserExists user={user} logout={logout} />
        )}
      </section>

      {/* direct route */}
      <section>
        {!user ? (
          <div>
            <h4>Please log in!</h4>
            <button type="button" className="btn" onClick={login}>
              Log In
            </button>
          </div>
        ) : (
          <div>
            <h4>Hello, {user.name}!</h4>
            <button type="button" className="btn" onClick={logout}>
              Log Out
            </button>
          </div>
        )}
      </section>
    </>
  );
};

// components
const NoUser = ({ login }) => {
  return (
    <div>
      <h4>Please log in!</h4>
      <button type="button" className="btn" onClick={login}>
        Log In
      </button>
    </div>
  );
};

const UserExists = ({ logout, user }) => {
  const { name } = user;
  return (
    <div>
      <h4>Hello, {name}!</h4>
      <button type="button" className="btn" onClick={logout}>
        Log Out
      </button>
    </div>
  );
};

export default UserChallenge;
