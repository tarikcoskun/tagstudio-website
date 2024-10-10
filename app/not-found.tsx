// Components
import Link from "next/link";
import { Button } from "@/components/Button";

// Styles
import style from "./not-found.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(style);

export default function NotFoundPage() {
  return (
    <main className={cx("page")}>
      <h2>Error 404</h2>
      <p>The page you are looking for does not exist.</p>
      <Button color="surface" variant="soft" as={Link} href="/">Back to Home</Button>
    </main>
  );
}
