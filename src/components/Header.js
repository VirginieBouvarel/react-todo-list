import classes from './Header.module.css';
import Button from './UI/Button';


const Header = (props) => {
  return (
    <header className={classes.header}>
      <h1><span className={classes.my}>My</span>ToDo</h1>
      <Button onClick={props.onSwitch}>Switch Thème</Button>
    </header>
  )
}

export default Header