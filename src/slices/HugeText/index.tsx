import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { FC } from "react";

/**
 * Props for `HugeText`.
 */
export type HugeTextProps = SliceComponentProps<Content.HugeTextSlice>;

/**
 * Component for "HugeText" Slices.
 */
const HugeText: FC<HugeTextProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="grid min-h-screen w-screen place-items-center overflow-hidden bg-[#FE6334] text-[#FEE832]"
    >
      <h2 className="font-family-alpino grid w-full gap-[3vw] py-10 text-center leading-[0.7] font-black uppercase">
        <div className="text-[34vw]">Soda</div>
        <div className="grid gap-[3vw] text-[34vw] md:flex md:text-[11vw]">
          <span className="inline-block">that </span>
          <span className="inline-block max-md:text-[27vw]">makes </span>
          <span className="inline-block max-md:text-[40vw]">you</span>
        </div>
        <div className="text-[32vw]">Smile</div>
      </h2>
    </section>
  );
};

export default HugeText;
