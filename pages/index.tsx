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
        className={`${styles.background} ${styles.fullHeightContainer} relative w-full max-w-md mx-auto overflow-hidden flex items-center justify-start py-0 box-border bg-contain bg-no-repeat bg-[top] text-center text-lightskyblue font-pistilli-pro px-[10px] `}
      >
        <div className="absolute left-1/5 self-stretch flex flex-col items-center justify-center">
          <div className="self-stretch flex flex-col items-start justify-center gap-[48px] text-left text-base font-hiragino-kaku-gothic-stdn">
            <div className="w-full flex flex-col items-start justify-start gap-[10px] max-w-[100px] ">
              <div className="self-stretch relative text-[8px]  mt-40  ">
                あなたのマインドブロックは？
              </div>
              <MindblockDescription />
            </div>
            <div className="w-full flex flex-col items-start justify-start gap-[10px] max-w-[130px]  ">
              <ConsicousnessLevel />
              <ConsiousnessDescription />
            </div>
          </div>
        </div>
      </div>

      <div className="relative w-full flex flex-col items-center justify-center">
        <div
          className="self-stretch flex-auto overflow-hidden flex flex-col items-center justify-center gap-[10px] bg-[url('/section1@3x.png')] bg-cover bg-no-repeat bg-[top]"
          style={{
            height: "auto",
          }}
        >
          {" "}
          <div className="self-stretch flex-1 flex flex-row items-start justify-center gap-[10px] max-h-[400px] px-[0px] lg:px-[80px]">
            <div
              className={`${styles.verticalText} self-stretch inline-flex relative vertical-rl max-w-[fit-content] `}
            >
              「自分がやりきれば必ずうまくいく」という念は全てを自己責任で解決しようとするパターンです。これは厳しい父親や常識的で保守的な母親の影響かもしれません。また、必ず成功しなければならないというプレッシャーを背負っており、自己に対する過剰な期待や理想を持っている可能性があります。この念が原因で状況が予期しない方向に進んだ時、不必要なストレスや焦りを感じてしまうかもしれません。成功が自分のコントロールだけで決まるわけではないので柔軟性を持ち、他者と協力することの大切さを学ぶべきです。
            </div>{" "}
            <div
              className={`${styles.verticalText} self-stretch flex-1 relative max-w-[70px] text-[20px] font-bold `}
            >
              マインドブロックの解説{" "}
            </div>{" "}
            <div
              className={`${styles.verticalText} self-stretch flex-1 relative max-w-[70px] `}
            >
              <div className=" bg-black text-white">
                「自分がやり切ればうまくいく」
              </div>
            </div>{" "}
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

        <div className="h-screen self-stretch flex-1 overflow-hidden flex flex-col items-start justify-center py-[155px] px-[81px] bg-[url('/section2@3x.png')] bg-cover bg-no-repeat bg-[top]">
          <div className="self-stretch flex-1 flex flex-row items-start justify-center gap-[10px]  px-[0px] lg:px-[80px]">
            <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[10px] min-h-[800px] max-w-[fit-content] ">
              <div
                className={`${styles.verticalText} self-stretch  relative max-h-[300px] `}
              >
                「自分がやりきれば必ずうまくいく」という念は全てを自己責任で解決しようとするパターンです。これは厳しい父親や常識的で保守的な母親の影響かもしれません。また、必ず成功しなければならないというプレッシャーを背負っており、自己に対する過剰な期待や理想を持っている可能性があります。この念が原因で状況が予期しない方向に進んだ時、不必要なストレスや焦りを感じてしまうかもしれません。成功が自分のコントロールだけで決まるわけではないので柔軟性を持ち、他者と協力することの大切さを学ぶべきです。
              </div>
              <div
                className={`${styles.verticalText} self-stretch  relative max-h-[300px] `}
              >
                「自分がやりきれば必ずうまくいく」という念は全てを自己責任で解決しようとするパターンです。これは厳しい父親や常識的で保守的な母親の影響かもしれません。また、必ず成功しなければならないというプレッシャーを背負っており、自己に対する過剰な期待や理想を持っている可能性があります。この念が原因で状況が予期しない方向に進んだ時、不必要なストレスや焦りを感じてしまうかもしれません。成功が自分のコントロールだけで決まるわけではないので柔軟性を持ち、他者と協力することの大切さを学ぶべきです。
              </div>
            </div>
            <div
              className={`${styles.verticalText} self-stretch flex-1 relative text-[20px] font-bold max-w-[70px] vertical-rl`}
            >
              あなたのマインドブロック
            </div>{" "}
          </div>
        </div>

        <div className="self-stretch flex-1 overflow-hidden flex flex-col items-start justify-start py-[155px] px-[81px] bg-[url('/section21@3x.png')] bg-cover bg-no-repeat bg-[top]">
          <div className="self-stretch flex-1 flex flex-row items-start justify-start gap-[10px] max-h-[400px]">
            <div
              className={`${styles.verticalText} self-stretch flex-1 relative vertical-rl `}
            >
              「自分がやりきれば必ずうまくいく」という念は全てを自己責任で解決しようとするパターンです。これは厳しい父親や常識的で保守的な母親の影響かもしれません。また、必ず成功しなければならないというプレッシャーを背負っており、自己に対する過剰な期待や理想を持っている可能性があります。この念が原因で状況が予期しない方向に進んだ時、不必要なストレスや焦りを感じてしまうかもしれません。成功が自分のコントロールだけで決まるわけではないので柔軟性を持ち、他者と協力することの大切さを学ぶべきです。
            </div>
            <div
              className={`${styles.verticalText} self-stretch flex-1 relative max-w-[70px] vertical-rl`}
            >
              あなたのマインドブロック
            </div>{" "}
          </div>
        </div>
        <div className="self-stretch flex-1 overflow-hidden flex flex-col items-start justify-start py-[155px] px-[81px] bg-[url('/section22@3x.png')] bg-cover bg-no-repeat bg-[top]">
          <div className="self-stretch flex-1 flex flex-row items-start justify-start gap-[10px] max-h-[400px]">
            <div
              className={`${styles.verticalText} self-stretch flex-1 relative vertical-rl `}
            >
              「自分がやりきれば必ずうまくいく」という念は全てを自己責任で解決しようとするパターンです。これは厳しい父親や常識的で保守的な母親の影響かもしれません。また、必ず成功しなければならないというプレッシャーを背負っており、自己に対する過剰な期待や理想を持っている可能性があります。この念が原因で状況が予期しない方向に進んだ時、不必要なストレスや焦りを感じてしまうかもしれません。成功が自分のコントロールだけで決まるわけではないので柔軟性を持ち、他者と協力することの大切さを学ぶべきです。
            </div>{" "}
            <div
              className={`${styles.verticalText} self-stretch flex-1 relative max-w-[70px] vertical-rl`}
            >
              あなたのマインドブロック
            </div>{" "}
          </div>
        </div>
        <div className="self-stretch flex-1 overflow-hidden flex flex-col items-center justify-start py-2.5 px-[81px] gap-[29px] bg-[url('/section3@3x.png')] bg-cover bg-no-repeat bg-[top]">
          <div className="self-stretch flex-1 flex flex-row items-start justify-start gap-[10px] max-h-[400px] px-[0px] lg:px-[80px]">
            <div
              className={`${styles.verticalText} self-stretch flex-1 relative vertical-rl `}
            >
              「自分がやりきれば必ずうまくいく」という念は全てを自己責任で解決しようとするパターンです。これは厳しい父親や常識的で保守的な母親の影響かもしれません。また、必ず成功しなければならないというプレッシャーを背負っており、自己に対する過剰な期待や理想を持っている可能性があります。この念が原因で状況が予期しない方向に進んだ時、不必要なストレスや焦りを感じてしまうかもしれません。成功が自分のコントロールだけで決まるわけではないので柔軟性を持ち、他者と協力することの大切さを学ぶべきです。
            </div>{" "}
            <div
              className={`${styles.verticalText} self-stretch flex-1 relative max-w-[70px] vertical-rl`}
            >
              あなたのマインドブロック
            </div>{" "}
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
