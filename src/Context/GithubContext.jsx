import { createContext, useContext, useState } from "react";

const GithubContext = createContext();

const GithubProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  return (
    <GithubContext.Provider
      value={{
        user,
        loading,
        setUser,
        setLoading,
        setError,
        error,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubProvider;

export const useGithub = () => {
  return useContext(GithubContext);
};
