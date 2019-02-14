import React , { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import queryString from 'query-string'
// import { select_popok } from '../actions';
import KeranjangBelanja from './KeranjangBelanja';

class ProdukDetail extends Component {
    state = { count : 1 }
    componentDidMount() {
        console.log(this.props.location.search)
        var params = queryString.parse(this.props.location.search)
        // var popokId = this.props.match.params.id1;
        console.log(params)
        var popokId = params.produkid
        axios.get(`http://localhost:1995/Pupuk/${popokId}`)
            .then((res)=>{
                // this.props.select_popok(res.data)
            }).catch((err)=>{
                console.log(err)
            })
        
    }

    penambahan = () => { this.setState({ count: this.state.count + 1 }); }
    pengurangan = () => { this.setState({ count: this.state.count - 1 }); }

    BtnAddToCart = () =>{
        var {id , nama ,harga , merk , img , deskripsi} = this.props.produk;
        var qty = parseInt(this.refs.qty1.value);
        var totalHarga = qty * harga;
        var idUser = this.props.idUser;
        console.log(`http://localhost:1995/keranjang?idUsers=${idUser}&idProduk=${id}`);
        axios.get('http://localhost:1995/keranjang',{
            params : {
                idUsers : idUser,
                idProduk : id
            }
        }).then((res)=>{
            if(res.data.length > 0){
                axios.put(`http://localhost:1995/keranjang/` + res.data[0].id  ,{
                    idUsers : idUser ,
                    idProduk : id ,
                    harga : harga ,
                    qty : qty ,
                    totalHarga : totalHarga ,
                    namaProduk : nama
                }).then((res)=>{
                    alert('Berhasil Di Edit');
                    console.log(res);
                }).catch((err)=>{
                    alert('Error cuy')
                    console.log(err)
                })
            }
            else{
                axios.post('http://localhost:1995/keranjang',{
                    idUsers : idUser ,
                    idProduk : id ,
                    harga : harga ,
                    qty : qty ,
                    totalHarga : totalHarga ,
                    namaProduk : nama
                }).then((res)=>{
                    alert('Berhasil Di tambahkan')
                }).catch((err)=>{
                    alert('Error oe')
                })
            }
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
                    {/* <KeranjangBelanja id={id} harga={harga} namaProduknya={nama} image={img} produk={this.props.produk}/> */}
                    <div className="row">
                    <div className="col-xs-6">
                        <button onClick={this.penambahan}>+</button> 
                        <br/>
                        <input value={this.state.count} ref="qty1"></input>
                        <br/>
                        <button onClick={this.pengurangan}>-</button>
                    </div>
                    <br/>
                    <input type="button" className="btn btn-primary" value="Add To Cart" onClick={this.BtnAddToCart} />
                </div>
            </div>
            </div>
            
        )
    }
}

const mapStateToProps = (state) =>{
    return { produk : state.selectedProduk
    , idUser : state.auth.id }
}

export default connect(mapStateToProps , {})(ProdukDetail);