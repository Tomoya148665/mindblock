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
    <>
      <div
        className={` ${styles.fullHeightContainer} relative w-full  mx-auto overflow-hidden flex items-center justify-start py-0 box-border  text-center text-lightskyblue px-[10px] `}
      >
        <div className="relative">
          <picture>
            <source media="(min-width: 1025px)" srcset="/desktop.png" />
            <img
              src="/mobile.png"
              alt="Description of the image"
              className="w-full object-contain relative"
            />
          </picture>
        </div>
        <div
          className={`absolute ${styles.left20} ${styles.top30} ${styles.relativeFontSize} self-stretch flex flex-col items-center justify-center`}
        >
          <div
            className={`self-stretch flex flex-col items-start justify-center ${styles.gapVw} text-left text-base font-hiragino-kaku-gothic-stdn`}
          >
            <div className="w-full flex flex-col items-start justify-start gap-[10px] ">
              <div
                className={`self-stretch relative ${styles.relativeFontSize}`}
              >
                あなたのマインドブロックは？
              </div>
              <MindblockDescription />
            </div>
            <div
              className={`w-full flex flex-col items-start justify-start gap-[10px] `}
            >
              <ConsicousnessLevel />
              <ConsiousnessDescription />
            </div>
          </div>
        </div>
      </div>

      <div className="relative w-full flex flex-col items-center justify-center">
        <div
          className={`${styles.background2} w-full h-screen self-stretch flex-auto overflow-hidden flex flex-col items-center justify-center gap-[10px] `}
        >
          <div
            className={`self-stretch flex-1 flex flex-row items-start justify-center gap-[10px] max-h-[400px] py-[20px] lg:px-[80px] ${styles.relativeFontSize4}`}
          >
            <div
              className={`${styles.verticalText} self-stretch inline-flex relative vertical-rl max-w-[fit-content] leading-tight font-remipr6n-medium`}
            >
              「自分がやりきれば必ずうまくいく」という念は全てを自己責任で解決しようとするパターンです。これは厳しい父親や常識的で保守的な母親の影響かもしれません。また、必ず成功しなければならないというプレッシャーを背負っており、自己に対する過剰な期待や理想を持っている可能性があります。この念が原因で状況が予期しない方向に進んだ時、不必要なストレスや焦りを感じてしまうかもしれません。成功が自分のコントロールだけで決まるわけではないので柔軟性を持ち、他者と協力することの大切さを学ぶべきです。
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
                「自分がやり切ればうまくいく」
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

        <div
          className={`${styles.background2} self-stretch flex-auto overflow-hidden flex flex-col items-center justify-center gap-[10px] `}
        >
          <div className="self-stretch flex-1 flex flex-row items-center justify-center gap-[10px]  mt-20 px-[0px] lg:px-[80px] ">
            <div
              className={` flex-1 flex flex-col items-center justify-start gap-[40px] min-h-[800px] max-w-[fit-content] ${styles.relativeFontSize5}`}
            >
              <div
                className={`${styles.verticalText} self-stretch  relative max-h-[400px] `}
              >
                「自分がやりきれば必ずうまくいく」という念は全てを自己責任で解決しようとするパターンです。これは厳しい父親や常識的で保守的な母親の影響かもしれません。また、必ず成功しなければならないというプレッシャーを背負っており、自己に対する過剰な期待や理想を持っている可能性があります。この念が原因で状況が予期しない方向に進んだ時、不必要なストレスや焦りを感じてしまうかもしれません。成功が自分のコントロールだけで決まるわけではないので柔軟性を持ち、他者と協力することの大切さを学ぶべきです。
                「自分がやりきれば必ずうまくいく」という念は全てを自己責任で解決しようとするパターンです。これは厳しい父親や常識的で保守的な母親の影響かもしれません。また、必ず成功しなければならないというプレッシャーを背負っており、自己に対する過剰な期待や理想を持っている可能性があります。この念が原因で状況が予期しない方向に進んだ時、不必要なストレスや焦りを感じてしまうかもしれません。成功が自分のコントロールだけで決まるわけではないので柔軟性を持ち、他者と協力することの大切さを学ぶべきです。
              </div>
              <div
                className={`${styles.verticalText} self-stretch  relative max-h-[400px] `}
              >
                「自分がやりきれば必ずうまくいく」という念は全てを自己責任で解決しようとするパターンです。これは厳しい父親や常識的で保守的な母親の影響かもしれません。また、必ず成功しなければならないというプレッシャーを背負っており、自己に対する過剰な期待や理想を持っている可能性があります。この念が原因で状況が予期しない方向に進んだ時、不必要なストレスや焦りを感じてしまうかもしれません。成功が自分のコントロールだけで決まるわけではないので柔軟性を持ち、他者と協力することの大切さを学ぶべきです。
              </div>
            </div>
            <div
              className={`${styles.verticalText} self-stretch flex-1 relative text-[20px] font-remipr6n-exheavy max-w-[70px] vertical-rl`}
            >
              あなたのゴールや目標への影響　～マインドブロックの弊害～
            </div>
          </div>
        </div>

        <div
          className={`${styles.background2} self-stretch flex-auto overflow-hidden flex flex-col items-center justify-center gap-[10px] `}
        >
          {" "}
          <div className="self-stretch flex-1 flex flex-row items-center justify-center gap-[10px]  mt-20 px-[0px] lg:px-[80px] ">
            <div
              className={`flex-1 flex flex-col items-center justify-start gap-[40px] min-h-[800px] max-w-[fit-content] ${styles.relativeFontSize5}
          `}
            >
              <div
                className={`${styles.verticalText} self-stretch  relative max-h-[400px] `}
              >
                「自分がやりきれば必ずうまくいく」という念は全てを自己責任で解決しようとするパターンです。これは厳しい父親や常識的で保守的な母親の影響かもしれません。また、必ず成功しなければならないというプレッシャーを背負っており、自己に対する過剰な期待や理想を持っている可能性があります。この念が原因で状況が予期しない方向に進んだ時、不必要なストレスや焦りを感じてしまうかもしれません。成功が自分のコントロールだけで決まるわけではないので柔軟性を持ち、他者と協力することの大切さを学ぶべきです。
              </div>
              <div
                className={`${styles.verticalText} self-stretch  relative max-h-[400px] `}
              >
                「自分がやりきれば必ずうまくいく」という念は全てを自己責任で解決しようとするパターンです。これは厳しい父親や常識的で保守的な母親の影響かもしれません。また、必ず成功しなければならないというプレッシャーを背負っており、自己に対する過剰な期待や理想を持っている可能性があります。この念が原因で状況が予期しない方向に進んだ時、不必要なストレスや焦りを感じてしまうかもしれません。成功が自分のコントロールだけで決まるわけではないので柔軟性を持ち、他者と協力することの大切さを学ぶべきです。
              </div>
            </div>
            <div
              className={`${styles.verticalText} self-stretch flex-1 relative text-[20px] font-remipr6n-exheavy max-w-[70px] vertical-rl`}
            >
              マインドブロックはいかに”幻”か？{" "}
            </div>
          </div>
        </div>

        <div
          className={`${styles.background2} self-stretch flex-auto overflow-hidden flex flex-col items-center justify-center gap-[10px] `}
        >
          {" "}
          <div className="self-stretch flex-1 flex flex-row items-center justify-center gap-[10px]  mt-20 px-[0px] lg:px-[80px] ">
            <div
              className={` flex-1 flex flex-col items-center justify-start gap-[40px] min-h-[800px] max-w-[fit-content] ${styles.relativeFontSize5}
          `}
            >
              <div
                className={`${styles.verticalText} self-stretch  relative max-h-[400px] `}
              >
                「自分がやりきれば必ずうまくいく」という念は全てを自己責任で解決しようとするパターンです。これは厳しい父親や常識的で保守的な母親の影響かもしれません。また、必ず成功しなければならないというプレッシャーを背負っており、自己に対する過剰な期待や理想を持っている可能性があります。この念が原因で状況が予期しない方向に進んだ時、不必要なストレスや焦りを感じてしまうかもしれません。成功が自分のコントロールだけで決まるわけではないので柔軟性を持ち、他者と協力することの大切さを学ぶべきです。
              </div>
              <div
                className={`${styles.verticalText} self-stretch  relative max-h-[400px] `}
              >
                「自分がやりきれば必ずうまくいく」という念は全てを自己責任で解決しようとするパターンです。これは厳しい父親や常識的で保守的な母親の影響かもしれません。また、必ず成功しなければならないというプレッシャーを背負っており、自己に対する過剰な期待や理想を持っている可能性があります。この念が原因で状況が予期しない方向に進んだ時、不必要なストレスや焦りを感じてしまうかもしれません。成功が自分のコントロールだけで決まるわけではないので柔軟性を持ち、他者と協力することの大切さを学ぶべきです。
              </div>
            </div>
            <div
              className={`${styles.verticalText} self-stretch flex-1 relative text-[20px] font-remipr6n-exheavy max-w-[70px] vertical-rl`}
            >
              マインドブロックの”原体験”とは？{" "}
            </div>
          </div>
        </div>

        <div
          className={`${styles.background2} self-stretch flex-auto overflow-hidden flex flex-col items-center justify-center gap-[10px] `}
        >
          {" "}
          <div className="self-stretch flex-1 flex flex-row items-center justify-center gap-[10px]  mt-20 px-[0px] lg:px-[80px] ">
            <div
              className={`flex-1 flex flex-col items-center justify-start gap-[40px]  max-w-[fit-content] ${styles.relativeFontSize5}
          `}
            >
              <div
                className={`${styles.verticalText} self-stretch  relative max-h-[400px] `}
              >
                「自分がやりきれば必ずうまくいく」という念は全てを自己責任で解決しようとするパターンです。これは厳しい父親や常識的で保守的な母親の影響かもしれません。また、必ず成功しなければならないというプレッシャーを背負っており、自己に対する過剰な期待や理想を持っている可能性があります。この念が原因で状況が予期しない方向に進んだ時、不必要なストレスや焦りを感じてしまうかもしれません。成功が自分のコントロールだけで決まるわけではないので柔軟性を持ち、他者と協力することの大切さを学ぶべきです。
              </div>
            </div>
            <div
              className={`${styles.verticalText} self-stretch flex-1 relative text-[20px] font-bold max-w-[70px] vertical-rl`}
            >
              あなたのマインドブロック
            </div>
          </div>
          <img
            className="relative w-[482px] h-[400px] object-cover"
            alt=""
            src="/image (19).png"
          />
        </div>
      </div>
    </>
  );
};

export default Desktop3;
