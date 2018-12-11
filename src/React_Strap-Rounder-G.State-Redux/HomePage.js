import React , { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

class HomePage extends Component {
    state = { listpopok : [] }
    componentDidMount() {
        axios.get('http://localhost:1999/Pupuk')
        .then((res) => {
            console.log(res.data)
            // this.setState({ listpopok : res.data })
        })
    }

    // renderListPopok = () => {
    //     var listJSXPopok = this.state.listpopok.map((item) =>{
    //         return 
    //         (
    //             <div>
    //                 <h3>{item.name}</h3>
    //                 <p>{item.harga}</p>
    //             </div>
    //         )
    //     })
    //     return listJSXPopok;
    // }
    render() {
        return(
            <div>
                <h1>Ini Home Page</h1>
                {/* {this.renderListPopok()} */}
                <h1>{this.props.pikachu}</h1>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return{pikachu : state.pikachu}
}

export default connect(mapStateToProps)(HomePage);