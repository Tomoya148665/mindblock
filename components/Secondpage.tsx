import React from "react";
import styles from "../pages/styles.module.css";

interface SecondpageProps {
  description: string;
  name: string;
}

const Secondpage: React.FC<SecondpageProps> = ({ description, name }) => {
  return (
    <div>
      <div
        className={`${styles.background2} w-full h-screen self-stretch flex-auto overflow-hidden flex flex-col items-center justify-center gap-[10px] `}
      >
        <div
          className={`self-stretch flex-1 flex flex-row items-start justify-center gap-[10px] max-h-[400px] py-[20px] lg:px-[80px] ${styles.relativeFontSize4}`}
        >
          <div
            className={`${styles.verticalText} self-stretch inline-flex relative vertical-rl text-[20px] max-w-[fit-content] leading-tight font-remipr6n-medium`}
          >
            {description}
          </div>{" "}
          <div
            className={`${styles.verticalText} self-stretch flex-1 relative max-w-[70px] text-[20px] font-remipr6n-exheavy `}
          >
            マインドブロックの解説
          </div>
          <div
            className={`${styles.verticalText} self-stretch flex-1 relative max-w-[70px] `}
          >
            <div className=" bg-black text-white font-remipr6n-exheavy">
              {name}
            </div>
          </div>
          <div
            className={`${styles.verticalText} self-stretch flex-1 relative max-w-[70px] text-[20px] font-remipr6n-exheavy`}
          >
            あなたのマインドブロック
          </div>
        </div>
        <div
          className="relative h-[500px] w-[372px] object-cover"
          style={{
            backgroundImage: "url('/2x.png')",
            backgroundPosition: "top",
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
          }}
        />
      </div>
    </div>
  );
};

export default Secondpage;
