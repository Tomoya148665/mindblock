import React from "react";
import styles from "../pages/styles.module.css";

interface FinalpageProps {
  description: string;
}

const Finalpage: React.FC<FinalpageProps> = ({ description }) => {
  return (
    <div
      className={`${styles.background2} self-stretch flex-auto  flex flex-col items-center justify-center gap-[10px] `}
    >
      <div className="self-stretch flex-1 flex flex-row items-center h-full justify-center gap-[10px]  my-10 px-[0px] lg:px-[80px] ">
        <div
          className={`flex-1 flex flex-col items-center justify-start max-h-full gap-[40px]  max-w-[fit-content] leading-tight font-remipr6n-medium ${styles.relativeFontSize5}
          `}
        >
          <div
            className={`${styles.verticalText} self-stretch  relative max-h-[400px] `}
          >
            {description}
          </div>
        </div>
      </div>

      <div
        className="relative h-[500px] w-[372px] object-cover"
        style={{
          backgroundImage: "url('/image (19).png')",
          backgroundPosition: "top",
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
        }}
      />
    </div>
  );
};

export default Finalpage;
