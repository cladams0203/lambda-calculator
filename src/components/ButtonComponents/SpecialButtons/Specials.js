import React, { useState } from "react";
import { specials } from '../../../data.js';
import SpecialButton from './SpecialButton.js';
//import any components needed

//Import your array data to from the provided data file

const Specials = (props) => {
  // STEP 2 - add the imported data to state
  const [specialState, setSpecialState] = useState(specials);
  return (
    <div className='special-container'>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
       {specialState.map((item, i) => {
         return <SpecialButton 
         special={item} 
         setDisplay={props.setDisplay}
         key={i}
         />
       })}
    </div>
  );
};

export default Specials;