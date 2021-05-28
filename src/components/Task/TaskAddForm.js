import React, { useState } from 'react';
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
    if (enteredTask.trim().length === 0) {
      return;
    }
    props.onAdd(enteredTask);
    props.onClose();
  }

  return (
    <Modal onClose={props.onClose}>
      <form className={classes.form} onSubmit={submitHandler}>

        <Input
          type="text"
          id="new-task"
          placeholder="Nouvelle tâche"
          autoFocus={"autoFocus"}
          isValid={true}
          value={enteredTask}
          onChange={enteredTaskChangeHandler}
          onBlur={() => { }}
        />

        <Button
          type="submit"
        >
          Ajouter
        </Button>

      </form>
    </Modal>
  )
}

export default TaskAddForm