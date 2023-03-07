import styles from "@/styles/ButtonLabel.module.css";

const ButtonLabel = (props: { text: string, className?: string, onClick: () => void}) => {
  return (
    <div className={styles.default} onClick={props.onClick}>
      {props.text || "Get Started"}
    </div>
  );
};
export default ButtonLabel;
