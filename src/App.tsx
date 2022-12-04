import { Navbar, Sidebar, Feed } from "./components";

export const App = () => {
  return (
    <div>
      <Navbar />
      <main className="main-container">
        <Feed />
        <Sidebar />
      </main>
    </div>
  );
};
