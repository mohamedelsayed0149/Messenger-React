import React from "react";
import Welcome from "./Welcome";
import Messages from "./Messages";
import { ContextProvider } from "../context/ContextProvider";
const Home = () => {
  const { loader, user } = React.useContext(ContextProvider);
  return (
    <div>{!loader ? user ? <Messages /> :
         <>
         <Welcome />
         </>: "loading..."}</div>
  );
};

export default Home;