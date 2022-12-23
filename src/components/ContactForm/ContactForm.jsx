import React from "react";
import css from './ContactForm.module.css';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from "redux/contactSlice";
import { getContacts } from "redux/contactSelectors";
import { nanoid } from 'nanoid';



export default function ContactForm ( ) {
    const dispatch = useDispatch();
    const contacts = useSelector(getContacts);
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

      const handleSubmit=e=> {
        e.preventDefault();
        const contactEl = {
          id: nanoid(),
          name: name,
          number: number,
        };
        if (contacts.find(contact => contact.name === contactEl.name)) {
                alert(`${name} is already in contacts`);
                  return;
             }
          dispatch(addContact(contactEl));
          setName('');
          setNumber('');
      }

      const handleChange  = e => {
        const { name, value } = e.target;
        switch (name) {
          case 'name':
            setName(value);
            break;
          case 'number':
            setNumber(value);
            break;
          default:
            return;
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

