"use client";

import { useEffect, useRef } from 'react';
import { TweenMax } from 'gsap';
import _ from 'lodash';

const randomInRange = (max, min) => Math.floor(Math.random() * (max - min + 1)) + min;

const ACTIVE_PROBABILITY = 0;
const BASE_SIZE = 1;
const VELOCITY_INC = 1.01;
const VELOCITY_INIT_INC = 1.025;
const JUMP_VELOCITY_INC = 1.25;
const JUMP_SIZE_INC = 1.15;
const SIZE_INC = 1.01;
const RAD = Math.PI / 180;
const WARP_COLORS = [
  [197, 239, 247],
  [25, 181, 254],
  [77, 5, 232],
  [165, 55, 253],
  [255, 255, 255],
];

class Star {
  constructor() {
    this.STATE = {
      alpha: Math.random(),
      angle: randomInRange(0, 360) * RAD,
    };
    this.reset();
  }

  reset = () => {
    const angle = randomInRange(0, 360) * (Math.PI / 180);
    const vX = Math.cos(angle);
    const vY = Math.sin(angle);
    const travelled =
      Math.random() > 0.5
        ? Math.random() * Math.max(window.innerWidth, window.innerHeight) +
          Math.random() * (window.innerWidth * 0.24)
        : Math.random() * (window.innerWidth * 0.25);
    this.STATE = {
      ...this.STATE,
      iX: undefined,
      iY: undefined,
      active: travelled ? true : false,
      x: Math.floor(vX * travelled) + window.innerWidth / 2,
      vX,
      y: Math.floor(vY * travelled) + window.innerHeight / 2,
      vY,
      size: BASE_SIZE,
    };
  };
}

const generateStarPool = (size) => new Array(size).fill().map(() => new Star());

const JumpToHyperspace = () => {
  const canvasRef = useRef(null);
  const state = useRef({
    stars: generateStarPool(500),
    bgAlpha: 0,
    sizeInc: SIZE_INC,
    velocity: VELOCITY_INC,
    initiating: false,
    jumping: false,
    initiateTimestamp: undefined,
  });

  useEffect(() => {
    if (typeof window === 'undefined') return; // Ensure this code only runs on the client

    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const resetStars = () => {
      state.current.stars = generateStarPool(300);
      resizeCanvas();
    };

    const render = () => {
      const {
        bgAlpha,
        velocity,
        sizeInc,
        initiating,
        jumping,
        stars,
      } = state.current;

      // Clear the canvas
      context.clearRect(0, 0, window.innerWidth, window.innerHeight);

      if (bgAlpha > 0) {
        context.fillStyle = `rgba(31, 58, 157, ${bgAlpha})`;
        context.fillRect(0, 0, window.innerWidth, window.innerHeight);
      }

      const nonActive = stars.filter((s) => !s.STATE.active);
      if (!initiating && nonActive.length > 0) {
        nonActive[0].STATE.active = true;
      }

      for (const star of stars.filter((s) => s.STATE.active)) {
        const { active, x, y, iX, iY, iVX, iVY, size, vX, vY } = star.STATE;

        if (
          ((iX || x) < 0 ||
            (iX || x) > window.innerWidth ||
            (iY || y) < 0 ||
            (iY || y) > window.innerHeight) &&
          active &&
          !initiating
        ) {
          star.reset();
        } else if (active) {
          const newIX = initiating ? iX : iX + iVX;
          const newIY = initiating ? iY : iY + iVY;
          const newX = x + vX;
          const newY = y + vY;

          const caught =
            (vX < 0 && newIX < x) ||
            (vX > 0 && newIX > x) ||
            (vY < 0 && newIY < y) ||
            (vY > 0 && newIY > y);

          star.STATE = {
            ...star.STATE,
            iX: caught ? undefined : newIX,
            iY: caught ? undefined : newIY,
            iVX: caught ? undefined : iVX * VELOCITY_INIT_INC,
            iVY: caught ? undefined : iVY * VELOCITY_INIT_INC,
            x: newX,
            vX: star.STATE.vX * velocity,
            y: newY,
            vY: star.STATE.vY * velocity,
            size: initiating ? size : size * (iX || iY ? SIZE_INC : sizeInc),
          };

          let color = `rgba(255, 255, 255, ${star.STATE.alpha})`;
          if (jumping) {
            const [r, g, b] = WARP_COLORS[randomInRange(0, WARP_COLORS.length)];
            color = `rgba(${r}, ${g}, ${b}, ${star.STATE.alpha})`;
          }

          context.strokeStyle = color;
          context.lineWidth = size;
          context.beginPath();
          context.moveTo(star.STATE.iX || x, star.STATE.iY || y);
          context.lineTo(star.STATE.x, star.STATE.y);
          context.stroke();
        }
      }

      requestAnimationFrame(render);
    };

    const initiate = () => {
      if (state.current.jumping || state.current.initiating) return;
      state.current.initiating = true;
      state.current.initiateTimestamp = new Date().getTime();

      TweenMax.to(state.current, 0.25, { velocity: VELOCITY_INIT_INC, bgAlpha: 0.3 });

      for (const star of state.current.stars.filter((s) => s.STATE.active)) {
        star.STATE = {
          ...star.STATE,
          iX: star.STATE.x,
          iY: star.STATE.y,
          iVX: star.STATE.vX,
          iVY: star.STATE.vY,
        };
      }
    };

    const jump = () => {
      state.current.bgAlpha = 0;
      state.current.jumping = true;

      TweenMax.to(state.current, 0.25, { velocity: JUMP_VELOCITY_INC, bgAlpha: 0.75, sizeInc: JUMP_SIZE_INC });
      setTimeout(() => {
        state.current.jumping = false;
        TweenMax.to(state.current, 0.25, { bgAlpha: 0, velocity: VELOCITY_INC, sizeInc: SIZE_INC });
      }, 2500);
    };

    const enter = () => {
      if (state.current.jumping) return;
      const { initiateTimestamp } = state.current;
      state.current.initiating = false;
      state.current.initiateTimestamp = undefined;

      if (new Date().getTime() - initiateTimestamp > 600) {
        jump();
      } else {
        TweenMax.to(state.current, 0.25, { velocity: VELOCITY_INC, bgAlpha: 0 });
      }
    };

    const debouncedResize = _.debounce(resetStars, 250);
    
    canvas.addEventListener('mousedown', initiate);
    canvas.addEventListener('mouseup', enter);
    window.addEventListener('resize', debouncedResize);

    resizeCanvas();
    render();

    return () => {
      window.removeEventListener('resize', debouncedResize);
      canvas.removeEventListener('mousedown', initiate);
      canvas.removeEventListener('mouseup', enter);
    };
  }, []);

  return <canvas ref={canvasRef} />;
};

export default JumpToHyperspace;
