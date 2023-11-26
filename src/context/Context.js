import { useState, useContext, createContext } from "react";

const defaultState = {
  isOpen: false,
  type: 'success',
  message: '',
  onOpen: () => {},
  onClose: () => {},
};

const AlertContext = createContext(defaultState);

export const AlertProvider = ({ children }) => {
  const [state, setState] = useState(defaultState);

  return (
    <AlertContext.Provider
      value={{
        ...state,
        onOpen: (type, message) => setState({ isOpen: true, type, message }),
        onClose: () => setState(defaultState),
      }}
    >
      {children}
    </AlertContext.Provider>
  );
};

export const useAlertContext = () => useContext(AlertContext);
