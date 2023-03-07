import LabelField from "./LabelField";
import styles from "@/styles/DisclosuresView.module.css";
// import iconLocked from "../assets/lockIcon.svg";
import Image from 'next/image';

type DisclosuresProps = {
  disclosuresURL: string;
  message: string;
};

const DisclosuresView: React.FC<DisclosuresProps> = ({
  disclosuresURL,
  message,
}) => (
  <div className={styles.footer}>
    <div className={styles.disclosuresContainer}>
      <div className={styles.informationContainer}>
        <img style={{ marginRight: "1vw" }} src="/lockIcon.svg" alt="" />
        {/* <Image className={styles.icon} src="/lockIcon.svg" alt=""/> */}
        <LabelField label={message} className={styles.smallTitle} />
      </div>
    </div>
  </div>
);

export default DisclosuresView;