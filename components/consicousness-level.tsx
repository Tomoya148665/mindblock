import type { NextPage } from "next";
import styles from "../pages/styles.module.css";

const ConsicousnessLevel: NextPage = () => {
  return (
    <div className={`self-stretch relative ${styles.relativeFontSize} `}>
      意識レベル：進んで
    </div>
  );
};

export default ConsicousnessLevel;
