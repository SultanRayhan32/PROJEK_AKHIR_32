import React , { Component} from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

class AdminKonfimasi extends Component{

    state = { ListKonfirmasi : []  , totalPrice : 0 , totalProduk : 0 , idUsers : 0 , ProdukDetail : []  }

    onBtnConfirmClick = (id_users)=>{
        console.log(id_users)
    }

    componentDidMount(){
        axios.get('http://localhost:2019/admin/getkonfimasi')
        .then((res)=>{
            this.setState({ ListKonfirmasi : res.data })
        })
        console.log(this.state.idUsers)
        
    }

    

    AddtoTransaksi = (Id) =>{
        var idUsers = Id;
        var status = 'LUNAS';
        var date = new Date();
        // var tahun = new Date().getFullYear();
        // var bulan = new Date().getDate();
        // var tanggal = new Date().getDate();
        var totalPrice = this.state.totalPrice;
        var totalProduk = this.state.totalProduk;
        
        // console.log(idUsers + ' ' + namaUser + ' ' + date + ' ' + totalProduk + ' ' + totalPrice)
        
        // console.log(tahun + ' ' + tanggal + ' ' + bulan)
        // axios.post(`http://localhost:2019/cart/checkout1?idUsers=${idUsers}&namaUser=${namaUser}&tanggal=${date}&totalProduk=${totalProduk}&totalPrice=${totalPrice}`)
        axios.post('http://localhost:2019/cart/checkout1',{
            idUsers , status , tanggal : date , totalProduk , totalPrice
        }).then((res)=>{
            alert('Berhasil')
            // console.log(this.state.ProdukDetail[1].harga);
            // console.log(this.state.ProdukDetail[0].id);
            // console.log(this.state.ProdukDetail);
            console.log(res.data[0].id);
            for(var u = 0;  u < this.state.ProdukDetail.length; u++){
                axios.post('http://localhost:2019/cart/checkout2' ,{
                    id_transaksi : res.data[0].id , 
                    id_Produk : this.state.ProdukDetail[u].idProduk , 
                    id_Users : this.state.ProdukDetail[u].idUsers , 
                    qty : this.state.ProdukDetail[u].qty , 
                    harga : this.state.ProdukDetail[u].harga , 
                    img : this.state.ProdukDetail[u].image, 
                    deskripsi : this.state.ProdukDetail[u].deskripsi ,
                    merk : this.state.ProdukDetail[u].merk,
                    kategori : this.state.ProdukDetail[u].kategori,
                    totalHarga : this.state.ProdukDetail[u].totalharga  
                })
                .then((res)=>{
                    console.log('Berhasil ditambah ke transaksi detail');
                    axios.delete(`http://localhost:2019/cart/checkout3?idUsers=${idUsers}`)
                    .then((res)=>{
                        console.log('Berhasil di hapus oeoeoeoeoeoee 1234566y')
                    })
                })
                .catch((err)=>{
                    console.log('gagagagagaaglaga');
                    console.log(err)
                })
            }
            
        }).catch((err2)=>{
            console.log('anjaaaaay');
            console.log(err2)
        })
        
    }

    getAllCartUser = (id) =>{
         var idUsers2 = id
        axios.get(`http://localhost:2019/cart/getcart?idUsers=${idUsers2}`)
        .then((res)=>{
            // var x = 0;
            this.setState({ ProdukDetail : res.data })
            // 
            // console.log(res.data[1].totalharga);
            var price = 0;
          
            for(var u = 0; u < res.data.length; u++){
                price += res.data[u].totalharga;
                
            }
            this.setState({ totalPrice : price })
            this.setState({ totalProduk : res.data.length })
            console.log(this.state.totalPrice)
            console.log(this.state.totalProduk)
            axios.get(`http://localhost:2019/cart/getcartproduk?idUsers=${idUsers2}`)
                .then((res)=>{
                    this.setState({  ProdukDetail : res.data })
                    console.log(this.state.ProdukDetail)
                    this.AddtoTransaksi(idUsers2)
                })
                .catch((err)=>{

                })
        })
        .catch((err)=>{
            console.log(err)
        })
    }   

    renderKonfirmasi = () =>{
        var x = this.state.ListKonfirmasi.map((item)=>{
            
            return(
            
            <tr>
                <th>{item.id}</th>
                <th>{item.id_users}</th>
                <th>{item.status}</th>
                <th><img src={`http://localhost:2019/${item.image}`} /></th>
                <th><input type="button" class="btn btn-primary" value="Konfirmasi" onClick={()=> this.getAllCartUser(item.id_users)}/></th>
            </tr>)
        })
        // onClick={()=> this.onBtnConfirmClick(item.id_users)}
        return x;
    }

    render(){
        return(<div>
            <br/><br/><br/><br/><br/><br/><br/>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Id Users</th>
                        <th>Status</th>
                        <th>Transaksi Struk</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderKonfirmasi()}
                </tbody>
            </table>
        </div>)
    }
}

export default AdminKonfimasi;