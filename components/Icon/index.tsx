import { lucide } from "./lib/lucide";
import { solar } from "./lib/solar";

const icons = {
  lucide,
  solar,
};

type Libs = "lucide" | "solar";

export type IconList<T extends Libs> = keyof typeof icons[T];

interface IconProps<T extends Libs> extends React.ComponentPropsWithoutRef<"svg"> {
  lib: T;
  icon: IconList<T>;
  size?: number | string;
}

export function Icon<T extends Libs>(props: IconProps<T>) {
  const { icon, size = "1rem", lib, ...iconProps } = props;

  const body = icons[lib][icon] as React.ReactNode;

  return (
    <svg
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size.toString()}
      height={size.toString()}
      {...iconProps}
    >
      {body}
    </svg>
  );
}
