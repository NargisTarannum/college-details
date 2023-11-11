'use client' // 👈 use it here
import React from "react";
import JMIdetails from './JMIdetails'
import JNUdetails from './JNUdetails'
import AMUdetails from './AMUdetails'
import './styles.css'

export default function CollegeDetails(props) {

    return(
        <div className="details">
            {props.name === 'jmi' ? <JMIdetails jmiSubjects = {5} jmiLiberaries={1}/> : (props.name === 'jnu' ? <JNUdetails  jnuSubjects = {7} jnuLiberaries={1}/> : <AMUdetails amuSubjects={20} amuLiberaries={2}/>)}
        </div>
    )
}