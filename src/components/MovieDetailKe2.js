import React , { Component } from 'react';
import { connect} from 'react-redux';
import {select_movie} from '../actions/index';


class MovieDetailKe2 extends Component {
    
    MovieClick = () =>{
        // axios.get('http://localhost:1997/movies')
        // .then((res)=>{
            
        //     console.log(res.data)
        // })
        this.props.select_movie(this.props.movie)
        console.log(this.props.movie)
    }
    render(){
        const {title , description , url  , image , id } = this.props.movie;
        return(
           
                <div  className="col-md-6 col-sm-6 portfolio-item">
           <a className="portfolio-link" data-toggle="modal" >
             <div className="portfolio-hover">
               <div className="portfolio-hover-content">
                 <i className="fas fa-plus fa-3x" />
               </div>
             </div>
             <img className="img-fluid" />
           </a>
           <div className="portfolio-caption">
             <h2>{title}</h2>
            
             <img src={image} width="350px"  />
             <h6>{description}</h6>
             <a href="#" onClick={this.MovieClick}>Deskripsi</a>
             
           </div>
            </div>
        )
    }
}

// const mapStateToProps = (state) =>{
//     return { movielist : state.movie }
// }

export default connect(null,{select_movie})(MovieDetailKe2);