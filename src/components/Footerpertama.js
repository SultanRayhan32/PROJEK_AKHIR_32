import React , { Component } from 'react';
import { connect } from 'react-redux';

class Footerpertama extends Component {
    render() {
        return (
            <div>
              <h4>{this.props.pikachu}</h4>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{pikachu : state.pikachu}
}

export default connect(mapStateToProps)(Footerpertama);