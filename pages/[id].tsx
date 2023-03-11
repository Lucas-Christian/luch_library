import { openDialog } from "../lib/functions/dialog";
import { booksData } from "../lib/constants/booksData";
import { Dialog } from "../components/dialog";
import styles from "../../styles/book.module.css";
import Layout from "../components/layout";
import Head from "next/head";

export async function getStaticPaths() {
  let bookIds = Object.keys(booksData);
  let paths = [];
  bookIds.forEach((bookId: string) => {
    paths.push({params: { id: bookId }});
  });

  return {
    paths: paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  return {
    props: { id: params.id },
  }

}

export default function Book({ id }: { id: keyof typeof booksData; }) {
  console.log(id);
  return (
    <Layout>
      <Head>
        <title>Luch Library · Livros</title>
        <meta name="description" content="Aqui você pode ler o livro Interação Humano Computador." />      
      </Head>
      <main>

      </main>
      <Dialog
        srcSet={`${booksData[id].src} ${booksData[id].width}px`}
        sizes="
          (min-width: 640px) 260px,
          (min-width: 768px) 270px,
          (min-width: 1024px) 280px,
          (min-width: 1280px) 300px,
          (min-width: 1536px) 310px,
          250px
        "
        width={booksData[id].width}
        height={booksData[id].height}
        src={booksData[id].src}
        alt={booksData[id].alt}
      />
    </Layout>
  )
}