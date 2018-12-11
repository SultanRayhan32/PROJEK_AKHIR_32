import React , { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
// import { onFilterList } from '../actions/index';
import { Redirect } from 'react-router-dom';
import PopokItem from './PopokItem';
import ContenTes from './ContenTes';  
import KeranjangBelanja from './KeranjangBelanja';

class PopokList extends Component {
    state = { listpopok : [], searchList : []}

    componentDidMount() {
        axios.get('http://localhost:1995/Pupuk')
        .then((res) => {
            this.setState({ listpopok : res.data , searchList : res.data })
        })
        
    }

    onBtnSearchClick = () =>{
        var nama = this.refs.searchNama.value;
        var merk = this.refs.searchMerk.value;
        var min = parseInt(this.refs.minSearch.value);
        var max = parseInt(this.refs.maxSearch.value);
        var arrSeacrh = this.state.listpopok.filter((item) => {
          return item.nama.toLowerCase().includes(nama.toLowerCase())
          && item.merk.includes(merk)
          && item.harga >= min
          && item.harga <= max
        })

        this.setState({ searchList : arrSeacrh })
    }

    
    renderListPopok = () => {
              var listJSXPopok = this.state.searchList.map((item) =>{
              var peo = item.id % 5 === 0;
              if(peo){
              return (
                <div>
                  <PopokItem  popok ={item}/>
                  <KeranjangBelanja produk={item} />
                </div>
              )
            
              }
                return (
                  <ContenTes popok2={item} />
                )
                
              })
              return listJSXPopok;
          }
        
        render() 
        {
            if(this.props.username !== ''){
              if(this.props.produk.id !== 0){
                return <Redirect to={`/Detail?produkid=${this.props.produk.id}&namapopok=${this.props.produk.nama}`} />
              }
            return(
        <section className="bg-light" id="portfolio">
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-12 text-center">
                  <h2 className="section-heading text-uppercase">List Popok Goreng</h2>
                  <h3 className="section-subheading text-muted">Best Popok</h3>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12 text-center">
                    <input type="text" ref="searchNama" className="form-input" placeholder="Cari File Yang Anda Inginkan" />
                    <select ref="searchMerk">
                        <option value="">All Merk</option>
                        <option>Spetnaz</option>
                        <option>Air Soft Company</option>
                        <option>Corazon</option>
                    </select>
                     Harga :
                    <input type="number" ref="minSearch" defaultValue="0" /> - <input type="number" ref="maxSearch" defaultValue="9000000" />
                    <input type="button" value="CARI" className="btn btn-success" onClick={this.onBtnSearchClick} />
                </div>
              </div>
              <div className="row">
                {this.renderListPopok()}
                
                <div className="col-md-4 col-sm-6 portfolio-item">
                  <a className="portfolio-link" data-toggle="modal">
                    <div className="portfolio-hover">
                      <div className="portfolio-hover-content">
                        <i className="fas fa-plus fa-3x" />
                      </div>
                    </div>
                    {/* <img className="img-fluid" src="img/portfolio/02-thumbnail.jpg" alt /> */}
                  </a>
                    </div>
                </div>
            </div>
            <h1>{this.props.img}</h1>
          </section>
                )
            }  
            return  (<div>
                         <Redirect to="/Login" />
                         
                     </div>)
        }
        
}
const mapStateToProps = (state) => {

    return {username : state.auth.username , loading : state.auth.loading , error : state.auth.error , produk : state.selectedProduk ,
    img : state.selectedProduk.img };
}




export default connect(mapStateToProps, {  } )(PopokList);

