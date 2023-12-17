import React from "react";
import styles from "../pages/styles.module.css";

interface FirstpageProps {
  name: string;
  consicousnessLevel: string;
  conciousness: string;
}

const Firstpage: React.FC<FirstpageProps> = ({
  name,
  consicousnessLevel,
  conciousness,
}) => {
  return (
    <div
      className="bg-cover bg-no-repeat h-screen"
      style={{ backgroundImage: `url('/images.jpg')` }}
    >
      <div
        className={` ${styles.fullHeightContainer} relative w-full  mx-auto overflow-hidden flex items-center  justify-start  box-border  text-center text-lightskyblue  `}
      >
        <div className="relative">
          <img
            src="/mobile12.png"
            alt="Description of the image"
            className="block w-full object-contain relative lg:h-screen"
          />
          <div
            className={`absolute  ${styles.left20} ${styles.top30} self-stretch flex flex-col items-center justify-center`}
          >
            <div
              className={`self-stretch flex flex-col items-start justify-center ${styles.gapVw} text-left text-base font-hiragino-kaku-gothic-stdn`}
            >
              <div className="w-full flex flex-col items-start justify-start gap-[2px] ">
                <div
                  className={`self-stretch relative ${styles.relativeFontSize}`}
                >
                  あなたのマインドブロックは？
                </div>
                <div
                  className={`self-stretch relative ${styles.relativeFontSize1} ${styles.leadingVw2} ${styles.maxWidthVw2} text-black `}
                >
                  {name}
                </div>{" "}
              </div>
              <div
                className={`w-full flex flex-col items-start justify-start gap-[2px] `}
              >
                <div
                  className={`self-stretch relative ${styles.relativeFontSize} `}
                >
                  意識レベル：{consicousnessLevel}
                </div>
                <div
                  className={`self-stretch relative ${styles.relativeFontSize3} ${styles.leadingVw} ${styles.maxWidthVw} text-black `}
                >
                  {conciousness}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Firstpage;
