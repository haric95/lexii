import React from "react";

type ButtonProps = {
  priority?: "primary" | "secondary";
  size?: "s" | "m" | "l";
  inverted?: boolean;
};

export const Button: React.FC<ButtonProps> = ({
  priority = "primary",
  inverted = false,
  size = "m",
  children,
}) => {
  return <button className="button">{children}</button>;
};
