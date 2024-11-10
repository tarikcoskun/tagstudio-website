import type { PolymorphicComponentPropsWithRef } from "@/types/polymorphic";

import React from "react";

// Styles
import style from "./Button.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(style);

type ButtonColors = "surface";
type ButtonVariants = "solid" | "soft" | "ghost";

export interface ButtonProps {
  color?: ButtonColors;
  variant?: ButtonVariants;
  padding?: "base" | "square" | "none";
  size?: "sm" | "base" | "lg";
  leading?: React.ReactNode;
  trailing?: React.ReactNode;
}

type Props<C extends React.ElementType> = PolymorphicComponentPropsWithRef<C, ButtonProps>;
type ButtonComponent = <C extends React.ElementType = "button">(props: Props<C>) => React.ReactNode;

const ButtonRoot: ButtonComponent = React.forwardRef(<C extends React.ElementType = "button">(props: Props<C>, ref: any) => {
  const {
    as,
    type = "button",
    color,
    variant = "solid",
    padding = "base",
    size = "base",
    leading,
    trailing,
    className,
    children,
    ...buttonProps
  } = props;

  const Component = as || "button";

  return (
    <Component
      type={type}
      className={cx("button", `${variant}-${color}`, `padding-${padding}`, `size-${size}`, className)}
      {...buttonProps}
      ref={ref}
    >
      {leading}
      {children}
      {!!trailing && <span className={cx("trailing")}>{trailing}</span>}
    </Component>
  );
});

interface ButtonGroupProps extends React.ComponentPropsWithoutRef<"div"> {
  color?: ButtonColors;
  variant?: ButtonVariants;
  disabled?: boolean;
};

function ButtonGroup(props: ButtonGroupProps) {
  const { color, variant = "solid", disabled, className, children, ...groupProps } = props;

  return (
    <div className={cx("button-group", className)} {...groupProps}>
      {React.Children.map(children, (child) => {
        if (!React.isValidElement(child)) return;
        return React.cloneElement(child, { color, variant, disabled } as ButtonProps);
      })}
    </div>
  );
}

export const Button = Object.assign(ButtonRoot, {
  Group: ButtonGroup,
});
