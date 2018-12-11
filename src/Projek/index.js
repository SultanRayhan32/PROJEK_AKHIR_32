import React , { Component } from 'react';
import Header from './Header';
import Navbar from './Navbar';
import './style/vendor/animsition/css/animsition.css';
import './style/vendor/animsition/css/animsition.min.css';
import './style/vendor/bootstrap/css/bootstrap.css';
import './style/vendor/bootstrap/css/bootstrap.min.css';
import './style/vendor/bootstrap/css/bootstrap-grid.css';
import './style/vendor/bootstrap/css/bootstrap-grid.min.css';
import './style/vendor/bootstrap/css/bootstrap-reboot.css';
import './style/vendor/bootstrap/css/bootstrap-reboot.min.css';
import './style/vendor/css-hamburgers/hamburgers.css';
import './style/vendor/css-hamburgers/hamburgers.min.css';
import './style/vendor/daterangepicker/daterangepicker.css';
import './style/vendor/daterangepicker/daterangepicker.css';
import './style/css/main.css';
import './style/css/main.min.css';
import './style/vendor/lightbox2/css/lightbox.css';
import './style/vendor/lightbox2/css/lightbox.min.css';
import './style/vendor/noui/nouislider.css';
import './style/vendor/noui/nouislider.min.css';
import './style/vendor/perfect-scrollbar/perfect-scrollbar.css'
import './style/vendor/select2/select2.css';
import './style/vendor/select2/select2.min.css';
import './style/vendor/slick/slick.css';
import './style/vendor/slick/slick-theme.css';
// import './style/css/util.css';
//import './style/css/util.min.css';

class index extends Component{
    render() {
        return(
            <div>
                <Header />
                <Navbar />
            </div>
		
        )
    }
}

export default index;