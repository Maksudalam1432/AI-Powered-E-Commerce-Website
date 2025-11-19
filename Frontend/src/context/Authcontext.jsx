import React, { createContext } from "react";

export const authdatacontext = createContext();

function Authcontext({ children }) {
  const serverUrl = "http://localhost:5000"; 

  return (
    <authdatacontext.Provider value={{ serverUrl }}>
      {children}
    </authdatacontext.Provider>
  );
}

export default Authcontext;
