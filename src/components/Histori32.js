import React , { Component} from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import '../support/table_32/vendor/bootstrap/css/bootstrap.min.css'
import '../support/table_32/fonts/font-awesome-4.7.0/css/font-awesome.min.css'
import '../support/table_32/vendor/animate/animate.css'
import '../support/table_32/vendor/select2/select2.min.css'
import '../support/table_32/vendor/perfect-scrollbar/perfect-scrollbar.css'
import '../support/table_32/css/util.css'
import '../support/table_32/css/main.css'

class Histori32 extends Component{

    state = { ListTransaksi : [] , ListTransaksiDetail : [] }

    componentDidMount(){
        var idUser = this.props.idUser
        axios.get(`http://localhost:2019/trx/getTransaksi?idUser=${idUser}`)
        .then((res)=>{
            this.setState({ListTransaksi : res.data})
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    getTransaksiDetail = (id) =>{
        var id_transaksi = id
        axios.get(`http://localhost:2019/trx/getTrxDetail?id_transaksi=${id_transaksi}`)
        .then((item)=>{
            this.setState({ ListTransaksiDetail : item.data })
        })
    }

    renderTransaksi = () =>{
        var renderX = this.state.ListTransaksi.map((item)=>{
            return(
                <tr>
                    <th>{item.id}</th>
                    <th>{item.idUser}</th>
                    <th>{item.status}</th>
                    <th>{item.tgltransaksi}</th>
                    <th>{item.totalProduk}</th>
                    <th>{item.totalPrice}</th>
                    <th><input type="button" value="Lihat Detail" class="btn btn-primary" onClick={() => this.getTransaksiDetail(item.id)} /></th>
                </tr>
            )
        })
        return renderX
    }

    renderTransaksi2 = () =>{
        var renderX = this.state.ListTransaksi.map((item)=>{
            return(
            <tr className="row100">
              <td className="column100 column1" >{item.id}</td>
              <td className="column100 column1" >{item.idUser}</td>
              <td className="column100 column1" >{item.status}</td>
              <td className="column100 column1" >{item.tgltransaksi}</td>
              <td className="column100 column1" >{item.totalProduk}</td>
              <td className="column100 column1" >{item.totalPrice}</td>
              <td className="column100 column1" ><input type="button" value="Lihat Detail" class="btn btn-primary" onClick={() => this.getTransaksiDetail(item.id)} /></td>
            </tr>
                
            )
        })
        return renderX
    }

    renderDetail = () =>{
        var detailrender = this.state.ListTransaksiDetail.map((item)=>{
            return(
                <tr className="row100">
                    <td>{item.id}</td>
                    <td>{item.id_Produk}</td>
                    <td>{item.qty}</td>               
                    <td>{item.harga}</td>
                    <td><img src={`http://localhost:2019/${item.img}`} width="50px"></img></td>
                    <td>{item.deskripsi}</td>
                    <td>{item.merk}</td>
                    <td>{item.kategori}</td>
                    <td>{item.totalHarga}</td>
                </tr>
            )
        })
        return detailrender
    }

    render(){
        return(
            <div>
                <br/><br/><br/>
                {/* <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <h1 className="section-heading text-uppercase">History</h1>
                    </div>
                </div> */}
                <center><h1>History</h1></center>

               <center><h4>Melihat Detail Transaksi DI bawah</h4></center>
                <br/><br/>
                <div className="table100 ver2 m-b-110">
                <table data-vertable="ver2">
                    <thead>
                        <tr className="row100 head">
                            <th className="column100 column1">Id</th>
                            <th className="column100 column1">IdUser</th>
                            <th className="column100 column1">Status</th>
                            <th className="column100 column1">Tanggal Transaksi</th>
                            <th className="column100 column1">Total Produk</th>
                            <th className="column100 column1">Total Price</th>
                            <th className="column100 column1"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderTransaksi2()}
                    </tbody>
                </table>
            </div>
                
                <h2>Detail Transaksi</h2>
                <div className="table100 ver2 m-b-110">
                    <table data-vertable="ver2">
                        <thead >
                            <tr className="row100 head">
                                <th className="column100 column1">Id</th>
                                <th className="column100 column1">id_produk</th>
                                <th className="column100 column1">Quantity</th>
                                <th className="column100 column1">Harga</th>
                                <th className="column100 column1">Image</th>
                                <th className="column100 column1">deskripsi</th>
                                <th className="column100 column1">Merk</th>
                                <th className="column100 column1">kategori</th>
                                <th className="column100 column1">totalPrice</th>
                            </tr>
                        </thead>
                        <tbody>
                        {this.renderDetail()}
                        </tbody>
                    </table>
                </div>
               
                
        
            
            
        </div>)
    }
}

const mapStateToProps = (state) =>{
    return{ 
        idUser : state.auth.id
    };
}

export default  connect(mapStateToProps , {}) (Histori32);