import React from 'react';
import styles from './registerButton.module.css'

const Button = ({ colorOne, colorTwo, colorThree, colorFour }) => {
  return (
    <button className="border-4 border-white bg-black text-3xl font-bold p-10 rounded-3xl">
      <span className={` text-[${colorOne}]`}>Re</span>
      <span className={` text-[${colorTwo}]`}>gi</span>
      <span className={` text-[${colorThree}]`}>ster</span>
      <span className={` text-[${colorFour}]`}> now</span>
    </button>
  );
};

export default Button;
