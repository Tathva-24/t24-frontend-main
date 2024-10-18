import React from 'react';
import TeamCard from '../components/team_card/TeamCard';
let heads = [
  {
    name: 'Arun Nats',
    desig: 'Backend',
    img: "/team/arun.jpeg"
  },
  {
    name: 'Vinit Keshri',
    desig: 'Frontend',
    img: "/team/vinit.jpg"
  },
  {
    name: 'Nirmal Fageria',
    desig: 'Frontend',
    img :  "/team/niram_f.jpg"
  },
  {
    name: 'Aditya Pandey',
    desig: 'App Dev',
    img : "/team/pandey.jpeg"
  },
  { 
    name: 'Aarizz',
    desig: 'UI/UX',
    img : "/team/aariz.jpg"
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
    <div className='flex justify-center flex-col bg-black'>
        <div className='flex justify-center'><img src="/team/header-heads.svg" className='block' /></div>
        <div className='flex justify-evenly m-10 flex-wrap '>
          {heads.map((el) => (
            <TeamCard className="mb-[3%]" details = {el} color="color1"/>
          ))}
        </div>
    </div>
    <div className='flex justify-center flex-col bg-black'>
        <div className='flex justify-center'><img src="/team/header-seniors.svg" className='block' /></div>
        <div className='flex justify-evenly m-10 flex-wrap '>
          {seniors.map((el) => (
            <TeamCard className="mb-[3%]" details = {el} color="color2"/>
          ))}
        </div>
    </div>
    <div className='flex justify-center flex-col bg-black'>
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