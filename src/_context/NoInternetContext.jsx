import { createContext, useContext, useState } from "react";

const NoInternetContext = createContext(null);

export const NoInternetContextProvider = ({ children }) => {
  const [noInternet, setNoInternet] = useState(false);

  return (
    <NoInternetContext.Provider value={{ noInternet, setNoInternet }}>
      {children}
    </NoInternetContext.Provider>
  );
};

const useNoInternet = () => {
  const context = useContext(NoInternetContext);

  return context;
};

export default useNoInternet;
