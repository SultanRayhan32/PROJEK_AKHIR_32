import React from "react";
import Pagination from "react-pagination-library";
import {connect} from 'react-redux';
import {TesFunction} from '../actions'
// import "react-pagination-library/build/css/index.css"; //for css
 
class App extends React.Component {
  state = {
    currentPage: 1
  };
  changeCurrentPage = numPage => {
    this.setState({ currentPage: numPage });
    //fetch a data
    //or update a query to get data
  };

  Jalankan = () =>{
    this.props.TesFunction(this.state.currentPage)
  }

  render() {
    return (
      <div>
        <Pagination
          currentPage={this.state.currentPage}
          totalPages={5}
          changeCurrentPage={this.changeCurrentPage}
          theme="bottom-border"
        />
        <h2>current Page:{this.state.currentPage}</h2>
        
        <br/><br/><br/><br/>
       <h1><center>{this.props.paging}</center></h1> 
      </div>
    );
  }
}

const mapStateToProps = (state) => {

  return {paging : state.paging};
}
export default connect(mapStateToProps , {TesFunction}) (App);