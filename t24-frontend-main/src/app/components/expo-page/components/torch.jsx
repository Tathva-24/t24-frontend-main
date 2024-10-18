"use client"
import React,{useEffect} from 'react'
import gsap from 'gsap'

const Torch = () => {

    useEffect(()=>{
        gsap.to('.circletext',{
            duration: 15,
            rotation: 360,
            ease: "linear",
            repeat: -1
        })
    })

    return (
        <section className="w-fit bg-transparent relative">

            <div className="relative w-[125px] h-[125px]">

                <img src="/circletext.webp" className="circletext block absolute inset-0 z-20" alt="text" height="125" width="125"/>
                
                <div className="absolute inset-0 flex justify-center items-center">
                    <img src="/torch-light.png" alt="torchlight" className="absolute top-[-10%] z-0"/>
                    <img src="/torch.webp" alt="torch" height="45" width="40" className="relative z-10"/>
                </div>

            </div>

        </section>
    )
}

export default Torch
