import styles from './TaskAddButton.module.css';

const Button = (props) => {

  return (
    <button
      type={props.type || 'button'}
      className={`${styles.button} ${props.className}`}
      onClick={props.onClick}
    >
      +
    </button>
  );
}

export default Button;