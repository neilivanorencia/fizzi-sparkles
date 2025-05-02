"use client";

import { asText, Content } from "@prismicio/client";
import { PrismicRichText, PrismicText, SliceComponentProps } from "@prismicio/react";
import { View } from "@react-three/drei";
import clsx from "clsx";
import { FC } from "react";

import { Bounded } from "@/components/bounded";
import Scene from "@/slices/Grid/scene";

/**
 * Props for `Grid`.
 */
export type GridProps = SliceComponentProps<Content.GridSlice>;

/**
 * Component for "Grid" Slices.
 */
const Grid: FC<GridProps> = ({ slice }) => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="grid-text-container relative bg-yellow-300 text-sky-950"
    >
      <div>
        <div className="relative z-[100] grid">
          <View className="grid-text-view absolute top-0 left-0 h-screen w-full">
            <Scene />
          </View>
          {slice.primary.text_group.map((item, index) => (
            <div
              key={asText(item.heading)}
              className="grid-section grid h-screen place-items-center gap-x-12 md:grid-cols-2"
            >
              <div
                className={clsx("p-4 text-center backdrop-blur-lg md:text-left", {
                  "col-start-1": index % 2 === 0,
                  "md:col-start-2": index % 2 !== 0,
                })}
              >
                <h2 className="font-family-alpino text-5xl font-bold text-balance lg:text-6xl">
                  <PrismicText field={item.heading} />
                </h2>

                <div className="font-family-alpino mt-4 text-2xl lg:text-3xl">
                  <PrismicRichText field={item.body} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Bounded>
  );
};

export default Grid;
