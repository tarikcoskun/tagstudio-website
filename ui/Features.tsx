// Components
import { Icon, type IconList } from "@/components/Icon";

// Styles
import style from "./Features.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(style);

interface Feature {
  icon: IconList<"solar">;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: "tag",
    title: "Tags",
    description: "The power of tagging, doubled with tag composition.",
  },
  {
    icon: "library",
    title: "Libraries",
    description: "Libraries contain the representations of your files combined with metadata fields.",
  },
  {
    icon: "document",
    title: "Metadata",
    description: "Add metadata to your library entries such as name, author, artist.",
  },
  {
    icon: "search",
    title: "Search",
    description: "Search for entries based on tags, file names or file types.",
  },
  {
    icon: "filter",
    title: "Filter",
    description: "Special search conditions for untagged/empty entries.",
  },
];

export function Features() {
  return (
    <section className={cx("features")}>
      <h1>Features</h1>
      <div className={cx("grid")}>
        {features.map((feature) => (
          <div key={feature.title} className={cx("feature")}>
            <Icon lib="solar" icon={feature.icon} size={32} />
            <h6>{feature.title}</h6>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
