import React from "react";
import styles from "../pages/styles.module.css";

interface FinalpageProps {
  description: string;
}

const Finalpage: React.FC = ({ description }) => {
  return (
    <div
      className={`${styles.background2} self-stretch flex-auto overflow-hidden flex flex-col items-center justify-center gap-[10px] `}
    >
      {" "}
      <div className="self-stretch flex-1 flex flex-row items-center justify-center gap-[10px]  my-10 px-[0px] lg:px-[80px] ">
        <div
          className={`flex-1 flex flex-col items-center justify-start gap-[40px]  max-w-[fit-content] leading-tight font-remipr6n-medium ${styles.relativeFontSize5}
          `}
        >
          <div
            className={`${styles.verticalText} self-stretch  relative max-h-[400px] `}
          >
            {description}
          </div>
        </div>
      </div>
      <img
        className="relative w-[482px] h-[400px] object-cover object-top"
        alt=""
        src="/image (19).png"
      />
    </div>
  );
};

export default Finalpage;
