import React from 'react'
import { connect } from 'react-redux'

import { fetchSmurf } from '../store/actions'

import Smurf from './Smurf'

class SmurfList extends React.Component {

    componentDidMount() {
        this.props.fetchSmurf()
    }

    render() {
        return(
            <div>Hi
                <p style={{color:"red"}}>{this.props.error && this.props.error}</p>
                {(this.props.SmurfsData)
                && this.props.SmurfsData.map(smurf => <Smurf key={smurf.id} smurf={smurf}/>)
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isLoading: state.smurfReducer.isLoading,
        SmurfsData: state.smurfReducer.smurfs,
        error: state.smurfReducer.error,
    }
}

export default connect(mapStateToProps, {fetchSmurf})(SmurfList)