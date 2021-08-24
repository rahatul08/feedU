import React, {Component} from 'react';
import SvgIcon from "../../Data/Svg-icon";
import {Link} from "react-router-dom";
import {
    FaFacebookF,
    FaInstagram,
    FaLinkedinIn,
    FaWindowClose
}   from 'react-icons/fa'

class StickyNav extends Component {
    constructor() {
        super();
        this.state={
            nav:[
                {
                    id: 1,
                    name: 'מיתוג ואפיון'
                },
                {
                    id: 2,
                    name: 'תוכן'
                },
                {
                    id: 3,
                    name: 'שירותי אינטרנט'
                },
                {
                    id: 4,
                    name: 'שירותי מובייל'
                },
                {
                    id: 5,
                    name: 'שירותים ארגוניים'
                },
                {
                    id: 6,
                    name: 'יצירת קשר'
                },
                {
                    id:7,
                    name: 'עיתונות'
                },
            ],
            social: [
                {
                    id:1,
                    icon:FaFacebookF,
                    link_Url:"www.facebook.com"
                },
                {
                    id:2,
                    icon:FaInstagram,
                    link_Url:"www.instagram.com"
                }      ,
                {
                    id:3,
                    icon:FaLinkedinIn,
                    link_Url:"www.linkedinin.com"
                }
            ]
        }
    }
    render() {
        return (
            <div >
                <div className="stick-nav overflow-hidden " id="sticky">
                    <div className="close-btn text-white">
                       <Link to={''} id="close"><FaWindowClose /></Link>
                    </div>
                    <div className="container py-5 ">

                       <div className="nav-area">
                           <ul className="nav flex-column align-items-center justify-content-center">
                               <li className="nav-item">
                                   <img src={SvgIcon.stickyLogo} alt="logo" className="icon"/>
                               </li>

                               {
                                   this.state.nav.map(( item,id) =>{
                                       return(
                                           <li className="nav-item" key={id}><Link className="nav-link" to="">{item.name}</Link></li>
                                       )
                                   })
                               }
                           </ul>
                       </div>
                        <div className="social-icon">
                            <ul className="nav justify-content-center align-items-center">
                                <li className="nav-item"><Link className="nav-link" to=''><FaFacebookF/></Link></li>
                                <li className="nav-item"><Link className="nav-link" to={''}><FaInstagram/></Link></li>
                                <li className="nav-item"><Link className="nav-link" to={''}><FaLinkedinIn/></Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default StickyNav;
