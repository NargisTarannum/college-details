'use client' // 👈 use it here
import React from "react";
import { useState } from 'react'

export default function AMUdetails(props) {
    return(
        <div>
            <p>No. of Subjects : {props.amuSubjects}</p>
            <p>No. of Liberary : {props.amuLiberaries}</p>
        </div>
    )
}