import { LoginPanel } from "../LoginPanel/LoginPanel";

export const Sidebar = () => {
  let panel = <LoginPanel />;
  return <div className="sidebar-container">{panel}</div>;
};
