import { Component } from "react";
import DashbaordButton from "../DashboardButton";
import "./index.css";

const details = [
  {
    id: "i1",
    image:
      "https://res.cloudinary.com/dtl0m8m7u/image/upload/v1708323571/speedometer-icon_qpbeoh.png",
    name: "Dashboard",
  },
  {
    id: "i2",
    image:
      "https://res.cloudinary.com/dtl0m8m7u/image/upload/v1708323571/tag-line-icon_b72pis.png",
    name: "Inventory",
  },
  {
    id: "i3",
    image:
      "https://res.cloudinary.com/dtl0m8m7u/image/upload/v1708323571/description-icon_uitsco.png",
    name: "Order",
  },
  {
    id: "i4",
    image:
      "https://res.cloudinary.com/dtl0m8m7u/image/upload/v1708323571/delivery-truck-icon_ztppz5.png",
    name: "Shipping",
  },
  {
    id: "i5",
    image:
      "https://res.cloudinary.com/dtl0m8m7u/image/upload/v1708323571/share-line-icon_tu4bfb.png",
    name: "Channel",
  },
];

class NavigationBar extends Component {
  state = {
    activeTabId: details[2].id,
  };

  clickTabItem = (tabValue) => {
    this.setState({ activeTabId: tabValue });
  };

  render() {
    const { activeTabId } = this.state;
    return (
      <div className="d-board-container">
        <ul>
          {details.map((each) => (
            <DashbaordButton
              key={each.id}
              details={each}
              clickTabItem={this.clickTabItem}
              isActive={activeTabId === each.id}
            />
          ))}
        </ul>
      </div>
    );
  }
}
export default NavigationBar;
