//import React, { useState } from 'react';
//import Modal from './Modal';
import Modal from '../UI/Modal';
import classes from './TaskAddForm.module.css';


const TaskAddForm = (props) => {
  return (
    <Modal onClose={props.onClose}>
      <form>
        <label htmlFor="new-task"></label>
        <input type="text" name="new-task" id="new-task" />
        <button className={classes.button} onClick={props.onClose}>
          Ajouter
            </button>
      </form>
    </Modal>
  )
}

export default TaskAddForm