'use client' // 👈 use it here
import React from "react";
import { useState } from 'react'

export default function JMIdetails(props) {
    return(
        <div>
            <p>No. of Subjects : {props.jmiSubjects}</p>
            <p>No. of Liberary : {props.jmiLiberaries}</p>
        </div>
    )
}