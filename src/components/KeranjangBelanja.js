import React , { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux'
import {   addNewCart} from '../actions/index';
import LihatCart from './LihatCart';

class KeranjangBelanja extends Component {
    state ={ Keranjang : [] , 
        IdUsers : 0 , 
        hargaProduk : 0 , 
        tes : 1 , 
        AllCartValue : [], 
        count : 1,
        count2 : 1,
    penanda : 'tes'}

    penambahan = () => { this.setState({ count: this.state.count + 1 }); }
    pengurangan = () => { this.setState({ count: this.state.count - 1 }); }
    // penambahan2 = () => { this.setState({ count2: this.state.count2 + 1 }); }
    // pengurangan2 = () => { this.setState({ count2: this.state.count2 - 1 }); }


    // btnCartClick = () =>{
    //     this.setState({Keranjang : this.props.id})
    //     this.setState({IdUsers : this.props.idUser})
    //     this.setState({hargaProduk : this.props.harga})
        
    //     var lol = this.props.idUser;
    //     this.props.select_cart({idUsers : lol})
        
    // }

    btnKedua = () =>{
       
        // if(this.state.penanda === 'tes'){
        //     this.setState({penanda : 'dsfdfdsfdfd'})
            
        //  }
        var idUsers = this.props.idUser;
        var idProduk = this.props.id;
        var harga = this.props.harga;
        var qty  = this.refs.qty.value;
        var totalHarga = parseInt(qty * harga);
        var namaProduk = this.props.namaProduknya;
        var img = this.props.image;
        // console.log(idUsers + ' ' + idProduk + ' ' + harga + ' ' + qty + ' ' + totalHarga + ' ' + namaProduk) 
       this.props.addNewCart({
        idUsers : idUsers ,
        idProduk : idProduk ,
        harga : harga ,
        qty : qty ,
        totalHarga : totalHarga ,
        namaProduk : namaProduk 
       })
    //    return <Redirect to='/' />
       
    }

    // componentWillMount() {
    //     // axios.get('http://localhost:1995/Pupuk')
    //     // .then((res) => {
    //     //     this.setState({ Keranjang : res.data })
    //     // })
    //     // this.setState({Keranjang : this.props.id})
    //     // this.setState({NameProduk : this.props.allCart})
    // }

    // renderCart =() =>{
        
    //     // var Cartjsx = this.state.Keranjang.map((res)=>{
    //     //     return(<div>
    //     //         <h1>{res}</h1>
    //     //     </div>)
    //     // })
    //     // return Cartjsx;
    //     // this.setState({NameProduk : this.props.namaProduk})
    //     // console.log(this.state.NameProduk)
    // }

    // componentDidUpdate () {
        
    //     // console.log(this.props.namaProduk)
    //     // console.log(this.props.allCart);
    //    console.log(this.props.idUser) 
    //    console.log(this.props.idProduk) 
    //    console.log(this.props.cart) 
    // }

    

    componentWillReceiveProps() {
        axios.get("http://localhost:1995/keranjang")
        .then((res)=>{
            this.setState({ AllCartValue : res.data})
            console.log(this.state.AllCartValue)
            console.log(this.props.idUser) 
            console.log(this.props.idProduk) 
            console.log(this.state.hargaProduk)
        })
    }

    renderAllCart = () =>{
        // var CartJsx = this.state.AllCartValue.map((item)=>{
        // var tampung = [];
        // var temp = [];
        // var last = [];
        // var tampung2 = [];
        // var temp2 = [];
        // var last2 = [];
        //     if(item.idUsers === this.props.idUser){
        //         for(var x = 0; x < item.namaProduk.length; x++){
        //           tampung.push([item.namaProduk[x]])
                  
        //           console.log(tampung)
               
        //           }
        //           for(var u = 0; u < tampung.length; u++){
        //             temp.push(
        //                 <div>{tampung[u]}</div> 
        //                 )
        //           }
        //         last.push([temp]) 
              
        //     for(var p = 0; p < item.harga.length; p++){
        //         tampung2.push([item.harga[p]])
        //         console.log(tampung2)
        //     }
        //     for(var l = 0; l < tampung2.length; l++){
        //         temp2.push(
        //             <div>{tampung2[l]}</div> 
        //             )
        //       }
           
        //     last2.push([temp2])
            
        //     return (
        //     <div>
        //         <h1>
        //             {last}
                    
        //         </h1>
        //         <h2>
        //             {last2}
        //         </h2>
               
        //     </div>)
            
        //     }
            
        // })
        // return CartJsx
        var ListJsxCart = this.state.AllCartValue.map((res)=>{
            if(res.idUsers === this.props.idUser){
                return(<div>{res.harga}{res.namaProduk}
                {/* <LihatCart harga={res.harga} id22={res.id} /> */}
                </div>)
            }
            
        })
        return ListJsxCart
    }

    render() {
        return(
            <div>
                <div className="row">
                    <div className="col-xs-6">
                        <button onClick={this.penambahan}>+</button> 
                        <br/>
                        <input value={this.state.count} ref="qty"></input>
                        <br/>
                        <button onClick={this.pengurangan}>-</button>
                    </div>
                    {/* <div className="col-xs-6">
                        <button onClick={this.penambahan2}>+</button> 
                        <br/>
                        <input value={this.state.count2} ref="qty2"></input>
                        <br/>
                        <button onClick={this.pengurangan2}>-</button>
                    </div> */}
                </div>
               {/* <h1>
                    {this.props.namaProduknya} (1)..... INI UNTUK NAMA PRODUK YG SAH
                </h1>
                <h1>
                    {this.props.idUser} (2)..... INI UNTUK ID USER YANG SAH
                </h1>
                <h1>
                   {this.props.harga} (3)...... INI UNTUK HARGA PRODUK YG SAH
                </h1>
                <h1>{this.props.id} (4).....INI UNTUK ID PRODUK YG SAH</h1> 
                */}
                <br/>
                <button onClick={this.btnKedua} className="btn btn-primary">Add To Cart</button><br/><br/>
                <h3>*JANGAN LUPA REFRESH, SUPAYA BELANJAAN ANDA MASUK KE CART</h3>
                <center>
                    <table >
                        {this.renderAllCart()}
                    
                    </table>
                </center>
            </div>
        )
    }
}

const mapStateToProps =(state) =>{
    return { idUser : state.auth.id , 
        cart : state.Cart.harga , 
        namaProduk : state.Cart.namaProduk , 
        allCart : state.Cart,
         idProduk : state.Cart.idProduk}
}

export default connect(mapStateToProps,{    addNewCart})(KeranjangBelanja);