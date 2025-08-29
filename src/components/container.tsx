import clsx from "clsx";

type ContainerProps<T extends React.ElementType> = {
  as?: T;
  className?: string;
  children: React.ReactNode;
  pattern?: "light" | "dark";
};

export function Container<T extends React.ElementType = "div">({
  as,
  className,
  children,
  pattern,
  ...rest
}: Omit<React.ComponentPropsWithoutRef<T>, keyof ContainerProps<T>> & ContainerProps<T>) {
  const Component = as ?? "div";

  return (
    <Component
      className={clsx(
        "relative px-4 md:px-8",
        pattern === "light" && "bg-pattern-light",
        pattern === "dark" && "bg-pattern-dark",
        className,
      )}
      {...rest}
    >
      <div className="mx-auto max-w-7xl">{children}</div>
    </Component>
  );
}
