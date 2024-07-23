"use client";
import { createContext, useEffect, useReducer, useState } from "react";

export const StateContext = createContext();

export default function StateContexttProvider({ children }) {
  const [createboxshow, setCreateboxshow] = useState(false);
  const [showaddnoteboxalert, setShowaddnoteboxalert] = useState(false);
  const [showmynoteboxalert, setShowmynoteboxalert] = useState(false);

  // hundle onclick
  function toggleCreatePostBox() {
    setCreateboxshow(!createboxshow);
  }
  function toggleAddNodeBox() {
    setShowaddnoteboxalert(!showaddnoteboxalert);
  }

  function toggleMyNodeBox() {
    setShowmynoteboxalert(!showmynoteboxalert);
  }

  return (
    <StateContext.Provider
      value={{
        toggleCreatePostBox,
        createboxshow,
        showaddnoteboxalert,
        toggleAddNodeBox,
        showmynoteboxalert,
        toggleMyNodeBox
      }}
    >
      {children}
    </StateContext.Provider>
  );
}
