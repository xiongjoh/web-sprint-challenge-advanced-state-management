import React from 'react'
import { connect } from 'react-redux'

export default function Smurf({smurf}) {
    return (
        <div> {smurf.name} </div>
    )
}