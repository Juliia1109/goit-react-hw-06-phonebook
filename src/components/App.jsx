import React from 'react';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import css from './App.module.css';

export function App () {
    return (
      <div>
      <h1 className={css.text}>Phonebook</h1>
      <ContactForm  />
      <h2  className={css.text}>Contacts</h2>
      <Filter />
      <ContactList />
      </div>
    );
  }


