import { useAppContext } from "./Navbar";

const UserContainer = () => {
  const { user, logout } = useAppContext();

  return (
    <>
      {user ? (
        <div className="user-container">
          <p>Hello there, {user}!</p>
          <button className="btn" onClick={logout}>
            logout
          </button>
        </div>
      ) : (
        <div className="user-container">
          <p>please login</p>
        </div>
      )}
    </>
  );
};

export default UserContainer;
