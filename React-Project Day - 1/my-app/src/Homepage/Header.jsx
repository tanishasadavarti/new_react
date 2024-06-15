import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
function Header(){
    return(
        <div>
            <div className="header">
            <h1 className="logo">PRIMA</h1>
            <ul className="navbar">
                <li>HOME</li>
                <li>ABOUT</li>
                <li>CONTECT</li>
            </ul>
            <div className="icons">
                <div className="facebook">  <FaFacebookF /></div>
            <div className="twitter"><FaTwitter /></div>
            <div className="instagram"><FaInstagramSquare /></div>
            </div>
            </div>
        </div>
    )
}
export default Header