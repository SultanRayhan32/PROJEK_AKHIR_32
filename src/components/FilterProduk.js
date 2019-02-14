import React , { Component } from 'react';
import axios from 'axios';
import {Button, Input,Nav,NavItem } from 'reactstrap';

class FilterProduk extends Component {

    state = { ListProduk : [] , FilterForProduk : [] , hanyabiasa : 'oe' , filterUtkTampung : [] }

    componentDidMount() {
        axios.get('http://localhost:1995/Pupuk')
        .then((res)=>{
            this.setState({ListProduk : res.data})
            // this.setState({FilterForProduk : res.data})
           
        })

        
    }

    renderListPopok = (res = this.state.ListProduk ) => {
        
        var listJSXPopok = res.map((item) =>{
        return (
            <div>
                <h1>{item.nama}</h1>
            </div>    
            
            )
        })
        return listJSXPopok;
      }

      filterListProduk = () => {
          
          var nama1 = this.refs.filter.value
          var renderFilter = this.state.ListProduk.filter((item)=>{
              return (item.nama.includes(nama1))
          })
          this.renderListPopok(renderFilter);
    }

    BtnGantiState = () =>{
        this.setState({ hanyabiasa : 'fjdjfdfds' })
        
        // if(this.state.FilterForProduk === nama1)
        // {
        //     this.setState({FilterForProduk : 'tes'})
        // }
    }
    
    


    
    render() {
        if(this.state.hanyabiasa === 'oe'){
            return(
                <div>
                    <Button onClick={this.BtnGantiState}  >CARI</Button>
                    {this.renderListPopok()}
                </div>
            )
        }
        return(
             <div>
            <input type="text" ref="filter"  id="filter" placeholder="cari file yang anda inginkan"></input>
            <Button onClick={this.filterListProduk}>CARI</Button>
            {this.renderListPopok()}
            
        </div>)
    }
}

export default FilterProduk;