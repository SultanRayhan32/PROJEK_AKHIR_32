import React , { Component } from 'react';
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


class Navbar extends Component {
    render() {
        return(
            <div class="wrap_menu">
            
			<div class="wrap_header">
				<a href="index.html" class="logo">
					<img src="images/icons/logo.png"></img>
				</a>
            </div>
                <div class="menu">
                        <ul class="main_menu">
                            <li>
                                <a href="index.html">Home</a>
                                <ul class="sub_menu">
                                    <li><a href="index.html">Homepage V1</a></li>
                                    <li><a href="home-02.html">Homepage V2</a></li>
                                    <li><a href="home-03.html">Homepage V3</a></li>
                                </ul>
                            </li>

                            <li>
                                <a href="product.html">Shop</a>
                            </li>

                            <li class="sale-noti">
                                <a href="product.html">Sale</a>
                            </li>

                            <li>
                                <a href="cart.html">Features</a>
                            </li>

                            <li>
                                <a href="blog.html">Blog</a>
                            </li>

                            <li>
                                <a href="about.html">About</a>
                            </li>

                            <li>
                                <a href="contact.html">Contact</a>
                            </li>
                        </ul>
                </div>
            </div>

			
        )
    }
}

export default Navbar;