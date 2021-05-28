import classes from './Header.module.css';
import Button from './UI/Button';


const Header = (props) => {
  return (
    <header className={`${classes.header} ${props.darkMode ? classes['header--dark'] : ""}`}>
      <h1><span className={classes.my}>My</span>ToDo</h1>
      <Button className={`${classes.switch} ${props.darkMode ? classes['button--dark'] : ''}`} onClick={props.onSwitch}>
        {props.darkMode ? <i className="far fa-sun"></i> : <i className="far fa-moon"></i>}
      </Button>
    </header>
  )
}

export default Header