import { clsx } from "clsx";
import { cva, type VariantProps } from "class-variance-authority";

const buttonVariants = cva(
  "relative isolate box-border inline-flex h-16 shrink-0 cursor-pointer items-center justify-center gap-4 rounded-lg border-2 px-6 py-5 text-lg leading-6 font-semibold tracking-tighter whitespace-nowrap uppercase before:absolute before:inset-0 before:-z-10 before:rounded-lg before:bg-gradient-to-r before:opacity-0 before:transition-opacity before:duration-200 hover:before:opacity-100 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:before:opacity-100 [&_svg]:pointer-events-none [&_svg]:size-6 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        primary:
          "bg-salmon-50 before:from-salmon-100 before:to-salmon-50 border-neutral-900 text-neutral-900 outline-neutral-700 [&_svg]:fill-neutral-900",
        secondary:
          "border-white bg-transparent text-white outline-neutral-200 before:from-neutral-700 before:to-neutral-900 [&_svg]:fill-white",
      },
    },
  },
);

type ButtonProps<T extends React.ElementType> = {
  as?: T;
  className?: string;
} & VariantProps<typeof buttonVariants>;

export function Button<T extends React.ElementType = "button">(
  props: Omit<React.ComponentPropsWithoutRef<T>, keyof ButtonProps<T>> & ButtonProps<T>,
) {
  const { as, variant, className, ...rest } = props;

  const Component = as ?? "div";

  return <Component className={clsx(buttonVariants({ variant, className }))} {...rest} />;
}
