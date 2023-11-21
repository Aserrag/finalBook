
import React, { createContext, useState } from "react";
export const ThemeContext = createContext({
  id: null,
  changeTheme: () => { },
});
export const ThemeContextProvider = ({ children }) => {
  const [audioId, setAudioId] = useState(null);
  const changeTheme = (id) => {
    setAudioId(id);
  };

  return (
    <ThemeContext.Provider value={{ audioId, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};