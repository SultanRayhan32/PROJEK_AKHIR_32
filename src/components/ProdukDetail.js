import React , { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import queryString from 'query-string'
import { select_popok } from '../actions';
import KeranjangBelanja from './KeranjangBelanja';

class ProdukDetail extends Component {

    componentDidMount() {
        console.log(this.props.location.search)
        var params = queryString.parse(this.props.location.search)
        // var popokId = this.props.match.params.id1;
        console.log(params)
        var popokId = params.produkid
        axios.get(`http://localhost:1995/Pupuk/${popokId}`)
            .then((res)=>{
                this.props.select_popok(res.data)
            }).catch((err)=>{
                console.log(err)
            })
        
    }

    render () {
        var {  id , nama ,harga , merk , img , deskripsi } = this.props.produk
        return(
            <div className="container-fluid">
                <div>
                    <div className="col-4">
                        <img alt={img} src={img} className="img-responsive" />
                    </div>
                    <div className="col-8">
                        <div className="row">
                            <h1>{nama}</h1>
                        </div>
                        <div className="row">
                            <h3>{merk}</h3>
                        </div>
                        <div className="row">
                            <h2>{harga}</h2>
                        </div>
                        <div className="row">
                            <h5>{deskripsi}</h5>
                        </div>
                    </div>
                    <KeranjangBelanja id={id} harga={harga} namaProduknya={nama}/>
                </div>
            </div>
            
        )
    }
}

const mapStateToProps = (state) =>{
    return { produk : state.selectedProduk }
}

export default connect(mapStateToProps , {select_popok})(ProdukDetail);