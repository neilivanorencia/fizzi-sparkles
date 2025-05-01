import { LinkField } from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";
import clsx from "clsx";

type Props = {
  buttonLink: LinkField;
  buttonText: string | null;
  className?: string;
};

export default function Button({ buttonLink, buttonText, className }: Props) {
  return (
    <PrismicNextLink
      className={clsx(
        "font-family-alpino rounded-xl bg-orange-500 px-5 py-4 text-center text-xl font-bold tracking-wide text-white uppercase transition-colors duration-300 ease-in-out hover:bg-orange-600 md:text-2xl",
        className
      )}
      field={buttonLink}
    >
      {buttonText}
    </PrismicNextLink>
  );
}
