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
        status : '',
        Struk : [],
        jadiEditgak : 0,
        count : 1,
        jadiEditgak2 : 0,
        TesForRender : ''
    }

    // penambahan = () => { this.setState({ count: this.state.count + 1 }); }
    // pengurangan = () => { this.setState({ count: this.state.count - 1 }); }
    // penambahan = () => this.refs.count32.value + 1
    // pengurangan = () => this.refs.count32.value - 1

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
            var idUsers = this.props.idUsers;
            axios.get(`http://localhost:2019/admin/konfirmasi?id=${idUsers}`)
        .then((item)=>{
            console.log(item.data[0].status);
            this.setState({ status : item.data[0].status })
        })
        .catch((err23)=>{
            console.log(err23)
        })
        })
        .catch((err) =>{
            console.log('ERROR DISINI OE')
            alert(err + 'ERROR DI SISINSINISN ANJIR')
        })
    }

    MencegahAsync = () =>{
        return (onBtnUpdateClick)   => {
        
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
                    this.setState({ status : data.status  })
            })
            .catch((err) =>{
                console.log('ERROR DISINI OE')
                alert(err + 'ERROR DI SISINSINISN ANJIR')
            })
        }
    }



    Confirm1 = () =>{
        var idUsers = this.props.idUsers;
        var status = 'kedua';
        var image = 'kosong'
        axios.post(`http://localhost:2019/admin/konfirmasiadmin?id=${idUsers}&status=${status}&image=${image}`)
        .then((res)=>{
            alert('Silahkan Kirim kan Bukti pembayaran Anda')
            console.log(res.data)
            this.setState({ status : 'kedua'  })
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

    

    PrepareCheckOut = () =>{
      if(this.state.status === ''){
        return(
          <div>
        <div className="flex-w flex-sb-m p-t-25 p-b-25 bo8 p-l-35 p-r-60 p-lr-15-sm">
        <div className="flex-w flex-m w-full-sm">
          <div className="size11 bo4 m-r-10">
            <input className="sizefull s-text7 p-l-22 p-r-22" type="text" name="coupon-code" placeholder="Coupon Code" />
          </div>
          <div className="size12 trans-0-4 m-t-10 m-b-10 m-r-10">
            
            <button className="flex-c-m sizefull bg1 bo-rad-23 hov1 s-text1 trans-0-4">
              Apply coupon
            </button>
          </div>
        </div>
        <div className="size10 trans-0-4 m-t-10 m-b-10">
          
          <button className="flex-c-m sizefull bg1 bo-rad-23 hov1 s-text1 trans-0-4">
            Update Cart
          </button>
        </div>
      </div>
      
      <div className="bo9 w-size18 p-l-40 p-r-40 p-t-30 p-b-38 m-t-30 m-r-0 m-l-auto p-lr-15-sm">
        <h5 className="m-text20 p-b-24">
          Cart Totals
        </h5>
        
        <div className="flex-w flex-sb-m p-b-12">
          <span className="s-text18 w-size19 w-full-sm">
            Subtotal:
          </span>
          <span className="m-text21 w-size20 w-full-sm">
            $39.00
          </span>
        </div>
        
        <div className="flex-w flex-sb bo10 p-t-15 p-b-20">
          <span className="s-text18 w-size19 w-full-sm">
            Shipping:
          </span>
          <div className="w-size20 w-full-sm">
            <p className="s-text8 p-b-23">
              There are no shipping methods available. Please double check your address, or contact us if you need any help.
            </p>
            <span className="s-text19">
              Calculate Shipping
            </span>
            <div className="rs2-select2 rs3-select2 rs4-select2 bo4 of-hidden w-size21 m-t-8 m-b-12">
              <select className="selection-2" name="country">
                <option>Select a country...</option>
                <option>US</option>
                <option>UK</option>
                <option>Japan</option>
              </select>
            </div>
            <div className="size13 bo4 m-b-12">
              <input className="sizefull s-text7 p-l-15 p-r-15" type="text" name="state" placeholder="State /  country" />
            </div>
            <div className="size13 bo4 m-b-22">
              <input className="sizefull s-text7 p-l-15 p-r-15" type="text" name="postcode" placeholder="Postcode / Zip" />
            </div>
            <div className="size14 trans-0-4 m-b-10">
              
              <button className="flex-c-m sizefull bg1 bo-rad-23 hov1 s-text1 trans-0-4">
                Update Totals
              </button>
            </div>
          </div>
        </div>
        
        <div className="flex-w flex-sb-m p-t-26 p-b-30">
          <span className="m-text22 w-size19 w-full-sm">
            Total:
          </span>
          <span className="m-text21 w-size20 w-full-sm">
            $39.00
          </span>
        </div>
        <div className="size15 trans-0-4">
          
          <button className="flex-c-m sizefull bg1 bo-rad-23 hov1 s-text1 trans-0-4" onClick={this.Confirm1}>
            Proceed to Checkout
          </button>
        </div>
      </div>
      </div>
      )
      }
      else if(this.state.status === 'kedua'){
        return(<div>
                   
          <p>Silahkan Kirim Bukti Transaksi Anda</p>
         <br/>
          <CustomInput type="file" id="EditBrandImage" name="EditBrandImage" label={this.state.EditBrandImage} onChange={this.onEditFileImageChange}/> <br/><br/><br/><br/>
          <button className="btn btn-primary" onClick={this.onBtnUpdateClick}>Bayar</button><br/><br/>
          <button className="btn btn-danger" onClick={this.BtnCancel}>Cancel</button>
      </div>)
      }
      else if(this.state.status === 'menunggu'){
        return(<div>
          <h1>Menunggu Konfirmasi Admin</h1>
        </div>)
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

    // tesfunction = ()  =>{
    //     return(<h1>
    //         {this.state.tes}
    //     </h1>)
    // }

    FunctionAgarRenderUlang = () =>{
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
    }

    onEditCart = (idProduk2) =>{
      var idUser = this.props.idUsers;
      var idProduk = idProduk2;
      var qty = this.refs.editqty32.value;
      axios.get(`http://localhost:2019/cart/getcartandproduk?idUser=${idUser}&idProduk=${idProduk}`)
      .then((res)=>{
        var harga = res.data[0].harga
        console.log(harga)
        console.log(qty)
        var totalharga = parseInt(harga * qty)
        axios.post('http://localhost:2019/cart/editcartqty',{
          idUser : idUser , idProduk : idProduk , qty : qty , totalharga : totalharga
        })
        .then((res)=>{
              alert('Berhasil di Edit')
              this.FunctionAgarRenderUlang();
              this.setState({jadiEditgak2 : 0})
          })
      })
    }

    DeleteCart = (idProduk) =>{
       
        var idUsers = this.props.idUsers;
        axios.delete(`http://localhost:2019/cart/deletecart?idUser=${idUsers}&idProduk=${idProduk}`)
        .then((res)=>{
          alert('Berhasil Di Hapus')
          this.FunctionAgarRenderUlang();  
        })
          .catch((err)=>{
            console.log(err)
          })
      
      
    }

    renderCart2 = () =>{
        var y = this.state.cartList.map((res)=>{
          if(this.state.jadiEditgak2 === res.idProduk){
            return(
              <tr className="table-row">
              {/* <td className="column-1">
                <div className="cart-img-product b-rad-4 o-f-hidden">
                  <img src="images/item-10.jpg" alt="IMG-PRODUCT" />
                </div>
              </td> */}
              <td className="column-1">{res.namaProduk}</td>
              {/* <td className="column-3">{res.harga}</td> */}
              <td className="column-2">
                {/* <div className="flex-w bo5 of-hidden w-size17">
                  <button className="btn-num-product-down color1 flex-c-m size7 bg8 eff2" onClick={this.pengurangan}>
                    <i className="fs-12 fa fa-minus" aria-hidden="true" />
                  </button>
                  <input className="size8 m-text18 t-center num-product" type="number" name="num-product1" value={res.qty} ref="count"  />
                  <button className="btn-num-product-up color1 flex-c-m size7 bg8 eff2" onClick={this.penambahan}>
                    <i className="fs-12 fa fa-plus" aria-hidden="true" />
                  </button>
                </div> */}
                <input type="number" defaultValue={`${res.qty}`} ref="editqty32" />
              </td>
              <td className="column-3">{res.totalharga}</td>
              <td className="column-4"><input type="button" value="SAVE" className="btn btn-danger" onClick={()=> this.onEditCart(res.idProduk)} /></td>
              <td className="column-5"><input type="button" value="CANCEL" className="btn btn-danger" onClick={()=> this.setState({jadiEditgak2 : 0})}/></td>
            </tr>)
          }
             return(
                <tr className="table-row">
                {/* <td className="column-1">
                  <div className="cart-img-product b-rad-4 o-f-hidden">
                    <img src="images/item-10.jpg" alt="IMG-PRODUCT" />
                  </div>
                </td> */}
                <td className="column-1">{res.namaProduk}</td>
                {/* <td className="column-3">{res.harga}</td> */}
                <td className="column-2">
                  {res.qty}
                </td>
                <td className="column-3">{res.totalharga}</td>
                <td className="column-4"><input type="button" value="EDIT" className="btn btn-danger" onClick={()=> this.setState({jadiEditgak2 : res.idProduk})}/></td>
                <td className="column-5"><input type="button" value="DELETE" className="btn btn-danger" onClick={()=> this.DeleteCart(res.idProduk)}/></td>
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
      if(this.state.cartList.length === 0) {
        return(
          <div>
            <br/><br/><br/><br/><br/>
            <h1>ANDA BELUM MEMILIKI CART</h1>
          </div>
        )
      }
        return(
        <div>
            <br/><br/><br/><br/><br/>
            
            <br/>
            {/* {this.BtnFunction()} */}

            

           
            
            {this.renderDetail()}  
            {this.tesfunction()}

            

            
      <div>
          <section className="cart bgwhite p-t-70 p-b-100">
        <div className="container">
          {/* Cart item */}
          <div className="container-table-cart pos-relative">
            <div className="wrap-table-shopping-cart bgwhite">
              <table className="table-shopping-cart">
                <tbody>
                    <div>
                     <tr className="table-head">
                        <th className="column-1" >Nama Produk</th>
                        <th className="column-2">Quantity</th>
                        <th className="column-3">Price</th>
                        <th className="column-4 p-l-70">Status</th>
                        <th className="column-5"></th>
                     </tr>
                        {this.renderCart2()}
                        {this.PrepareCheckOut()}
                    </div>
                </tbody></table>
            </div>
          </div>
          
        </div>
      </section>
                </div>
                <br/>
                <h1>{this.state.count}</h1>
        </div>)
    }
}

const mapStateToProps = (state) =>{
    return{ idUsers : state.auth.id , nama : state.auth.username};
}

export default connect(mapStateToProps,{}) (Cart32);