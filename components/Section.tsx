// Styles
import style from "./Section.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(style);

interface SectionProps extends React.ComponentPropsWithoutRef<"section"> {
  padding?: "base" | "content";
};

function SectionRoot(props: SectionProps) {
  const { className, padding = "base", children, ...sectionProps } = props;

  return (
    <section
      className={cx("section", `padding-${padding}`, className)}
      {...sectionProps}
    >
      {children}
    </section>
  );
}

type SectionHeaderProps = React.ComponentPropsWithoutRef<"header">;

function SectionHeader(props: SectionHeaderProps) {
  const { className, children, ...headerProps } = props;

  return (
    <header className={cx("section-header", className)} {...headerProps}>
      {children}
    </header>
  );
}

export const Section = Object.assign(SectionRoot, {
  Header: SectionHeader,
});
