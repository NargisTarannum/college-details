'use client' // 👈 use it here
import React from "react";
import { useState } from 'react'

export default function JNUdetails(props) {
    return(
        <div>
            <p>No. of Subjects : {props.jnuSubjects}</p>
            <p>No. of Liberary : {props.jnuLiberaries}</p>
        </div>
    )
}