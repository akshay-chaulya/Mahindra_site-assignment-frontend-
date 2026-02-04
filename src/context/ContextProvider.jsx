import { createContext, useContext, useState, useCallback } from "react";

const Context = createContext(null);

export const ContextProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openDialog = useCallback(() => setIsOpen(true), []);
  const closeDialog = useCallback(() => setIsOpen(false), []);

  return (
    <Context.Provider value={{ isOpen, openDialog, closeDialog }}>
      {children}
    </Context.Provider>
  );
};

export const useDialog = () => {
  const context = useContext(Context);
  if (!context) {
    throw new Error("useDialog must be used inside DialogProvider");
  }
  return context;
};
