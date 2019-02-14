import React , { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'


class ListProduk32 extends Component {

    state = { Produk2 : [] , count : 1 }


    BtnAddToCart = () =>{
        var idUsers =  parseInt(this.props.idUser) ;
        var idProduk = parseInt(this.props.idProduk) ;
        var namaProduk = this.props.namaProduk;
        var hargaProduk = parseInt(this.props.hargaProduk)  ;
        var qty = parseInt(this.refs.qty1.value);
        var totalharga = parseInt(hargaProduk * qty) ;

        
        // console.log(idUsers)
        // console.log(idProduk)
        // console.log(namaProduk)
        // console.log(hargaProduk)
        // console.log(qty)
        // console.log(totalharga)
        axios.get(`http://localhost:2019/cart/showcart?idUsers=${idUsers}&idProduk=${idProduk}`)
        .then((res)=>{
            if(res.data.length > 0){
                axios.post(`http://localhost:2019/cart/editcart?idUsers=${idUsers}&idProduk=${idProduk}&qty=${qty}&totalharga=${totalharga}`)
                .then((res)=>{
                    
                    
                })
                .catch((err)=>{
                    console.log(err)
                })
            }
            else{
                axios.post(`http://localhost:2019/cart/addtocart?idUsers=${idUsers}&idProduk=${idProduk}&namaProduk=${namaProduk}&hargaProduk=${hargaProduk}&qty=${qty}&totalharga=${totalharga}`)
                .then((res)=>{
                    alert('Berhasil ditambah');
                })
                .catch((err)=>{
                    console.log(err)
                })
            }
        })

        
    }

    penambahan = () => { this.setState({ count: this.state.count + 1 }); }
    pengurangan = () => { this.setState({ count: this.state.count - 1 }); }


    componentDidMount(){
        var nama = this.props.namaProduk;
        var id = this.props.idProduk;
        axios.get(`http://localhost:2019/produk/getnamaid?nama=${nama}&id=${id}`)
        .then((res)=>{
            this.setState({Produk2 : res.data})
             
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    renderProdukdetail = () =>{
        var y = this.state.Produk2.map((item)=>{
            return(<div className="container-fluid">
            <div>
                <div className="col-4">
                    <img alt={item.image} src={`http://localhost:2019/${item.image}`} className="img-responsive" />
                </div>
                <div className="col-8">
                    <div className="row">
                        <h1>{item.nama}</h1>
                    </div>
                   <div className="row">
                        <h2>{item.harga}</h2>
                    </div>
                    <div className="row">
                        <h5>{item.deskripsi}</h5>
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
        </div>)
        })
        return y;
    }

    render(){
        return(
        <div>
            {this.renderProdukdetail()}
        </div>)
    }
}

const mapStateToProps = (state) =>{
    return{ 
        namaProduk : state.produk.nama , 
        idProduk : state.produk.id , 
        idUser : state.auth.id , 
        namaUser : state.auth.username,
        hargaProduk : state.produk.harga
    };
}

export default connect(mapStateToProps , {}) (ListProduk32);