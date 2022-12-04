import { useState } from "react";
import { Navbar, Sidebar, Feed } from "./components";

export const App = () => {
  // getting the token from local storage
  const [token, setToken] = useState<string>(() => {
    return localStorage.getItem("token") ?? "";
  });
  // When the users posts a new link, we want to update the feed, so we are going to use a state variable refreshFeed which has been initialized to false, it has been passed to the feed component as a prop. In the feed component we will pass this refreshFeed variable as a dependency to the useEffect hook, so that when the refreshFeed variable changes, the useEffect hook will be called again which will have the refetch function and the feed will be updated.

  // setRefreshFeed has been passed to the Sidebar component as a prop, so that when the user posts a new link, the refreshFeed variable will be set to !refreshFeed, which will trigger a rerender of the feed component and the feed updates.
  const [refreshFeed, setRefreshFeed] = useState(false);

  return (
    <div>
      {/* passing the token, to render the logout button if token is present */}
      {/* passing the setToken function, to set the token as "" when the user logs out */}
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

// Why do we need to pass token to the Sidebar component?

// We need to pass the token to the Sidebar component because we need to check if the user is logged in or not, if the user is logged in, we need to show the post a new link form, if the user is not logged in, we need to show the login form.

// Why do we need to pass setToken as props to the Sidebar component?

// Inside the sidebar is our login form and signup form, so when the user logs in or signs up, we need to set the token in the App component, so that the logout button can be rendered.

