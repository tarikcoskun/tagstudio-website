import React from "react";
import { composeRefs } from "@/util/composeRefs";
import { useClickOutside } from "@/hooks/useClickOutside";
import { useControllableState } from "@/hooks/useControllableState";

// Components
import { Button, type ButtonProps } from "./Button";

// Styles
import style from "./Dropdown.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(style);

interface DropdownContextValue {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onOpenToggle: () => void;
}

const DropdownContext = React.createContext({} as DropdownContextValue);

function DropdownProvider({ children, ...state }: React.PropsWithChildren<DropdownContextValue>) {
  return <DropdownContext.Provider value={state}>{children}</DropdownContext.Provider>;
}

/* ---------------------
 * DropdownRoot
 * --------------------- */

interface DropdownProps {
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  className?: string;
  children?: React.ReactNode;
}

const DropdownRoot = React.forwardRef<HTMLDivElement, DropdownProps>((props, ref) => {
  const { open: openProp, defaultOpen, onOpenChange, className, children } = props;

  const [open = false, setOpen] = useControllableState({
    prop: openProp,
    defaultProp: defaultOpen,
    onChange: onOpenChange,
  });

  const clickOutsideRef = useClickOutside(() => setOpen(false));

  return (
    <DropdownProvider
      open={open}
      onOpenChange={setOpen}
      onOpenToggle={React.useCallback(() => setOpen((prevOpen) => !prevOpen), [setOpen])}
    >
      <div
        className={cx("dropdown", className)}
        ref={composeRefs(ref, clickOutsideRef)}
      >
        {children}
      </div>
    </DropdownProvider>
  );
});

/* ---------------------
 * DropdownTrigger
 * --------------------- */

type DropdownTriggerProps = Omit<React.ComponentPropsWithoutRef<"button">, "color"> & ButtonProps;

const DropdownTrigger = React.forwardRef<HTMLButtonElement, DropdownTriggerProps>((props, ref) => {
  const { onClick, children, ...triggerProps } = props;

  const ctx = React.useContext(DropdownContext);
  const isOpen = ctx.open;

  return (
    <Button
      aria-haspopup="menu"
      aria-expanded={isOpen}
      data-state={isOpen ? "open" : "closed"}
      {...triggerProps}
      ref={ref}
      onClick={(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        onClick?.(event);
        ctx.onOpenToggle();
      }}
      onKeyDown={(event: { key: string }) => {
        if ([" ", "Enter"].includes(event.key)) ctx.onOpenToggle();
      }}
    >
      {children}
    </Button>
  );
});

/* ---------------------
 * DropdownMenuContent
 * --------------------- */

interface DropdownMenuContentProps {
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

const DropdownMenu = React.forwardRef<HTMLDivElement, DropdownMenuContentProps>((props, ref) => {
  const { className, children } = props;

  const ctx = React.useContext(DropdownContext);
  const isOpen = ctx.open;

  return isOpen && (
    <div
      role="menu"
      className={cx("dropdown-menu", className)}
      ref={ref}
    >
      {children}
    </div>
  );
});

/* ---------------------
 * DropdownMenuGroup
 * --------------------- */

type DropdownMenuGroupProps = React.ComponentPropsWithoutRef<"div">;

const DropdownMenuGroup = React.forwardRef<HTMLDivElement, DropdownMenuGroupProps>((props, ref) => {
  const { className, children, ...groupProps } = props;

  return (
    <div
      className={cx("menu-group", className)}
      {...groupProps}
      ref={ref}
    >
      {children}
    </div>
  );
});

export const Dropdown = Object.assign(DropdownRoot, {
  Trigger: DropdownTrigger,
  Menu: DropdownMenu,
  MenuGroup: DropdownMenuGroup,
});
