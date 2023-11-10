import React from 'react'
import GadjetsContext from "./gadjets-context"


// const initialGadjetsValue = {
//   items: gadjets,
// };
// const reducerGadjets = (state, action) => {
//   console.log("sd");
// }

const GadjetsContextProvider = ({ children }) => {

  const contextData = {
    lll: ""
  };

  return (
    <GadjetsContext.Provider value={contextData}>
      {children}
    </GadjetsContext.Provider>
  );
}

export default GadjetsContextProvider