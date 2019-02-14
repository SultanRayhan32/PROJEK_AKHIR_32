import React , { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import ListProdukItem32 from './ListProdukItem32'

class ListProduk extends Component {

    state = { ListProduk : [] }
    
    componentDidMount() {
        axios.get('http://localhost:2019/produk/showproduk')
        .then((res) => {
            this.setState({ ListProduk : res.data  })
        })
        
    }

    onCLickProduk  = () => {
        this.props.select_produk(this.state.ListProduk)
    }

    renderListPopok = () => {
        var listJSXPopok = this.state.ListProduk.map((item) => {
            return(
                <ListProdukItem32 produk={item} />
        )
        })
        return listJSXPopok
    }

    render(){
        if(this.props.idProduk !== 0){
           return <Redirect to="/detail32" />
        }
        return(
            <section className="bg-light" id="portfolio">
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-12 text-center">
                  <h2 className="section-heading text-uppercase">List Popok Goreng</h2>
                  <h3 className="section-subheading text-muted">Best Popok</h3>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12 text-center">
                    <input type="text" ref="searchNama" className="form-input" placeholder="Cari File Yang Anda Inginkan" />
                    <select ref="searchMerk">
                        <option value="">All Merk</option>
                        <option>Spetnaz</option>
                        <option>Air Soft Company</option>
                        <option>Corazon</option>
                    </select>
                     Harga :
                    <input type="number" ref="minSearch" defaultValue="0" /> - <input type="number" ref="maxSearch" defaultValue="9000000" />
                    <input type="button" value="CARI" className="btn btn-success" onClick={this.onBtnSearchClick} />
                </div>
              </div>
              <br/><br/><br/>
              <div className="row">
                {this.renderListPopok()}
                {/* <h1>{this.props.produk}</h1>
                <h1>{this.props.harga}</h1>
                <h1>{this.props.id}</h1> */}
                <div className="col-md-4 col-sm-6 portfolio-item">
                  <a className="portfolio-link" data-toggle="modal">
                    <div className="portfolio-hover">
                      <div className="portfolio-hover-content">
                        <i className="fas fa-plus fa-3x" />
                      </div>
                    </div>
                    {/* <img className="img-fluid" src="img/portfolio/02-thumbnail.jpg" alt /> */}
                  </a>
                    </div>
                </div>
            </div>
            {/* <h1>{this.props.img}</h1> */}
          </section>
        )
    }
}

const mapStateToProps = (state) => {

    return {produk : state.produk.nama , harga : state.produk.harga, idProduk : state.produk.id};
}


export default  connect(mapStateToProps , {}) (ListProduk);