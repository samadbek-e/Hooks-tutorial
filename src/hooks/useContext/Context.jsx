import React, { useState, createContext } from "react";
import Login from "./Login";
import User from "./User";

export const AppContext = createContext(null);

const Context = () => {
  const [username, setUsername] = useState();
  return (
    <React.Fragment>
        <h1 style={{marginBottom: "10px", background: "blue", borderRadius: "5px"}}>UseContext</h1>

      <AppContext.Provider value={{username, setUsername}}>
        <Login />
        <User />
      </AppContext.Provider>
    </React.Fragment>
  );
};

export default Context;
