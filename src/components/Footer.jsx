import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
// import logo from "../asset/logo.jpeg";
import logo from "../assets/images/logo.png"
import dot from "../assets/images/all_icon.png"
import "../css/mainfooter.css"
import "../css/footer.css";
const Footer = () => {
  return (
    <footer className="">
      


<div className="main-footer tnb7" id="contact">
  <div className="container padding" > 
    <div className="row">

        <div className="col-md-2 col-sm-2 col-xs-12">
        <div className="footer-text">
          <div className="big-heading"> <img src={logo}/></div>
        </div>
      </div>
      

    <div className="col-md-4 col-sm-4 col-xs-12">
        <div className="footer-text">
          <div className="big-heading"> Contact Info</div>
          <div className="footer-text-icon">
          <div className="icon">
          <FaMapMarkerAlt aria-hidden="true" />
          </div>
          <div className="icon-text">
            <p><span>LEONARD Personality Inventory</span><br/>
              Mailing Address<br/> PO Box 199, Jalan Klang Lama, 58700 Kuala Lumpur, Malaysia.</p>
          </div>
        </div>
        <div className="footer-text-icon">
          <div className="icon">
          <FaPhoneAlt />
          </div>
          <div className="icon-text">
           <p>+6012 658 7674</p>
          </div>
        </div>
        <div className="footer-text-icon">
          <div className="icon">
          <FaEnvelope aria-hidden="true" />
          </div>
          <div className="icon-text">
           <p>leonardpersonality@gmail.com</p>
          </div>
        </div>

        </div>
      </div>

     
       <div className="col-md-3 col-sm-3 col-xs-12">
        <div className="footer-text">
          <div className="big-heading"> Services</div>
          <ul>
            <li><a href="home/services"><i className="fa fa-caret-right"></i> Training Workshops</a></li>
            <li><a href="home/services"><i className="fa fa-caret-right"></i> Psychometric Testing</a></li>
            <li><a href="home/services"><i className="fa fa-caret-right"></i> Statistical Data Processing</a></li>            
            <li><a href="home/services"><i className="fa fa-caret-right"></i> Publications & Trainers</a></li>            
          </ul>
        </div>
      </div>
       <div className="col-md-3 col-sm-3 col-xs-12">
        <div className="footer-text">
          <div className="big-heading"> Quick Links</div>
          <ul>
            <li><a href="#"><i className="fa fa-caret-right"></i> Help </a></li>
            <li><a href="home/disclaimer"><i className="fa fa-caret-right"></i> Disclaimer</a></li>
            <li><a href="home/privacy"><i className="fa fa-caret-right"></i> Privacy</a></li>            
          </ul>

         </div>
      </div>     

    </div> 

        <div className="row">
      <div className="col-md-12 col-sm-12 col-xs-12">
      <div className="copy">
        <p>Copyright © 2001-2024  | <span>leonard.com.my</span> | All Rights Reserved.</p>
      </div>
      </div>
    </div>   
  </div>
  <div className="dot-6">
    <img src={dot} />
  </div>
</div>



    </footer>
  );
};
export default Footer;
