import React, { useState } from 'react';
//import Modal from './Modal';
import Modal from '../UI/Modal';
import Input from '../UI/Input';
import Button from '../UI/Button';
import classes from './TaskAddForm.module.css';


const TaskAddForm = (props) => {
  const [enteredTask, setEnteredTask] = useState("");

  const enteredTaskChangeHandler = (event) => {
    setEnteredTask(event.target.value);
  }

  const submitHandler = (event) => {
    event.preventDefault();
    props.onAdd(enteredTask);
    props.onClose();
  }

  return (
    <Modal onClose={props.onClose}>
      <form className={classes.form} >

        <Input
          type="text"
          id="new-task"
          placeholder="Nouvelle tâche"
          isValid={true}
          value={enteredTask}
          onChange={enteredTaskChangeHandler}
          onBlur={() => { }}
        />

        <Button
          type="submit"
          onClick={submitHandler}
        >
          Ajouter
        </Button>

      </form>
    </Modal>
  )
}

export default TaskAddForm