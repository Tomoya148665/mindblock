import React from "react";
import styles from "../pages/styles.module.css";

interface DescriptionProps {
  description1?: string;
  description2?: string;
  title: string;
}

const Description: React.FC<DescriptionProps> = ({
  description1,
  description2,
  title,
}) => {
  return (
    <div
      className={`${styles.background2} self-stretch flex-auto overflow-hidden flex flex-col items-center justify-center gap-[10px] `}
    >
      <div className="self-stretch flex-1 flex flex-row items-center justify-center gap-[10px]  mt-10 mb-10 px-[0px] lg:px-[80px] ">
        <div
          className={` flex-1 flex flex-col items-center justify-start gap-[30px] min-h-[800px] max-w-[fit-content] leading-tight font-remipr6n-medium ${styles.relativeFontSize5}`}
        >
          <div
            className={`${styles.verticalText} self-stretch  relative max-h-[380px] `}
          >
            {description1}
          </div>
          <div
            className={`${styles.verticalText} self-stretch  relative max-h-[380px] `}
          >
            {description2}
          </div>
        </div>
        <div
          className={`${styles.verticalText} self-stretch flex-1 relative text-[20px] font-remipr6n-exheavy max-w-[70px] vertical-rl`}
        >
          {title}
        </div>
      </div>
    </div>
  );
};

export default Description;
