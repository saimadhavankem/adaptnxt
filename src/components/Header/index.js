import { RxHamburgerMenu } from "react-icons/rx";
import { IoMoonOutline } from "react-icons/io5";
import { FaRegBell } from "react-icons/fa";
import { SiGoogletranslate } from "react-icons/si";
import { CgProfile } from "react-icons/cg";
import "./index.css";

const Header = () => (
  <div className="nav-bar">
    <div className="nav-left">
      <h1 className="nav-text">AdaptNXT</h1>
      <RxHamburgerMenu />
    </div>
    <div className="nav-left">
      <IoMoonOutline />
      <FaRegBell />
      <SiGoogletranslate />
      <CgProfile />
    </div>
  </div>
);

export default Header;
