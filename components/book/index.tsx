import styles from "../../styles/books.module.css";
import { Title } from "../title";

type BookProps = {
  categories: string;
  ariaLabel: string;
  title: string[];
  href: string;
  src: string;
  alt: string;
}
export function Book({ title, src, alt, categories, href, ariaLabel }: BookProps) {
  let classes = `${styles.book} book ${categories}`;
  return (
    <div className={classes}>
      <a href={href} aria-label={ariaLabel}>
        <div className={styles.divBeforeImage}>
          <img
            width="210"
            height="270"
            src={src}
            alt={alt}
          />
        </div>
        <p className={styles.book_title}>
          {Title(title)}
        </p>
      </a>
    </div>
  );
}