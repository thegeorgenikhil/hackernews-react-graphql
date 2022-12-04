import { useState } from "react";
import { Navbar, Sidebar, Feed } from "./components";

export const App = () => {
  const [token, setToken] = useState<string>(() => {
    return localStorage.getItem("token") ?? "";
  });
  const [refreshFeed, setRefreshFeed] = useState(false);

  return (
    <div>
      <Navbar token={token} setToken={setToken} />
      <main className="main-container">
        <Feed refreshFeed={refreshFeed} />
        <Sidebar
          setRefreshFeed={setRefreshFeed}
          token={token}
          setToken={setToken}
        />
      </main>
    </div>
  );
};
