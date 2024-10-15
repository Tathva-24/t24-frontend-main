import React from 'react';
import styles from './registerButton.module.css';

const Button = ({ colorOne, colorTwo, colorThree }) => {
  return (
    <button className={`font-pricedown border-4 border-white bg-black 2xl:p-10 xl:text-[4.1rem] lg:text-[3.1rem] md:text-[4.1rem] text-[3.5rem] p-3 xl:p4 font-bold rounded-[12px] md:rounded-[30px] ${styles.gta}`}>
      <span style={{ color: colorOne }}>Re</span>
      <span style={{ color: colorTwo }}>gi</span>
      <span style={{ color: colorThree }}>ste</span>
      <span style={{ color: colorTwo }}>r n</span>
      <span style={{ color: colorOne }}>ow</span>
    </button>
  );
};

export default Button;
