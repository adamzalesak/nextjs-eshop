import { ButtonHTMLAttributes } from "react";

export const Button = ({
  className,
  children,
  ...rest
}: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      className={
        "ml-auto py-1 px-3 rounded-sm bg-violet-500 shadow-md hover:bg-violet-600 text-white " +
        className
      }
      {...rest}
    >
      {children}
    </button>
  );
};
