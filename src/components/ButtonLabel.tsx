import "./css/ButtonLabel.css";

const ButtonLabel = (props: { text: string, className?: string, onClick: () => void}) => {
  return (
    <div className={`button-label-default ${props.className || ""}`} onClick={props.onClick}>
      {props.text || "Get Started"}
    </div>
  );
};
export default ButtonLabel;
