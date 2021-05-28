import React, { useState } from 'react';

const ThemeContext = React.createContext({
  darkMode: false,
});

export const ThemeContextProvider = (props) => {
  const [darkMode, setDarkMode] = useState(false);

  const switchHandler = () => {
    if (darkMode) {
      setDarkMode(false);
      console.log(darkMode);
    } else {
      setDarkMode(true);
      console.log(darkMode);
    }
  }

  return (
    <ThemeContext.Provider
      value={{
        darkMode: darkMode,
        onSwitch: switchHandler
      }}
    >
      {props.children}
    </ThemeContext.Provider>);
}

export default ThemeContext;