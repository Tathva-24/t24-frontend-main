import React from 'react';
import styles from './registerButton.module.css';

const Button = ({ colorOne, colorTwo, colorThree }) => {
  return (
    <button className={`border-4 border-white bg-black text-5xl font-bold p-10 rounded-[12px] md:rounded-[30px] ${styles.gta}`}>
      <span style={{ color: colorOne }}>Re</span>
      <span style={{ color: colorTwo }}>gi</span>
      <span style={{ color: colorThree }}>ste</span>
      <span style={{ color: colorTwo }}>r n</span>
      <span style={{ color: colorOne }}>ow</span>
    </button>
  );
};

export default Button;
