// Styles
import style from "./Showcase.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(style);

export function Showcase() {
  return (
    <section className={cx("showcase")}>
      <div className={cx("text-container")}>
        <h2>Get rid of the clutter</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae autem maiores suscipit nesciunt tenetur.</p>
      </div>
      <div className={cx("items")}>
        {Array.from({ length: 20 }).map((_, idx) => (
          <div key={idx} className={cx("item")}>{idx + 1}</div>
        ))}
      </div>
    </section>
  );
}
