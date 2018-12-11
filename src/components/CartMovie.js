import React , { Component } from 'react';
import { connect } from 'react-redux';
import queryString from 'query-string';
import axios from 'axios';
import { select_movie} from '../actions/index';

class CartMovie extends Component {
    componentDidMount() {
        var params = queryString.parse(this.props.location.search)
        var popokId = params.movieid
        axios.get(`http://localhost:1997/movies/${popokId}`)
            .then((res)=>{
                this.props.select_movie(res.data)
                console.log(res.data)
            }).catch((err)=>{
                console.log(err)
            })
    }
    render(){
        var { title , description , url  , image  , id  } = this.props.movielist
        console.log(this.props.movielist)
        return(
            // <div>
            //     <br/><br/><br/><br/><br/>
            //     <h1>{title}</h1>
            //     <img src={image}></img>
            // </div>
            
            <div className="container-fluid">
            <br/><br/><br/><br/><br/>
                <div>
                    <div className="col-3">
                        <img alt={image} src={image} className="img-responsive" style={{width : '500px'}} />
                    </div>
                    <div className="col-8">
                        <div className="row">
                            <h1>{title}</h1>
                        </div>
                       <div className="row">
                            <h5>{description}</h5>
                        </div>
                    </div>
                </div>
                <div className="col-12">
                    <div className="row">
                        <table className="table">
                            <tr>
                                <center>
                                    <td><button className="btn btn-success" ref="LOL">A1</button></td>
                                    <td><button className="btn btn-success">A2</button></td>
                                    <td><button className="btn btn-success">A3</button></td>
                                    <td><button className="btn btn-success">A4</button></td>
                                    <td><button className="btn btn-success">A5</button></td>
                                </center>
                            </tr>
                            <tr>
                                <center>
                                    <td><button className="btn btn-success">B1</button></td>
                                    <td><button className="btn btn-success">B2</button></td>
                                    <td><button className="btn btn-success">B3</button></td>
                                    <td><button className="btn btn-success">B4</button></td>
                                    <td><button className="btn btn-success">B5</button></td>
                                </center>
                            </tr>
                        </table>
                    </div>
                </div>
                
            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    return{movielist : state.movie}
}

export default connect(mapStateToProps,{select_movie})(CartMovie);