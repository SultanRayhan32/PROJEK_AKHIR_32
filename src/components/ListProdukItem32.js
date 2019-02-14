import React , { Component } from 'react';
import { connect } from 'react-redux';
import { select_produk } from '../actions/index';

class ListProdukItem32 extends Component{

    onCLickProduk = () =>{
        this.props.select_produk(this.props.produk)
    }

    render(){
        var { nama , image , harga , deskripsi } = this.props.produk;
        return(<div onClick={this.onCLickProduk} className={`col-md-4 col-sm-6 portfolio-item`}>
        <div className="portfolio-link" data-toggle="modal">
            <div className="portfolio-hover">
                <div className="portfolio-hover-content">
                    <i className="fas fa-plus fa-3x" />
                </div>
            </div>
            <img className="img-fluid" src={`http://localhost:2019/${image}`} alt="ferguso" />
        </div>
        <div className="portfolio-caption">
            <h4>{nama}</h4>
            <p className="text-muted">{deskripsi}</p>
            <h4>Rp. {harga}</h4>
        </div>
    </div>  )
    }
}

export default  connect(null , {select_produk})(ListProdukItem32);