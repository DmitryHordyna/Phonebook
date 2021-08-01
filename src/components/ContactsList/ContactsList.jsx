//module
import React from 'react';

//module

//styles
import style from './ContactsList.module.css';

const ContactsList = ({ contacts, onDeleteContact }) => (
  <ul className={style.contacts_list}>
    {contacts.map(({ name, id, number }) => (
      <li key={id} className={style.contacts_item}>
        <span className={style.span}>☆  </span> <p className={style.contacts_item_title}>
          {name} : {number}
        </p>
        <button
          className={style.contacts_item_button}
          type="button"
          onClick={() => onDeleteContact(id)}
        >
          X
        </button>
      </li>
    ))}
  </ul>
);

export default ContactsList