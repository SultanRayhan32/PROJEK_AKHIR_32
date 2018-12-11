import React , { Component } from 'react';
import { connect } from 'react-redux';
import { select_popok } from '../actions/index';

class ContenTes extends Component {

  onItemClick2 = () =>{
    this.props.select_popok(this.props.popok2);
}

    render() {
      const { img, nama, deskripsi, harga , merk } = this.props.popok2;
        return(
              <div className="col-md-4 col-sm-6 portfolio-item" onClick={this.onItemClick2}>
                  <a className="portfolio-link" data-toggle="modal" onClick={this.onItemClick2}>
                    <div className="portfolio-hover">
                      <div className="portfolio-hover-content">
                        <i className="fas fa-plus fa-3x" />
                      </div>
                    </div>
                    <img className="img-fluid" />
                  </a>
                  <div className="portfolio-caption">
                    <h2>{nama}</h2>
                    <h4>{merk}</h4>
                    <img src={img} width="350px"  />
                    <h6>Rp.{harga}</h6>
                    <p className="text-muted">{deskripsi}</p>
                    <button onClick={this.onItemClick} className="btn btn-success">Deskripsi</button>
                  </div>
                </div>
        )
    }
}

export default connect(null, {select_popok})(ContenTes);