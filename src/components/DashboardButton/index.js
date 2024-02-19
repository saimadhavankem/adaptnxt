import "./index.css";

const DashbaordButton = (props) => {
  const { details, clickTabItem, isActive } = props;
  const { id, name, image } = details;
  const onClickTabItem = () => {
    clickTabItem(id);
  };
  const activeTab = isActive ? "active-btn-design" : "";
  return (
    <button
      id="i1"
      onClick={onClickTabItem}
      className={`btn-design ${activeTab}`}
    >
      <img src={image} className="detail-image" alt={name} />
      <p className="d-board-text">{name}</p>
    </button>
  );
};

export default DashbaordButton;
