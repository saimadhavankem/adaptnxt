import "./index.css";

const ActionTab = (props) => {
  const { details, clickText, isClicked } = props;
  const { id, value } = details;
  const onAction = () => {
    clickText(id);
  };

  const onTextClick = isClicked ? "text-design" : "";

  return (
    <li onClick={onAction} className={`action-text ${onTextClick}`}>
      {value}
    </li>
  );
};

export default ActionTab;
