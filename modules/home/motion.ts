import type { HTMLMotionProps, Variants } from "framer-motion";

const container: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const item: Variants = {
  hidden: { y: 10, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

const generic: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

export const motionContainerProps: HTMLMotionProps<any> = {
  variants: container,
  initial: "hidden",
  whileInView: "visible",
  viewport: {
    once: true,
  },
};

export const motionItemProps: HTMLMotionProps<any> = {
  variants: item,
};

export const motionProps: HTMLMotionProps<any> = {
  variants: generic,
  initial: "hidden",
  whileInView: "visible",
  viewport: {
    once: true,
    amount: 0.75,
  },
};