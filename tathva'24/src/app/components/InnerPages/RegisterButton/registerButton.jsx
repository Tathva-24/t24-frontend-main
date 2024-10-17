import React from 'react';
import styles from './registerButton.module.css';

const Button = ({ colorOne, colorTwo, colorThree }) => {
  return (
    <button className={`w-[90%] font-pricedown border-4 border-white bg-black 2xl:p-10 p-3 xl:p-4 font-bold rounded-[12px] md:rounded-[30px] ${styles.gta}`}
      style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)' }}
    >
      <span style={{ color: colorOne }}>Re</span>
      <span style={{ color: colorTwo }}>gi</span>
      <span style={{ color: colorThree }}>ste</span>
      <span style={{ color: colorTwo }}>r n</span>
      <span style={{ color: colorOne }}>ow</span>
    </button>
  );
};

export default Button;
