
import {GrHomeRounded} from "react-icons/gr";
import {GoSearch} from "react-icons/go";
import {MdExplore} from "react-icons/md";
import {BsCameraReelsFill} from "react-icons/bs";
import {SiGooglemessages} from "react-icons/si";
import {MdNotificationAdd} from "react-icons/md";
import {CgProfile} from "react-icons/cg";
import {RxHamburgerMenu} from "react-icons/rx";

const logo ="https://static.india.com/wp-content/uploads/2021/11/Instagram-Logo.jpg";

const Navbar = ()=>
{
    return(
        <div className="nav-container">
            <img className="nav-logo" src={logo} />
            <ul className="nav-list">
                <li className="nav-items">  
                    <GrHomeRounded className="nav-item-logo"/>                   
                    <p className="nav-item-text">Home</p>
                </li>
                <li className="nav-items">
                    <GoSearch className="nav-item-logo" />
                    <p className="nav-item-text">Search</p>
                </li>
                <li className="nav-items">
                    <MdExplore className="nav-item-logo" />
                    <p className="nav-item-text">Explore</p>
                </li>
                <li className="nav-items">
                    <BsCameraReelsFill className="nav-item-logo" />
                    <p className="nav-item-text">Reels</p>
                </li>
                <li className="nav-items">
                    <SiGooglemessages className="nav-item-logo" />
                    <p className="nav-item-text">Messages</p>
                </li>
                <li className="nav-items">
                    <MdNotificationAdd className="nav-item-logo" />
                    <p className="nav-item-text">Notifications</p>
                </li>
                <li className="nav-items">
                    <CgProfile className="nav-item-logo" />
                    <p className="nav-item-text">Profile</p>
                </li>
                <li className="nav-items">
                    <RxHamburgerMenu className="nav-item-logo" />
                    <p className="nav-item-text">Menu</p>
                </li>
            </ul>
        </div>
    )
}

export default Navbar;

