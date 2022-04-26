import React from "react";
import styles from "./Button.module.css";


const backToNav = ()=> {
  console.log('click')
  
}

const Button = () => {
  return <button className={styles.button} oncClick={backToNav}> Back to Top </button>;
};

export default Button;
