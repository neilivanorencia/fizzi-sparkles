import { FizziLogo } from "@/components/fizzi-logo";

type Props = {};

export default function Header({}: Props) {
  return (
    <header className="-mb-28 flex justify-center py-4">
      <FizziLogo className="z-10 cursor-pointer text-cyan-700" />
    </header>
  );
}
