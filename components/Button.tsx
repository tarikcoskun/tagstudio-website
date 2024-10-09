import type { PolymorphicComponentPropsWithRef } from "@/types/polymorphic";

import React from "react";

// Styles
import style from "./Button.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(style);

export interface ButtonProps {
  color?: "surface";
  variant?: "solid" | "soft" | "ghost" | "link";
  padding?: "base" | "square" | "none";
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
      className={cx("button", `${variant}-${color}`, `padding-${padding}`, className)}
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
  disabled?: boolean;
};

function ButtonGroup(props: ButtonGroupProps) {
  const { className, disabled, children, ...groupProps } = props;

  return (
    <div aria-disabled={disabled} className={cx("button-group", className)} {...groupProps}>
      {children}
    </div>
  );
}

export const Button = Object.assign(ButtonRoot, {
  Group: ButtonGroup,
});
