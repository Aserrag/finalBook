
import React, { useContext } from "react";

const PlayerProviders = ({ children }) => {
  const { id } = useContext(ThemeContext);
  return <div className={theme}>{children}</div>;
};

export default PlayerProviders;