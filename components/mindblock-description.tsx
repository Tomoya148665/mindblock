import type { NextPage } from "next";
import styles from "../pages/styles.module.css";

const MindblockDescription: NextPage = () => {
  return (
    <div
      className={`self-stretch relative ${styles.relativeFontSize1} ${styles.leadingVw} ${styles.maxWidthVw2} text-black `}
    >
      直面する困難は、自分の能力不足のせいだ。
    </div>
  );
};

export default MindblockDescription;
