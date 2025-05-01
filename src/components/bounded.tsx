import clsx from "clsx";

type BoundedProps = {
  as?: React.ElementType;
  className?: string;
  children: React.ReactNode;
  [key: string]: any;
};

export const Bounded = ({
  as: Comp = "section",
  className,
  children,
  ...restProps
}: BoundedProps) => {
  const Component = Comp as any;

  return (
    <Component className={clsx("px-4 first:pt-10 md:px-6", className)} {...restProps}>
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center">{children}</div>
    </Component>
  );
};
