//module
import React from 'react';
//component
//style
import style from './HomeView.module.css'

const HomeView = () => (
    <div className={style.container}>
     <h1 className={style.title}>Hello,
   <span className={style.span}>Alien</span>?!  
      <span className={style.span} role="img" aria-label="Иконка приветствия">
         💁‍♀️
      </span>
    </h1>
    <p>Let's <span className={style.span}>Sign In </span> and you will see your pocket Phonebook mady by me!</p>
    <p>All look strange but it's only 
      <span className={style.span}>pre-alfa-beta </span>version<span className={style.span}>0.02</span>.</p>


    </div>
)

export default HomeView