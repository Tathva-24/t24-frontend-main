import React from 'react';
import styles from './registerButton.module.css';

const Button = ({ colorOne, colorTwo, colorThree }) => {
  return (
    <button className={`border-4 border-white bg-black text-5xl font-bold sm:py-2  lg:p-10 rounded-[12px] md:rounded-[30px] ${styles.gta} transition-all`}>
        <span style={{ color: colorOne, fontSize: 'clamp(1rem, 5vw, 3rem)'}}>Re</span>
        <span style={{ color: colorTwo, fontSize: 'clamp(1rem, 5vw, 3rem)' }}>gi</span>
        <span style={{ color: colorThree, fontSize: 'clamp(1rem, 5vw, 3rem)' }}>ste</span>
        <span style={{ color: colorTwo, fontSize: 'clamp(1rem, 5vw, 3rem)' }}>r </span>
        <span style={{ color: colorTwo, fontSize: 'clamp(1rem, 5vw, 3rem)' }}>n</span>
        <span style={{ color: colorOne, fontSize: 'clamp(1rem, 5vw, 3rem)' }}>ow</span>
    </button>
  );
};

export default Button;
