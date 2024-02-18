import { GoPlus } from "react-icons/go";
import { IoCloseOutline } from "react-icons/io5";
import { MdOutlineInput } from "react-icons/md";
import { BsSendArrowUp } from "react-icons/bs";
import { FiPrinter, FiRefreshCcw } from "react-icons/fi";

import "./index.css";

const DetailPage = () => (
  <div className="main-detail-container">
    <button className="order-btn">
      Order <IoCloseOutline />
    </button>
    <div className="action-container">
      <p className="action-text">Pending</p>
      <p className="action-text">Accepted</p>
      <p className="action-text">AWB Created</p>
      <p className="action-text">Ready to Ship</p>
      <p className="action-text">Shipped</p>
      <p className="action-text">Completed</p>
      <p className="action-text">Cancelled</p>
    </div>
    <div className="detail-container">
      <div className="btn-container">
        <div className="btn-left">
          <button className="btn-detail">
            <MdOutlineInput /> Import Orders
          </button>
          <button className="btn-detail">
            <BsSendArrowUp /> Accept
          </button>
          <button className="btn-detail">
            <FiPrinter /> Print
          </button>
        </div>
        <button className="btn-refresh">
          <FiRefreshCcw /> Refresh
        </button>
      </div>
      <table className="table-container">
        <tr className="table-row table-start">
          <th className="plus-size"> </th>
          <th>
            <input type="checkbox" />
          </th>
          <th>Channel</th>
          <th>Order No</th>
          <th>Order Date</th>
          <th>City</th>
          <th>Customer Name</th>
          <th>Order Value</th>
          <th>Status</th>
          <th>Operation</th>
        </tr>
        <tr className="table-row">
          <td className="plus-size">
            <GoPlus />
          </td>
          <td>
            <input type="checkbox" />
          </td>
          <td>
            <img
              src="https://res.cloudinary.com/dtl0m8m7u/image/upload/v1708279288/pngegg_aym63l.png"
              className="image-size"
              alt="shopify"
            />
          </td>
          <td>#TKN20203754</td>
          <td>2022-05-04</td>
          <td>Lucknow</td>
          <td>Abhishek</td>
          <td>0.00</td>
          <td>Pending</td>
          <td>Action</td>
        </tr>
        <tr className="table-row">
          <td className="plus-size">
            <GoPlus />
          </td>
          <td>
            <input type="checkbox" />
          </td>
          <td>
            <img
              src="https://res.cloudinary.com/dtl0m8m7u/image/upload/v1708279288/pngegg_aym63l.png"
              className="image-size"
              alt="shopify"
            />
          </td>
          <td>#TKN20203754</td>
          <td>2022-05-04</td>
          <td>Lucknow</td>
          <td>Abhishek</td>
          <td>0.00</td>
          <td>Pending</td>
          <td>Action</td>
        </tr>
        <tr className="table-row">
          <td className="plus-size">
            <GoPlus />
          </td>
          <td>
            <input type="checkbox" />
          </td>
          <td>
            <img
              src="https://res.cloudinary.com/dtl0m8m7u/image/upload/v1708279288/pngegg_aym63l.png"
              className="image-size"
              alt="shopify"
            />
          </td>
          <td>#TKN20203752</td>
          <td>2022-05-04</td>
          <td>Lucknow</td>
          <td>Abhishek</td>
          <td>0.00</td>
          <td>Pending</td>
          <td>Action</td>
        </tr>
      </table>
    </div>
  </div>
);

export default DetailPage;
