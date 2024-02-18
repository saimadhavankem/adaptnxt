import { BsTruck, BsSpeedometer2 } from "react-icons/bs";
import { IoPricetagOutline } from "react-icons/io5";
import { LuMenuSquare } from "react-icons/lu";
import { PiShareNetwork } from "react-icons/pi";
import "./index.css";
const Dashboard = () => (
  <div className="d-board-container">
    <div className="btn-design">
      <BsSpeedometer2 />
      <p className="d-board-text">Dashboard</p>
    </div>
    <div className="btn-design">
      <IoPricetagOutline />
      <p className="d-board-text">Inventory</p>
    </div>
    <div className="btn-design">
      <LuMenuSquare />
      <p className="d-board-text">Orders</p>
    </div>
    <div className="btn-design">
      <BsTruck />
      <p className="d-board-text">Shipping</p>
    </div>
    <div className="btn-design">
      <PiShareNetwork />
      <p className="d-board-text">Channel</p>
    </div>
  </div>
);

export default Dashboard;
