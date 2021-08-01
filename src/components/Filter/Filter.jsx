//module
import React from 'react';
//styles
import style from'./Filter.module.css';

const Filter = ({ onChange, value }) => (
  <label className={style.label_filter}>
    Filter
    <input
      className={style.input_filter}
      value={value}
      type="text"
      name="filter"
      pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
      onChange={onChange}
    />
  </label>
);

export default Filter
