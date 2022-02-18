import { Oval } from "react-loader-spinner";

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import styles from "../Loader/Loader.module.scss";

function Spinner() {
  return (
    <div className={styles.loaderContainer}>
      <Oval color="#00BFFF" height={80} width={80} />
    </div>
  );
}

export default Spinner;
