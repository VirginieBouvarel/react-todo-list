//import React, { useState } from 'react';
//import Modal from './Modal';
import Modal from '../UI/Modal';
import Input from '../UI/Input';
import classes from './TaskAddForm.module.css';


const TaskAddForm = (props) => {
  return (
    <Modal onClose={props.onClose}>
      <form className={classes.form}>

        <Input
          type="text"
          id="new-task"
          placeholder="Nouvelle tâche"
          isValid={true}
          value={undefined}
          onChange={() => { }}
          onBlur={() => { }}
        />

        <button className={classes.button} onClick={props.onClose}>
          Ajouter
        </button>

      </form>
    </Modal>
  )
}

export default TaskAddForm