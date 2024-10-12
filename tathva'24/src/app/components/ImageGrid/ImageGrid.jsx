import React from 'react'
import style from './ImageGrid.module.css'

const ImageGrid = () => {

  const num = "01"

  return (
    <div>
      <div className="px-16 py-5 rounded-max w-[60%] bg-white h-[500px] rounded-[26px]">
        <div className="top relative h-max w-full  border-b-2 border-black ">
          <div className={`${style.about} absolute left-0 top-0 text-9xl text-black `}>{num}</div>
          <div className={`${style.about} absolute right-0 text-6xl top-0 text-black`}>About</div>
        </div>

        <div className="bottom">
          <div className="corner h-[115px] w-[150px]  absolute left-0 bottom-0 rounded" style={{  "clip-path" : "polygon(10% 0, 90% 0, 100% 10%, 100% 90%, 90% 100%, 10% 100%, 0 90%, 0 10%)" }}></div>
        </div>
        
      </div>
    </div>
  )
}

export default ImageGrid
