import React from 'react'
import { connect } from 'react-redux'

import { changeForm, submitSmurf, fetchSmurf } from '../store/actions'

class SmurfForm extends React.Component {
    
    componentDidMount() {
        console.log('mounting form')
    }

    handleSubmit(event) {
        event.preventDefault()
    }

    render() {
        return (
            <form onSubmit={(e) => {
                // debugger
                e.preventDefault()
                this.props.submitSmurf(this.props.formValues)
                this.props.fetchSmurf()
                }}>
                <label> Name:
                    <input 
                    type='text'
                    name='name'
                    value={this.props.formValues.name}
                    onChange={this.props.changeForm}
                    />
                </label>
                <label> Age:
                    <input 
                    type='text'
                    name='age'
                    value={this.props.formValues.age}
                    onChange={this.props.changeForm}
                    />
                </label>
                <label> Height:
                    <input 
                    type='text'
                    name='height'
                    value={this.props.formValues.height}
                    onChange={this.props.changeForm}
                    />
                </label>
                <button>Submit Smurf</button>
                <p style={{color:'blue'}}>{this.props.formValues.error && this.props.formValues.error}</p>
            </form>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        formValues: state.formReducer
    }
} 

export default connect( mapStateToProps, {changeForm, submitSmurf, fetchSmurf})(SmurfForm)