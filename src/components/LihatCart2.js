import React , { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import '../support/tesdoang.css';

class LihatCart2 extends Component {

    state = {ListCart : [] , namaProduktemp : [] , tampungId : [] , editgak : 0 , count : 1}
    
    componentDidMount() {
        axios.get('http://localhost:1995/keranjang')
        .then((res)=>{
            this.setState({ListCart : res.data})
            
        }).catch((err)=>{
            console.log(err)
        })
    }

    penambahan = () => { this.setState({ count: this.state.count + 1 }); }
    pengurangan = () => { this.setState({ count: this.state.count - 1 }); }

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
      var Subtotal = 0;
        var ListJsxCart = this.state.ListCart.map((res)=>{
            
            // this.setState({ count : res.qty })
            console.log(res.id)
            console.log(this.props.idUser)
            console.log(this.props.id22)
            console.log(this.props.hargalol)
        //    console.log(this.state.namaProduktemp)
           if(res.idUsers === this.props.idUser){
            Subtotal += res.totalHarga
            return (
                <div>
            {/* <tr className="table-head">
            <th className="column-1" />
            <th className="column-2">Product</th>
            <th className="column-3">Price</th>
            <th className="column-4 p-l-70">Quantity</th>
            <th className="column-5">Total</th>
          </tr> */}
          <tr className="table-row">
            <td className="column-1">
              <div className="cart-img-product b-rad-4 o-f-hidden">
                <img src="images/item-10.jpg" alt="IMG-PRODUCT" />
              </div>
            </td>
            <td className="column-2">{res.namaProduk}</td>
            <td className="column-3">{res.harga}</td>
            <td className="column-4">
              <div className="flex-w bo5 of-hidden w-size17">
                <button className="btn-num-product-down color1 flex-c-m size7 bg8 eff2" onClick={this.pengurangan}>
                  <i className="fs-12 fa fa-minus" aria-hidden="true" />
                </button>
                <input className="size8 m-text18 t-center num-product" type="number" name="num-product1" value={res.qty}  />
                <button className="btn-num-product-up color1 flex-c-m size7 bg8 eff2" onClick={this.penambahan}>
                  <i className="fs-12 fa fa-plus" aria-hidden="true" />
                </button>
              </div>
            </td>
            <td className="column-5">{res.totalHarga}</td>
          </tr>
          {/* <tr className="table-row">
            <td className="column-1">
              <div className="cart-img-product b-rad-4 o-f-hidden">
                <img src="images/item-05.jpg" alt="IMG-PRODUCT" />
              </div>
            </td>
            <td className="column-2">Mug Adventure</td>
            <td className="column-3">$16.00</td>
            <td className="column-4">
              <div className="flex-w bo5 of-hidden w-size17">
                <button className="btn-num-product-down color1 flex-c-m size7 bg8 eff2">
                  <i className="fs-12 fa fa-minus" aria-hidden="true" />
                </button>
                <input className="size8 m-text18 t-center num-product" type="number" name="num-product2" defaultValue={1} />
                <button className="btn-num-product-up color1 flex-c-m size7 bg8 eff2">
                  <i className="fs-12 fa fa-plus" aria-hidden="true" />
                </button>
              </div>
            </td>
            <td className="column-5">$16.00</td>
          </tr> */}
          </div>)
        }
          
        })
        
        return ListJsxCart
        
    }

    render(){
        return(
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
                        <th className="column-1" />
                        <th className="column-2">Product</th>
                        <th className="column-3">Price</th>
                        <th className="column-4 p-l-70">Quantity</th>
                        <th className="column-5">Total</th>
                     </tr>
                        {this.renderCart()}
                    </div>
                </tbody></table>
            </div>
          </div>
          <div className="flex-w flex-sb-m p-t-25 p-b-25 bo8 p-l-35 p-r-60 p-lr-15-sm">
            <div className="flex-w flex-m w-full-sm">
              <div className="size11 bo4 m-r-10">
                <input className="sizefull s-text7 p-l-22 p-r-22" type="text" name="coupon-code" placeholder="Coupon Code" />
              </div>
              <div className="size12 trans-0-4 m-t-10 m-b-10 m-r-10">
                {/* Button */}
                <button className="flex-c-m sizefull bg1 bo-rad-23 hov1 s-text1 trans-0-4">
                  Apply coupon
                </button>
              </div>
            </div>
            <div className="size10 trans-0-4 m-t-10 m-b-10">
              {/* Button */}
              <button className="flex-c-m sizefull bg1 bo-rad-23 hov1 s-text1 trans-0-4">
                Update Cart
              </button>
            </div>
          </div>
          {/* Total */}
          <div className="bo9 w-size18 p-l-40 p-r-40 p-t-30 p-b-38 m-t-30 m-r-0 m-l-auto p-lr-15-sm">
            <h5 className="m-text20 p-b-24">
              Cart Totals
            </h5>
            {/*  */}
            <div className="flex-w flex-sb-m p-b-12">
              <span className="s-text18 w-size19 w-full-sm">
                Subtotal:
              </span>
              <span className="m-text21 w-size20 w-full-sm">
                $39.00
              </span>
            </div>
            {/*  */}
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
                  {/* Button */}
                  <button className="flex-c-m sizefull bg1 bo-rad-23 hov1 s-text1 trans-0-4">
                    Update Totals
                  </button>
                </div>
              </div>
            </div>
            {/*  */}
            <div className="flex-w flex-sb-m p-t-26 p-b-30">
              <span className="m-text22 w-size19 w-full-sm">
                Total:
              </span>
              <span className="m-text21 w-size20 w-full-sm">
                $39.00
              </span>
            </div>
            <div className="size15 trans-0-4">
              {/* Button */}
              <button className="flex-c-m sizefull bg1 bo-rad-23 hov1 s-text1 trans-0-4">
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      </section>
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

export default connect(mapStateToProps , {}) (LihatCart2);