// import Image from 'next/image'
'use client'
import './styles.css'

import React from "react";
import { useState } from 'react'
import Collegedetails from './CollegeDetails'

export default function College() {
      const [collegeName, setCollegeName] = useState('select');
      const handleSelectChange = (event) => {
        setCollegeName(event.target.value);
      };
          return (
            <div className = "container">
              <form>
            <div> 
            <label>
                Select College Name:
                <select  value={collegeName} onChange={handleSelectChange} name="selectedCollege" >
                <option value="select" disabled>Select</option>
                  <option value="jmi">Jamia Millia Islamia University</option>
                  <option value="jnu">Jawaharlal Nehru University</option>
                  <option value="amu">Aligarh Muslim University</option>
                </select>
              </label>
           {collegeName !== 'select' ? <Collegedetails name = {collegeName}/> : ''}
           </div>
           </form>
           </div>
          );
    }
    
    function Input(props) {
      const {value, handleOnChange} = props;

      return (
        <input value={value} onChange={(e) => handleOnChange(e.target.value)}/>
      );
    }
  

