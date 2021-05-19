//import React, { useState } from 'react';
//import Modal from './Modal';
import Modal from '../UI/Modal';
import Input from '../UI/Input';
import Button from '../UI/Button';
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

        <Button
          type="submit"
          onClick={props.onClose}
        >
          Ajouter
        </Button>

      </form>
    </Modal>
  )
}

export default TaskAddForm