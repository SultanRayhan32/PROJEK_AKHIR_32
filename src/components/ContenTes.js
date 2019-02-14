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
          <div onClick={this.onItemClick2} className={`col-md-4 col-sm-6 portfolio-item`}>
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
              <h4>Rp.  {harga}</h4>
          </div>
      </div>  
        )
    }
}

export default connect(null, {select_popok})(ContenTes);