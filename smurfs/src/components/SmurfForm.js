import React from 'react'
import { connect } from 'react-redux'

class SmurfForm extends React.Component {
    
    componentDidMount() {
        console.log('mounting form')
    }

    render() {
        return (
            <form>
                <label> Name:
                    <input />
                </label>
                <label> Age:
                    <input />
                </label>
                <label> Height:
                    <input />
                </label>
                <button>Submit Smurf</button>
            </form>
        )
    }
}

export default connect()(SmurfForm)