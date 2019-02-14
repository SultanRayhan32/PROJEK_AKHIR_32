import React , { Component } from 'react';
import { connect } from 'react-redux';
import { select_popok } from '../actions/index';

class PopokItem extends Component {

  onItemClick = () =>{
    this.props.select_popok(this.props.popok);
}

    render() {
      const { img, nama, deskripsi, harga , merk } = this.props.popok;
        return(
        //   <div onClick={this.onItemClick} className="col-md-6 col-sm-6 portfolio-item">
        //   <a className="portfolio-link" data-toggle="modal" >
        //     <div className="portfolio-hover">
        //       <div className="portfolio-hover-content">
        //         <i className="fas fa-plus fa-3x" />
        //       </div>
        //     </div>
        //     <img className="img-fluid" />
        //   </a>
        //   <div className="portfolio-caption">
        //     <h2>{nama}</h2>
        //     <h4>{merk}</h4>
        //     <img src={img} width="350px"  />
        //     <h6>Rp.{harga}</h6>
        //     <p className="text-muted">{deskripsi}</p>
        //     <button onClick={this.onItemClick} className="btn btn-success">Deskripsi</button>
        //   </div>
         
        // </div>
        <div onClick={this.onItemClick} className={`col-md-${this.props.size} col-sm-6 portfolio-item`}>
                <div className="portfolio-link" data-toggle="modal">
                    <div className="portfolio-hover">
                        <div className="portfolio-hover-content">
                            <i className="fas fa-plus fa-3x" />
                        </div>
                    </div>
                    <img className="img-fluid" src={img} alt="ferguso" />
                </div>
                <div className="portfolio-caption">
                    <h4>{nama}</h4>
                    <p className="text-muted">{deskripsi}</p>
                    <h4>Rp. {harga}</h4>
                </div>
            </div>  
        )
    }
}

export default connect(null, {select_popok})(PopokItem);