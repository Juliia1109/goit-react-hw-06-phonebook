import React from "react";
import PropTypes from 'prop-types';
import css from './ContactForm.module.css';
import { useState } from 'react';



export default function ContactForm ({ onSubmit }) {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

      const handleSubmit=e=> {
        e.preventDefault();
        onSubmit({ name: name, number: number });
          setName('');
          setNumber('');
      }

      const handleChange= e =>{
        const { name, value } = e.target;
   
        switch (name) {
          case 'name':
            setName(value);
            break;
    
          case 'number':
            setNumber(value);
            break;
    
          default:
            break;
        }
      };
      
        return (
        <form onSubmit={handleSubmit} className={css.form}>
    <label className={css.label}>
         Name
     <input
         type="text"
         name="name"
         value={ name }
         onChange={handleChange}
         className={css.input}
         pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
         title="Name may contain only letters, apostrophe, dash        and spaces. For example Adrian, Jacob Mercer, Charles de        Batz de Castelmore d'Artagnan"
         required
       />
    </label>
    <label className={css.label}>
         Number
    <input
         type="tel"
         name="number"
         value={ number }
         onChange={handleChange}
         className={css.input}
         pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.       \s]?\d{1,4}[-.\s]?\d{1,9}"
         title="Phone number must be digits and can contain        spaces, dashes, parentheses and can start with +"
         required
    />
     </label>
     <button className={css.btn}>Add contact</button>
    </form>
        )
      }


ContactForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
}