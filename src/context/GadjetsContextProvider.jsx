import React, { useReducer, useState } from "react";
import GadjetsContext from "./gadjets-context"


const initialGadjetsValue = {
  items: [],
  totalPrice: 0,
  orderSection: false,
};
const reducerGadjets = (state, action) => {
  switch (action.type) {
    case "ADD_GADGETS": {
      const { payload: gadget } = action;
      const newItems = [...state.items];
      const findItem = newItems.find((item) => item.id === gadget.id);
      if (findItem) {
        findItem.count = findItem.count + 1;
        findItem.price *= findItem.count;
      } else {
        newItems.unshift({ ...gadget, count: 1 });
      }
      console.log(newItems);
      return {
        ...state,
        items: newItems,
      };
    }
    case "ORDER": {
      console.log(state.orderSection);
      return {
        ...state,
        orderSection: !state.orderSection,
      };
    }

  }
}

const GadjetsContextProvider = ({ children }) => {
  const [gadgets, dispatch] = useReducer(reducerGadjets, initialGadjetsValue);

  const onAddGadgets = (gadget) => dispatch({ type: "ADD_GADGETS", payload: { ...gadget } })

  const toggleOrderSection = () => dispatch({ type: "ORDER" });

  const contextData = {
    ...gadgets,
    onAddGadgets,
    toggleOrderSection,
  };

  return (
    <GadjetsContext.Provider value={contextData}>
      {children}
    </GadjetsContext.Provider>
  );
}

export default GadjetsContextProvider