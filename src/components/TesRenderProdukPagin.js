import React , { Component } from 'react';
import axios from 'axios';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import Oe from './PaginationReactStrap';
import {connect} from 'react-redux';

class TesRenderProduk extends Component{

    state = { List : []  }

    componentDidMount(){
        var awal = this.props.paging;
        console.log(awal)
        axios.get(`http://localhost:2019/trx/getAllTransaksi?awal=5`)
        .then((res)=>{
            this.setState({List : res.data})
        })
    }
    BtnCLickOE = (awal) =>{
        
        console.log(awal)
        axios.get(`http://localhost:2019/trx/getAllTransaksi?awal=${awal}`)
        .then((res)=>{
            this.setState({List : res.data})
        })
    }
    renderAll = () =>{
        var x = this.state.List.map((item)=>{
            return(<tr>
                <th>{item.id}</th>
                <th>{item.idUser}</th>
                <th>{item.status}</th>
                <th>{item.tgltransaksi}</th>
                <th>{item.totalProduk}</th>
            </tr>)
        })
        return x;
    }

    render(){
        return(<div>
            <br/><br/><br/><br/><br/><br/>
            <table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>idUser</th>
                        <th>status</th>
                        <th>tanggal</th>
                        <th>Total Produk</th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderAll()}
                </tbody>
            </table>
            <br/><br/><br/><br/><br/><br/>
            {this.props.paging}
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
        </div>)
    }
}

const mapStateToProps = (state) => {

    return {paging : state.paging};
  }

export default connect(mapStateToProps,{}) (TesRenderProduk);