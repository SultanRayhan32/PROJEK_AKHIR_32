import React , { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import '../support/tesdoang.css';

class LihatCart extends Component {

    state = {ListCart : [] , namaProduktemp : [] , tampungId : [] , editgak : 0}
    
    componentDidMount() {
        axios.get('http://localhost:1995/keranjang')
        .then((res)=>{
            this.setState({ListCart : res.data})
            
        }).catch((err)=>{
            console.log(err)
        })
    }

    checkOut = ()=>{
        if(window.confirm('Are you sure')){
          
            
        }
    }

    onBtnSaveClick = (id) =>{
        var nama = this.refs.namaEdit.value;
        var qty = this.refs.qtyEdit.value;
        var harga = this.refs.hargaEdit.value;
       
        
        axios.put('http://localhost:1995/Pupuk/' + id, {
            nama , qty , harga 
        }).then((res)=>{
            this.getPopokList();
            console.log('INI SAVE CLICK');
        }).catch((err)=>{
            console.log(err)
        })
    }

    FilterCart = () =>{
        var ListJsxCart = this.state.ListCart.filter((res)=>{
           console.log(res)
        })
        
        return ListJsxCart
        
    }

    renderCart = () =>{
        var ListJsxCart = this.state.ListCart.map((res)=>{
            
            
            console.log(res.id)
            console.log(this.props.idUser)
            console.log(this.props.id22)
            console.log(this.props.hargalol)
        //    console.log(this.state.namaProduktemp)
           if(res.idUsers === this.props.idUser){
            if(this.state.editgak !== res.id){
                return(
                    <tr>
                        <td>{res.namaProduk}</td>
                        <td>{res.qty}</td>
                        <td><h2>{res.harga}</h2></td>
                        <td>{res.qty}</td>
                        <td>{res.totalHarga}</td>
                        <td> <button className="btn btn-primary" onClick={() => this.setState({ editgak : res.id })}>Edit</button></td>
                        <td></td>
                    </tr>
                    )
            }
            return (<tr>
                <td>{res.namaProduk}</td>
                <td>{res.qty} <input type="text" ref="namaEdit" className="form-control" /></td>
                <td><h2>{res.harga}</h2> <input type="text" ref="hargaEdit" className="form-control" /></td>
                <td>{res.qty} <input type="text" ref="qtyEdit" className="form-control" /></td>
                <td>{res.totalHarga}</td>
                <td><input type="button" className="btn btn-primary" value="save" onClick={() => this.onBtnSaveClick(res.id)}/></td>
                <td></td>
            </tr>)
        }
          
        })
        
        return ListJsxCart
        
    }

    render(){
        return(
                <div>
                    <br/><br/>
                    <center>
                        <table  style={{padding : '100px'}}>
                            <thead>
                                <tr>
                                    <td>nama Produk</td>
                                    
                                    <td>image</td>
                                    <td>Harga</td>
                                    <td>Quantity</td>
                                    <td>Total Harga</td>
                                   <td></td>
                                    <td>{this.props.id22}</td>
                                </tr>
                            </thead>
                            <tbody>
                                {this.renderCart()}
                            </tbody>
                            <tbody>
                                
                            </tbody>
                            <button className="btn btn-primary" onClick={this.checkOut}>Check Out</button>
                        </table>
                    </center>
                </div>
        )
    }
}

const mapStateToProps = (state) =>{
    return {
        idUser : state.auth.id,
        id1 : state.Cart.id,
        
    }
}

export default connect(mapStateToProps , {}) (LihatCart);