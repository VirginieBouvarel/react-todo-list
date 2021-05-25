import classes from './Header.module.css';


const Header = (props) => {
  return (
    <header className={classes.header}>
      <h1><span className={classes.my}>My</span>ToDo</h1>
    </header>
  )
}

export default Header