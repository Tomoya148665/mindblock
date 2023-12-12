import type { NextPage } from "next";
import MindblockDescription from "../components/mindblock-description";
import ConsicousnessLevel from "../components/consicousness-level";
import ConsiousnessDescription from "../components/consiousness-description";
import Image from "next/image";
import styles from "./styles.module.css";
import { useResponsiveBackgroundImage } from "../hooks/useResponsiveBackgroundImage";

const Desktop3: NextPage = () => {
  const backgroundImage = useResponsiveBackgroundImage();

  return (
    <div
      className={`${styles.background} ${styles.fullHeightContainer} relative w-full overflow-hidden flex items-center justify-start py-0 box-border bg-cover bg-no-repeat bg-[top] text-center text-lightskyblue font-pistilli-pro px-[10px] xs:px-[15px] sm:px-[40px] md:px-[50px] lg:px-[60px]`}
    >
      <div className="self-stretch flex flex-col items-center justify-center">
        <div className="self-stretch flex flex-col items-start justify-center gap-[48px] text-left text-base font-hiragino-kaku-gothic-stdn">
          <div className="w-full flex flex-col items-start justify-start gap-[10px] max-w-[100px] xs:max-w-[120px] sm:max-w-[180px] md:max-w-[280px] lg:max-w-[360px]">
            <div className="self-stretch relative text-[13px] xs:text-[16px] sm:text-[20px] md:text-[28px] lg:text-[22px] mt-40 sm:mt-80 md:mt-100">
              あなたのマインドブロックは？
            </div>
            <MindblockDescription />
          </div>
          <div className="w-full flex flex-col items-start justify-start gap-[10px] max-w-[130px] sm:max-w-[180px] md:max-w-[250px] sm:gap-[2px] md:gap-[16px]">
            <ConsicousnessLevel />
            <ConsiousnessDescription />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Desktop3;
