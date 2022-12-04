import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { LoginPanel } from "../LoginPanel/LoginPanel";
import { PostPanel } from "../PostPanel/PostPanel";
import { SignupPanel } from "../SignupPanel/SignupPanel";

type SidebarPropType = {
  token: string;
  setToken: Dispatch<SetStateAction<string>>;
  setRefreshFeed: Dispatch<SetStateAction<boolean>>;
};

export const Sidebar: React.FC<SidebarPropType> = ({ token, setToken,setRefreshFeed }) => {
  const [currentTab, setCurrentTab] = useState("login");

  useEffect(() => {
    if (token) {
      setCurrentTab("post");
    } else {
      setCurrentTab("login");
    }
  }, [token]);

  let panel = <LoginPanel setToken={setToken} setTab={setCurrentTab} />;
  switch (currentTab) {
    case "login":
      panel = <LoginPanel setToken={setToken} setTab={setCurrentTab} />;
      break;
    case "signup":
      panel = <SignupPanel setToken={setToken} setTab={setCurrentTab} />;
      break;
    case "post":
      panel = <PostPanel setRefreshFeed={setRefreshFeed} />;
      break;
  }
  return <div className="sidebar-container">{panel}</div>;
};
