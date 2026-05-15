import React from 'react';
import styles from "./Button.module.scss";

export default function Button({ children, variant = "primary", ...props }) {
  return (
    <button className={`${styles.button} ${styles[variant]}`} {...props}>
      {children}
    </button>
  );
}