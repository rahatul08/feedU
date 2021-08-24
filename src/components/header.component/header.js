import React, {Component} from 'react';
import './header.style.scss'
import Img_data from "../../Data/Img_Data";
import {Link} from "react-router-dom";
import SvgIcon from "../../Data/Svg-icon";
import StickyNav from "./stickyNav";
import $ from 'jquery'
class Header extends Component {
    componentDidMount() {
        $(document).ready(function () {
            $('#close').click(function () {
                $('#sticky').hide()
            })
            $('#menubar').click(function () {
                $('#sticky').toggle()
            })
        })
    }

    render() {
        return (
            <div className="header-area"
            style={{backgroundImage : `url(${Img_data.BgImg})`}}
            >
                <div className="container-fluid">
                    <div className="d-flex align-items-center justify-content-between">
                        <div className="menu-bar">
                           <button  className="btn text-secondary" id="menubar"><img src={SvgIcon.menu} alt="menubar" className="icon-bar"/> </button>
                        </div>
                        <div className="logo-area">
                            <Link to="/home"> <img src={SvgIcon.logo} alt="Logo"/></Link>
                        </div>
                    </div>
                </div>
                <StickyNav/>
                <div className="content">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-2"></div>
                            <div className="col-md-8 ">
                                <h2>צוות מותאם אישית</h2>
                                <h2>   <Link to=''>האפליקציה שלך</Link> בעבור</h2>
                            </div>
                            <div className="col-md-2"></div>
                        </div>
                    </div>
                </div>
            </div>



        );
    }
}

export default Header;
