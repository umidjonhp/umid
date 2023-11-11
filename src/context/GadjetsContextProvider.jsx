import React, { useReducer, useState } from "react";
import GadjetsContext from "./gadjets-context"
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css"


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
        findItem.newPrice = findItem.price * findItem.count;
      } else {
        newItems.push({ ...gadget, count: 1, newPrice: gadget.price });
      }
      const totalPrice = newItems.reduce(
        (acc, item) => acc + item.newPrice,
        0
      );
      return {
        ...state,
        items: newItems,
        totalPrice,
      };
    }
    case "ORDER": {
      return {
        ...state,
        orderSection: !state.orderSection,
      };
    }
    case "ADD_GADGET": {
      const newItems = [...state.items]
      const findItem = newItems.find((item) => item.id === action.payload);
      findItem.count = findItem.count + 1;
      findItem.newPrice = findItem.price * findItem.count;
      const totalPrice = newItems.reduce(
        (acc, item) => acc + item.newPrice,
        0
      );
      return {
        ...state,
        items: newItems,
        totalPrice: totalPrice,
      }
    }
    case "GET_GADGET": {
      const newItems = [...state.items];
      const findItem = newItems.find((item) => item.id === action.payload);
      findItem.count = findItem.count - 1;
      findItem.newPrice = findItem.price * findItem.count;
      const totalPrice = newItems.reduce(
        (acc, item) => acc + item.newPrice,
        0
      );
      return {
        ...state,
        items: newItems,
        totalPrice: totalPrice,
      }
    }
    case "DELETE_GADGET": {
      const newItems = [...state.items].filter((item) => item.id !== action.payload)
      const totalPrice = newItems.reduce(
        (acc, item) => acc + item.newPrice,
        0
      );
      return {
        ...state,
        items: newItems,
        totalPrice: totalPrice,
      }
    }
    case "ADD_TOAST": {
      const resolveAfter3Sec = new Promise(resolve => setTimeout(resolve, 1000));
      toast.promise(
        resolveAfter3Sec,
        {
          pending: 'Promise is pending',
          success: 'Product is added!',
          error: 'Promise rejected 🤯'
        }
      )
      return {
        ...state
      }
    }
    case "GET_TOAST": {
      const resolveAfter3Sec = new Promise(resolve => setTimeout(resolve, 1000));
      toast.promise(
        resolveAfter3Sec,
        {
          pending: 'Promise is pending',
          success: 'Product is removed!',
          error: 'Promise rejected'
        }
      )
      return {
        ...state
      }
    }
  }
}

const GadjetsContextProvider = ({ children }) => {
  const [gadgets, dispatch] = useReducer(reducerGadjets, initialGadjetsValue);

  const onAddGadgets = (gadget) => dispatch({ type: "ADD_GADGETS", payload: { ...gadget } })
  const toggleOrderSection = () => dispatch({ type: "ORDER" });
  const onAddGadget = (id) => dispatch({ type: "ADD_GADGET", payload: id })
  const onGetGadget = (id) => dispatch({ type: "GET_GADGET", payload: id })
  const onDeleteGadget = (id) => dispatch({ type: "DELETE_GADGET", payload: id })
  const toastify = () => dispatch({ type: "ADD_TOAST" })
  const toastifyGet = () => dispatch({ type: "GET_TOAST" })


  const contextData = {
    ...gadgets,
    onAddGadgets,
    toggleOrderSection,
    onAddGadget,
    onGetGadget,
    onDeleteGadget,
    toastify,
    toastifyGet,
  };

  return (
    <GadjetsContext.Provider value={contextData}>
      {children}
    </GadjetsContext.Provider>
  );
}

export default GadjetsContextProvider