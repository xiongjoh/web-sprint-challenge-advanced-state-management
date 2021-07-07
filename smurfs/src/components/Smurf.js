import React from 'react'
import { connect } from 'react-redux'

export default function Smurf({smurf}) {
    return (
        <div> 
            <h2>{smurf.name}</h2>
            <p>height: {smurf.height}</p>
            <p>age: {smurf.age}</p>
        </div>
    )
}