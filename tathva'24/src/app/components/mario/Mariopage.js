"use client"
import React, { useEffect } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import styles from '../mario/mario.module.css';  

function Mariopages() {
  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1 });
  
    
    gsap.fromTo(
      `.${styles.turtle}`,
      { x: 40 },
      { 
        x: 0, 
        duration: 1,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      }
    ); 
    
   
    tl.to(`.${styles.marioman}`, {
      y: -100,
      duration: 1,
      ease: "power2.out",
    })
    .to(`.${styles.marioman}`, {
      y: 0, 
      duration: 0.1,
      ease: "power1.out",
      onComplete: () => {
       
        gsap.to(`.${styles.turtle}`, {
          scale: 0.8, 
          duration: 0.1,
          ease: "power2.out",
        });
  
        
        gsap.fromTo(
          `.${styles.UP}`,
          { opacity: 0, scale: 1, y: -100 },
          { 
            opacity: 1,
            scale: 1.5,
            y: -200,
            duration: 1,
            ease: "power3.out",
            onComplete: () => {
             
              gsap.to(`.${styles.UP}`, {
                opacity: 0,
                duration: 0.5,
                ease: "power1.out",
                delay: 0.5,
              });
  
              
              gsap.to(`.${styles.turtle}`, {
                scale: 1, 
                duration: 0.3,
                ease: "power2.inOut",
              });
            }
          }
        );
      }
    })
  
    .to(`.${styles.marioman}`, {
      y: -40,
      duration: 0.3,
      ease: "power1.out",
    })
    .to(`.${styles.marioman}`, {
      y: 0, 
      duration: 0.3,
      ease: "power1.in",
    });
  
  }, []);
  
  
  

  return (
    <div className="Main-container relative h-screen w-731px bg-black">
      <div className="absolute bottom-0 right-0 mr-0 mb-0">
        <Image src="/mario-img/mario-removebg-preview.png" width={800} height={500} alt="mario background" />
        <div>
          <div className={`${styles.marioMan} max-w-max w-auto absolute`}>
            <Image src="/mario-img/marioman-removebg-preview.png" width={60} height={60} alt="marioman" className={styles.marioman} />
            <Image src="/mario-img/turtle-removebg-preview (1).png" width={50} height={45} alt="turtle" className={styles.turtle} />
            <Image src="/mario-img/1up-removebg-preview.png" width={50} height={50} alt="UP" className={styles.UP} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mariopages;
