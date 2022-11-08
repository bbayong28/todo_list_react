import React from 'react';
import styles from '../css/Create.module.css'; 

function Create({onSubmit , item , onChange  }){

    return (
        <form onSubmit={onSubmit}>
        <input 
          className = {styles.f_add}
          type = "text" 
          placeholder = "Please enter a new todo!" 
          value = {item}
          onChange = {onChange}
        />
      </form>
    );
}

export default Create;