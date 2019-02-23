import React , {Component} from 'react';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import {connect} from 'react-redux';
import {TesFunction} from '../actions'

class Example extends Component {
  state = { anjir : 9 }
    BtnCLickOE = (awal) =>{
        this.props.TesFunction(awal)
        this.setState({anjir : awal})
    }
  render() {
    return (
        <div>
            <br/><br/><br/><br/><br/>
            <Pagination aria-label="Page navigation example">
      <PaginationItem>
          <PaginationLink first href="#" />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink previous href="#" />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" onClick={()=> this.BtnCLickOE(0)}>
            1
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" onClick={()=> this.BtnCLickOE(5)}>
            2
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" onClick={()=> this.BtnCLickOE(10)}>
            3
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" onClick={()=> this.BtnCLickOE(15)}>
            4
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" onClick={()=> this.BtnCLickOE(20)}>
            5
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink next href="#" />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink last href="#" />
        </PaginationItem>
      </Pagination>
        </div>
      
    );
  }
}

export default connect(null , {TesFunction})(Example);