import { Dispatch, SetStateAction } from "react";

type NavbarPropType = {
  token: string;
  setToken: Dispatch<SetStateAction<string>>;
};

export const Navbar: React.FC<NavbarPropType> = ({ setToken, token }) => {
  const logoutHandler = () => {
    localStorage.removeItem("token");
    setToken("");
  };
  return (
    <nav className="nav-container">
      <a href="/">
        <h2>HackerNews</h2>
      </a>
      {token && (
        <p className="nav-link" onClick={logoutHandler}>
          logout
        </p>
      )}
    </nav>
  );
};
