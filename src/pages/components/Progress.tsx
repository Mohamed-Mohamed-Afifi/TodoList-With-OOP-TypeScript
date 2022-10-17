import React, { useEffect, useState } from 'react'
import {
    CircularProgressbar,
    CircularProgressbarWithChildren,
    buildStyles
  } from "react-circular-progressbar";
  import "react-circular-progressbar/dist/styles.css";
  import "../../styles/main.css"
  // Animation
import { easeQuadInOut}  from "d3-ease";
import AnimatedProgressProvider from './Progressbar/AnimatedProgressProvider';
import ChangingProgressProvider from './Progressbar/ChangingProgressProvider';

// Radial separators
import RadialSeparators from './Progressbar/RadialSeparators';
const Progress = () => {
  let [Per,setPer]=useState<number>(0)
  useEffect(()=>{
    setTimeout(()=>{
      setPer(60)
    },1000)
  },[Per])
  return (
    <div>
   <ChangingProgressProvider values={[0, 20, 40, 60, 80, 100]}>
        {(percentage:unknown) => (
          <CircularProgressbar value={Per} text={`${Per}%`} />
        )}
      </ChangingProgressProvider>
    </div>
  )
}

export default Progress