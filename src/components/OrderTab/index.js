import { Component } from "react";
import { GoPlus } from "react-icons/go";
import { IoCloseOutline } from "react-icons/io5";
import { MdOutlineInput } from "react-icons/md";
import { BsSendArrowUp } from "react-icons/bs";
import { FiPrinter, FiRefreshCcw } from "react-icons/fi";
import ActionTab from "../ActionTab";
import "./index.css";

const actions = [
  { id: "a1", value: "Pending" },
  { id: "a2", value: "Accepted" },
  { id: "a3", value: "AWB Created" },
  { id: "a4", value: "Ready to Ship" },
  { id: "a5", value: "Shipped" },
  { id: "a6", value: "Completed" },
  { id: "a7", value: "Cancelled" },
];

class OrderTab extends Component {
  state = { idText: actions[0].id };

  clickText = (id) => {
    this.setState({ idText: id });
  };

  render() {
    const { idText } = this.state;
    return (
      <div className="main-detail-container">
        <button className="order-btn">
          Order <IoCloseOutline />
        </button>
        <ul className="action-container">
          {actions.map((each) => (
            <ActionTab
              key={each.id}
              clickText={this.clickText}
              isClicked={each.id === idText}
              details={each}
            />
          ))}
        </ul>
        <div className="detail-container">
          <div className="btn-container">
            <div className="btn-left">
              <button className="btn-detail">
                <MdOutlineInput className="icon-btn" /> Import Orders
              </button>
              <button className="btn-detail">
                <BsSendArrowUp className="icon-btn" /> Accept
              </button>
              <button className="btn-detail">
                <FiPrinter className="icon-btn" /> Print
              </button>
            </div>
            <button className="btn-refresh">
              <FiRefreshCcw className="icon-btn" /> Refresh
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
              <td className="order-text">#TKN20203754</td>
              <td>2022-05-04</td>
              <td>Lucknow</td>
              <td>Abhishek</td>
              <td>0.00</td>
              <td>
                <span className="pending-text">Pending</span>
              </td>
              <td>
                <select className="option-detail">
                  <option>Actions</option>
                  <option>Delivered</option>
                </select>
              </td>
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
              <td className="order-text">#TKN20203754</td>
              <td>2022-05-04</td>
              <td>Lucknow</td>
              <td>Abhishek</td>
              <td>0.00</td>
              <td>
                <span className="pending-text">Pending</span>
              </td>
              <td>
                <select className="option-detail">
                  <option>Actions</option>
                  <option>Delivered</option>
                </select>
              </td>
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
              <td className="order-text">#TKN20203752</td>
              <td>2022-05-04</td>
              <td>Lucknow</td>
              <td>Abhishek</td>
              <td>0.00</td>
              <td>
                <span className="pending-text">Pending</span>
              </td>
              <td>
                <select className="option-detail">
                  <option>Actions</option>
                  <option>Delivered</option>
                </select>
              </td>
            </tr>
          </table>
        </div>
      </div>
    );
  }
}

export default OrderTab;
