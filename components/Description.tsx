import React from "react";
import styles from "../pages/styles.module.css";

interface DescriptionProps {
  description1?: React.ReactNode;
  description2?: string;
  title: string;
  number: string;
}

const Description: React.FC<DescriptionProps> = ({
  description1,
  description2,
  title,
  number,
}) => {
  return (
    <div
      className={`${styles.background2} self-stretch relative flex-auto overflow-hidden flex flex-col items-center justify-center gap-[10px] `}
    >
      <div className="absolute bottom-3 left-3 text-[20px]">{number}</div>
      <div className="self-stretch flex-1 flex flex-row items-center justify-center gap-[10px]  mt-10 mb-10 px-[0px] lg:px-[80px] h-full ">
        <div
          className={` flex-1 flex flex-col items-center justify-start gap-[30px] max-h-full max-w-[fit-content] leading-tight font-remipr6n-medium ${styles.relativeFontSize5}`}
        >
          <div
            className={`${styles.verticalText} self-stretch  pt-5 flex-shrink relative max-h-[380px] `}
          >
            {description1}
          </div>
          <div
            className={`${styles.verticalText} self-stretch pb-5 flex-shrink relative max-h-[380px] `}
          >
            {description2}
          </div>
        </div>
        <div
          className={`${styles.verticalText} self-stretch flex-1 relative pt-5 text-[20px] font-remipr6n-exheavy max-w-[70px] vertical-rl`}
        >
          {title}
        </div>
      </div>
    </div>
  );
};

export default Description;

{
  /* <div className="self-stretch flex-1 flex flex-row items-center justify-center gap-[10px]  mt-10 mb-10 px-[0px] lg:px-[80px] ">
        <div
          className={` flex-1 flex flex-col items-center justify-start gap-[30px] min-h-[800px] max-w-[fit-content] leading-tight font-remipr6n-medium ${styles.relativeFontSize5}`}
        >
          <div
            className={`${styles.verticalText} self-stretch  flex-shrink relative max-h-[380px] `}
          >
            {description1}
          </div>
          <div
            className={`${styles.verticalText} self-stretch  flex-shrink relative max-h-[380px] `}
          >
            {description2}
          </div>
        </div>
        <div
          className={`${styles.verticalText} self-stretch flex-1 relative text-[20px] font-remipr6n-exheavy max-w-[70px] vertical-rl`}
        >
          {title}
        </div>
      </div> */
}
