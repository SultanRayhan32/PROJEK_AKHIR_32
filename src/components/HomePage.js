import React , { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import ListProdukItem32 from './ListProdukItem32';
import TesPagination from './TesPagination';
import Carousel from './Carousel32'

class HomePages extends Component {

    state = { ListProduk : [] , SearchListProduk : [] , ListKategori : [] }
    
    componentDidMount() {
        axios.get('http://localhost:2019/produk/showproduk')
        .then((res) => {
            this.setState({ ListProduk : res.data , SearchListProduk : res.data  })
        })

        axios.get('http://localhost:2019/kategori/getAllKategori')
        .then((res)=>{
            this.setState({ ListKategori : res.data })
            console.log(res.data)
        })
        .catch((err)=>{
            console.log(err)
        })
        
    }

    SelectOptionAllKategori = () =>{
      var c = this.state.ListKategori.map((item)=>{
          return(<option>{item.nama}</option>)
      })
      return c;
  }

    onBtnSearchClick = () => {
      var nama = this.refs.searchNama.value;
      var merk = this.refs.searchKategori.value;
      // var hargaMin = parseInt(this.refs.hargaMinSearch.value);
      // var hargaMax = parseInt(this.refs.hargaMaxSearch.value);

      var arrSearch = this.state.SearchListProduk.filter((item) => {
          return item.kategori.includes(merk) 
                 && item.nama.toLowerCase().includes(nama.toLowerCase())
      })

      this.setState({ ListProduk : arrSearch })
  }

    onCLickProduk  = () => {
        this.props.select_produk(this.state.ListProduk)
    }

    renderListPopok = () => {
        var listJSXProduk = this.state.ListProduk.map((item) => {
            return(
                <ListProdukItem32 produk={item} />
        )
        })
        return listJSXProduk
    }

    BtnCLickOE = (awal) =>{
        
      console.log(awal)
      axios.get(`http://localhost:2019/produk/paging?awal=${awal}`)
      .then((res)=>{
          this.setState({ListProduk : res.data})
      })
  }

    render(){
        if(this.props.idProduk !== 0){
           return <Redirect to="/detail32" />
        }
        return(
          <div>
            <section className="bg-light" id="portfolio">
            <center>
            <Carousel/>            
            </center> 
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-12 text-center">
                  {/* <h2 className="section-heading text-uppercase">List Popok Goreng</h2>
                  <h3 className="section-subheading text-muted">Best Popok</h3> */}
                </div>
              </div>
              <div className="row">
                <div className="col-4">
                    <input type="text" ref="searchNama" className="form-input" placeholder="Cari File Yang Anda Inginkan" />
                    <select ref="searchKategori">
                        {this.SelectOptionAllKategori()}
                    </select>
                     
                    <input type="button" value="CARI" className="btn btn-success" onClick={this.onBtnSearchClick} />
                </div>
              </div>
              <br/><br/><br/>
              <div className="row">
                {this.renderListPopok()}
                {/* <h1>{this.props.produk}</h1>
                <h1>{this.props.harga}</h1>
                <h1>{this.props.id}</h1> */}
                {/* <div className="col-md-4 col-sm-6 portfolio-item">
                  <a className="portfolio-link" data-toggle="modal">
                    <div className="portfolio-hover">
                      <div className="portfolio-hover-content">
                        <i className="fas fa-plus fa-3x" />
                      </div>
                    </div>
                    
                  </a>
                    </div> */}
                </div>
            </div>
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
            {/* <h1>{this.props.img}</h1> */}
            {/* <img className="img-fluid" src="img/portfolio/02-thumbnail.jpg" alt /> */}
          </section>
          </div>
        )
    }
}

const mapStateToProps = (state) => {

    return {produk : state.produk.nama , harga : state.produk.harga, idProduk : state.produk.id};
}


export default  connect(mapStateToProps , {}) (HomePages);