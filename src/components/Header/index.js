import { IoMoonOutline } from "react-icons/io5";
import { FaRegBell } from "react-icons/fa";
import { SiGoogletranslate } from "react-icons/si";
import { AiOutlineMenuFold } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import "./index.css";

const Header = () => (
  <nav className="nav-bar">
    <div className="nav-left">
      <h1 className="nav-text">AdaptNXT</h1>
      <AiOutlineMenuFold className="icon-size" />
    </div>
    <div className="nav-left">
      <IoMoonOutline className="icon-size" />
      <FaRegBell className="icon-size" />
      <SiGoogletranslate className="icon-size" />
      <CgProfile className="icon-size" />
    </div>
  </nav>
);

export default Header;
