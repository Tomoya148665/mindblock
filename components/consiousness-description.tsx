import type { NextPage } from "next";
import styles from "../pages/styles.module.css";

const ConsiousnessDescription: NextPage = () => {
  return (
    <div
      className={`self-stretch relative ${styles.relativeFontSize3} ${styles.leadingVw} ${styles.maxWidthVw} text-black `}
    >
      今のあなたは現状の課題に取り組んで、未来を変えていこうと努力していることでしょう。
    </div>
  );
};

export default ConsiousnessDescription;
