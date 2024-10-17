import React from 'react';
import TeamCard from '../team_card/TeamCard';
let heads = [
  {
    name: 'Rohith',
    desig: 'Lead',
  },
  {
    name: 'Devadath',
    desig: 'Lead',
  },
  
  {
    name: 'Devadath',
    desig: 'Lead',
  },
  {
    name: 'Devadath',
    desig: 'Lead',
  }
];

let seniors = [
  {
    name: 'Nigga',
    desig: 'Senior',
  },
  {
    name: 'Skibidibop',
    desig: 'Senior',
  },
  
  {
    name: 'polsagyipols',
    desig: 'Senior',
  },
  {
    name: 'bidyo',
    desig: 'Seniors',
  },
];

let juniors = [
  {
    name: 'Nigga',
    desig: 'Senior',
  },
  {
    name: 'Skibidibop',
    desig: 'Senior',
  },
  
  {
    name: 'polsagyipols',
    desig: 'Senior',
  },
  {
    name: 'bidyo',
    desig: 'Seniors',
  },
];

const Page = () => {
  return (
    <>
    <div className='flex justify-center flex-col'>
        <div className='flex justify-center'><img src="/team/header-heads.svg" className='block' /></div>
        <div className='flex justify-evenly m-10 flex-wrap '>
          {heads.map((el) => (
            <TeamCard className="mb-[3%]" details = {el} color="color1"/>
          ))}
        </div>
    </div>
    <div className='flex justify-center flex-col'>
        <div className='flex justify-center'><img src="/team/header-seniors.svg" className='block' /></div>
        <div className='flex justify-evenly m-10 flex-wrap '>
          {seniors.map((el) => (
            <TeamCard className="mb-[3%]" details = {el} color="color2"/>
          ))}
        </div>
    </div>
    <div className='flex justify-center flex-col'>
        <div className='flex justify-center'><img src="/team/header-juniors.svg" className='block' /></div>
        <div className='flex justify-evenly m-10 flex-wrap '>
          {juniors.map((el) => (
            <TeamCard className="mb-[3%]" details = {el} color="color3"/>
          ))}
        </div>
    </div>
    </>
  );
};

export default Page;