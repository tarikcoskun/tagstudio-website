import { solarCollection } from "./collections/solar";
import { lucideCollection } from "./collections/lucide";

export interface IconCollection {
  specs: {
    viewBox: string;
    size: number | string;
  };
  icons: {
    [key: string]: React.ReactNode;
  };
}

const collections = {
  solar: solarCollection,
  lucide: lucideCollection,
};

type Collections = keyof typeof collections;

export type IconList<T extends Collections> = keyof typeof collections[T]["icons"];

interface IconProps<T extends Collections> extends React.ComponentPropsWithoutRef<"svg"> {
  collection?: T;
  icon: IconList<T>;
  size?: number | string;
}

export interface StandaloneIconProps extends React.ComponentPropsWithoutRef<"svg"> {
  size?: number | string;
}

export function Icon<T extends Collections = "lucide">(props: IconProps<T>) {
  const { icon, collection = "lucide", size = collections[collection].specs.size, ...iconProps } = props;

  const { specs, icons } = collections[collection];
  const body = icons[icon as keyof typeof icons] as React.ReactNode;

  return (
    <svg
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox={specs.viewBox}
      width={size}
      height={size}
      {...iconProps}
    >
      {body}
    </svg>
  );
}
