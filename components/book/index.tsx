import styles from "../../styles/books.module.css";

type BookProps = {
  categories: string;
  ariaLabel: string;
  title: string;
  href: string;
  src: string;
  alt: string;
}
export function Book({ title, src, alt, categories, href, ariaLabel }: BookProps) {
  let classes = `${styles.book} book ${categories}`;
  return (
    <div className={classes}>
      <a href={href} aria-label={ariaLabel}>
        <img
          width="210"
          height="270"
          src={src}
          alt={alt}
        />
        <p className={styles.book_title}>
          {title}
        </p>
      </a>
    </div>
  );
}