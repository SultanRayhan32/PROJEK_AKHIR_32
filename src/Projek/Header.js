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


class Header extends Component{
    render() {
        return(
            <div class="container-menu-header">
			<div class="topbar">
				<div class="topbar-social">
					<a href="#" class="topbar-social-item fa fa-facebook"></a>
					<a href="#" class="topbar-social-item fa fa-instagram"></a>
					<a href="#" class="topbar-social-item fa fa-pinterest-p"></a>
					<a href="#" class="topbar-social-item fa fa-snapchat-ghost"></a>
					<a href="#" class="topbar-social-item fa fa-youtube-play"></a>
				</div>

				<span class="topbar-child1">
					Free shipping for standard order over $100
				</span>

				<div class="topbar-child2">
					<span class="topbar-email">
						fashe@example.com
					</span>

					<div class="topbar-language rs1-select2">
						<select class="selection-1" name="time">
							<option>USD</option>
							<option>EUR</option>
						</select>
					</div>
				</div>
			</div>
        </div>

		
        )
    }
}

export default Header;