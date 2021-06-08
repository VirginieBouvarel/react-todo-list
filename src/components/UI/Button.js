import classes from './Button.module.css';
import { useContext } from 'react';
import ThemeContext from '../../store/theme-context';

const Button = (props) => {
  const themeCtx = useContext(ThemeContext);
  return (
    <button
      type={props.type || 'button'}
      className={`${classes.button} ${themeCtx.darkMode ? classes['button--dark'] : ''} ${props.className}`}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}

export default Button;