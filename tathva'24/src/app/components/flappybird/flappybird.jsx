"use client";

import { useEffect, useState } from "react";

function Flappybird({length, birdimage, pipeimage}) {

  const gravity = length/100;
  const gap = 2*length/ 5
  const jump = gap/4;
  const speed = Math.floor(length/70);
  const birdsize = length/20;
  const pipewidth = length/10;

  const [curSpeed, setCurSpeed] = useState(length);
  const [Started, setStarted] = useState(false);
  const [birdPos, setBirdPosition] = useState(length/2);
  const [objHeight, setObjHeight] = useState(0);
  const [pipePos, setPipePos] = useState(length);
  const [score, setScore] = useState(0);


  // to apply gravity onto the bird
  useEffect(() => {
    let timer;
    if (Started && birdPos < length - birdsize) {
      timer = setInterval(() => {
        setBirdPosition((birdPos) => birdPos + gravity);
      }, 24);
    }
    return () => clearInterval(timer);
  });

  //to keep the pipes moving
  useEffect(() => {
    let objval;
    if (Started && pipePos >= -pipewidth) {
      objval = setInterval(() => {
        setPipePos((pipePos) => pipePos - curSpeed);
      }, 24);

      return () => {
        clearInterval(objval);
      };
    } else{ 
      setPipePos(length);
      setObjHeight(Math.floor(Math.random() * (length - gap)));
      if (Started) setScore((score) => score + 1);

      setCurSpeed(speed + Math.floor(score / 4));
    }
  }, [Started, pipePos]);


  //checks for collisions
  useEffect(() => {
    let topObj = (birdPos >= 0) && (birdPos < objHeight);
    let bottomObj = (birdPos <= length) && (birdPos >= length - (length - gap - objHeight) - birdsize);

    if ( pipePos >= pipewidth && pipePos <= pipewidth + birdsize * 2 && (topObj || bottomObj)) {
      setStarted(false);
      setBirdPosition(length/2);
      setScore(0);
    }

    else if(birdPos >= length - birdsize){
      setStarted(false);
      setBirdPosition(length/2);
      setScore(0);
    }
  }, [Started, birdPos, objHeight, pipePos]);


  //handles click
  const handler = () => {
    if (!Started) {
      setStarted(true);
    } 
    else if (birdPos < birdsize) {
      setBirdPosition(0);
    }
    else {
      setBirdPosition((birdPos) => birdPos - jump);
    }
  };
  

  return (
    //outer box
    <div className="h-fit w-fit flex justify-center items-center bg-black relative">

      {/* score */}
      <span className="text-white z-10 text-4xl absolute top-[0]">
        Score: {score}
      </span>

      {/* upper pipe */}
      <div
        className="relative overflow-hidden border-2 border-black bg-[#7B6FFE]"  onClick={handler}
        style={{
          height: `${length}px`,
          width: `${length}px`,
          backgroundSize: `${length}px ${length}px`,
        }}
      >

        {/* start button */}
        {!Started ? (
          <div className="relative top-1/2 left-1/2 tranfrom -translate-x-1/2 -translate-y-1/2 bg-black text-white z-10 w-fit rounded-md p-2">
            CLICK ANYWHERE
          </div>
        ) : null}

        {/* upper pipe  */}
        <div
          className="absolute rotate-180 bg-center-top bg-black"
          style={{
            height: `${objHeight}px`,
            width: `${pipewidth}px`,
            left: `${pipePos}px`,
            top: `0px`,
            backgroundImage: `url(${pipeimage})`
          }}
        />

        {/* bird  */}
        <div
          className="absolute bg-[transparent] rounded-[50%] left-[25%]"
          style={{
            height: `${birdsize}px`,
            width: `${birdsize}px`,
            top: `${birdPos}px`,
          }}
        > 
          <img className="block w-[100%] h-auto" src={birdimage} alt="bird" />
        </div>

        {/* bottom pipe  */}
        <div
          className="absolute bg-center-bottom"
          style={{
            height: `${length - gap - objHeight}px`,
            width: `${pipewidth}px`,
            left: `${pipePos}px`,
            bottom: 0,
            backgroundImage: `url(${pipeimage})`
          }}
        />
      </div>
    </div>
  );
}

export default Flappybird;
