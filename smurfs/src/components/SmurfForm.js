import React from 'react'
import { connect } from 'react-redux'

import { changeForm, submitSmurf } from '../store/actions'

class SmurfForm extends React.Component {
    
    componentDidMount() {
        console.log('mounting form')
    }

    render() {
        return (
            <form onSubmit={() => this.props.submitSmurf(this.props.formValues)}>
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
            </form>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        formValues: state.formReducer
    }
} 

export default connect( mapStateToProps, {changeForm, submitSmurf})(SmurfForm)