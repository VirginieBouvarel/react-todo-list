import React, { useContext } from 'react';
import classes from './Header.module.css';
import ThemeContext from '../store/theme-context';
import Button from './UI/Button';


const Header = (props) => {
  const themeCtx = useContext(ThemeContext);

  return (
    <header className={`${classes.header} ${themeCtx.darkMode ? classes['header--dark'] : ""}`}>

      <h1><span className={classes.my}>My</span>ToDo</h1>

      <Button
        onClick={themeCtx.onSwitch}
      >
        {themeCtx.darkMode ? <i className="far fa-sun"></i> : <i className="far fa-moon"></i>}
      </Button>

    </header>
  )
}

export default Header