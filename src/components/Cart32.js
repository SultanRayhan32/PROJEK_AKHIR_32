import React , { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { CustomInput } from 'reactstrap';

class Cart32 extends Component {

    state = 
    { 
        cartList : [] , 
        totalPrice : 0 , 
        totalProduk : 0  , 
        tesTransaksidetail : [] , 
        tes : 0 , 
        ProdukDetail : [] ,
        status : ''
    }

    componentDidMount(){
        var idUsers = this.props.idUsers;
        axios.get(`http://localhost:2019/cart/getcart?idUsers=${idUsers}`)
        .then((res)=>{
            // var x = 0;
            this.setState({ cartList : res.data })
            // console.log(res.data[1].totalharga);
            var price = 0;
          
            for(var u = 0; u < res.data.length; u++){
                price += res.data[u].totalharga;
                
            }
            this.setState({ totalPrice : price })
            this.setState({ totalProduk : res.data.length })
            console.log(this.state.totalPrice)
            console.log(this.state.totalProduk)
        })
        .catch((err)=>{
            console.log(err)
        })

        axios.get(`http://localhost:2019/cart/getcartproduk?idUsers=${idUsers}`)
        .then((res)=>{
            this.setState({  ProdukDetail : res.data })
            console.log(res)
        })
        .catch((err)=>{

        })
        axios.get(`http://localhost:2019/admin/konfirmasi?id=${idUsers}`)
        .then((item)=>{
            console.log(item.data[0].status);
            this.setState({ status : item.data[0].status })
        })
        .catch((err23)=>{
            console.log(err23)
        })
    }
    onEditFileImageChange = () => {
        if(document.getElementById("EditBrandImage").files[0] !== undefined) {
            this.setState({EditBrandImage: document.getElementById("EditBrandImage").files[0].name})
        }
        else {
            this.setState({EditBrandImage: 'Pilih Gambar'})
        }
    }

    onBtnUpdateClick = () => {
        var id = this.props.idUsers;
        var formData = new FormData()
        var headers = {
            headers: 
            {'Content-Type': 'multipart/form-data'}
        }

        var data = {
            status : 'menunggu'
        }

        if(document.getElementById('EditBrandImage')){
            formData.append('image', document.getElementById('EditBrandImage').files[0])
        }
        formData.append('data', JSON.stringify(data))

        axios.put("http://localhost:2019/cart/kirimstruk/" + id, formData, headers)
        .then((res) => {
            alert("Bukti Pembayaran Anda Berhasil Di Kirim")
            // this.setState({ brandList: res.data, selectedEditBrandId: 0 })
        })
        .catch((err) =>{
            console.log(err)
        })
    }


    Confirm1 = () =>{
        var idUsers = this.props.idUsers;
        var status = 'kedua';
        var image = 'kosong'
        axios.post(`http://localhost:2019/admin/konfirmasiadmin?id=${idUsers}&status=${status}&image=${image}`)
        .then((res)=>{
            alert('Silahkan Kirim kan Bukti pembayaran Anda')
            console.log(res.data)
            this.setState({ status })
        })
    }

    BtnCancel = () =>{
        var idUsers = this.props.idUsers;
        axios.delete(`http://localhost:2019/admin/cancelkonfirmasi?id=${idUsers}`)
        .then((res)=>{
            console.log('Di cancel')
            this.setState({status : ''})
        })
        .catch((err)=>{
            console.log('Gagal Cancel')
            console.log(err)
        })
    }

    BtnFunction = () =>{
        if(this.state.status !== 'kedua'){
            return(<button className="btn btn-primary" onClick={this.Confirm1}>CheckOut</button>)
        }
        else if(this.state.status === 'kedua'){
            return(
                <div>
                   
                    <p>Silahkan Kirim Bukti Transaksi Anda</p>
                   <br/>
                    <CustomInput type="file" id="EditBrandImage" name="EditBrandImage" label={this.state.EditBrandImage} onChange={this.onEditFileImageChange}/> <br/><br/><br/><br/>
                    <button className="btn btn-primary" onClick={this.onBtnUpdateClick}>Bayar</button><br/><br/>
                    <button className="btn btn-danger" onClick={this.BtnCancel}>Cancel</button>
                </div>
                
            )
        }
        
        
    }

    

    addTocart = () =>{
        var idUsers = this.props.idUsers;
        var namaUser = this.props.nama;
        var date = new Date();
        // var tahun = new Date().getFullYear();
        // var bulan = new Date().getDate();
        // var tanggal = new Date().getDate();
        var totalPrice = this.state.totalPrice;
        var totalProduk = this.state.totalProduk;
        
        console.log(idUsers + ' ' + namaUser + ' ' + date + ' ' + totalProduk + ' ' + totalPrice)
        
        // console.log(tahun + ' ' + tanggal + ' ' + bulan)
        // axios.post(`http://localhost:2019/cart/checkout1?idUsers=${idUsers}&namaUser=${namaUser}&tanggal=${date}&totalProduk=${totalProduk}&totalPrice=${totalPrice}`)
        axios.post('http://localhost:2019/cart/checkout1',{
            idUsers , namaUser , tanggal : date , totalProduk , totalPrice
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
   

    tesfunction = () =>{
        var idUsers = this.props.idUsers;
        axios.get(`http://localhost:2019/cart/getcart?idUsers=${idUsers}`)
        .then((res)=>{
            console.log('aku padamu')    
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    // tesfunction = () =>{
    //     return(<h1>
    //         {this.state.tes}
    //     </h1>)
    // }

    renderCart = () =>{
       var y = this.state.cartList.map((item)=>{
            return(
            <tr>
                <th>{item.namaProduk}</th>
                <th>{item.qty}</th>
                <th>{item.totalharga}</th>
                <th></th>
                <th></th>
            </tr>)
        })
        return y;
    }

    renderDetail = () =>{
        var u =  this.state.tesTransaksidetail.map((item)=>{
            return(
                <div>
                    <h1>{item.tgltransaksi}dfdsfsf</h1>
                    <h1>{item.id_transaksi}</h1>
                    <h1>{item.namaProduk}</h1>
                </div>
            )
        })
        return u;
    }

    render() {
        return(
        <div>
            <br/><br/><br/><br/><br/>
            <table>
                <thead>
                    <tr>
                        <th>Nama Produk</th>
                        <th>Quantity</th>
                        <th>Total Harga</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderCart()}
                </tbody>
            </table>
            <br/>
            {this.BtnFunction()}

            <br/><br/><br/><br/><br/>

            <table>
                <thead>
                    <tr>fdsfs</tr>
                    <tr>dffds</tr>
                    <tr>sdfdsfs</tr>    
                </thead>
                <tbody>
                     
                </tbody>    
            </table>    
            <button onClick={this.tesfunction} >anjay</button>
            {this.renderDetail()}  
            {this.tesfunction()}
        </div>)
    }
}

const mapStateToProps = (state) =>{
    return{ idUsers : state.auth.id , nama : state.auth.username};
}

export default connect(mapStateToProps,{}) (Cart32);