import { openDialog } from "../lib/functions/dialog";
import { Dialog } from "../components/dialog";
import styles from "../styles/home.module.css";
import Layout from "../components/layout";
import Head from "next/head";

export default function Index() {
  return (
    <Layout>
      <Head>
        <title>Luch Library · Início</title>
        <meta name="description" content="Página inicial da biblioteca do Lucas Christian, leia os livros que quiser." />
      </Head>
      <main>
        <img 
          srcSet="/images/bookstore_medium.webp 1280w, /images/bookstore_small.webp 640w"
          sizes="
            (min-width: 640px) 300px, 
            (min-width: 768px) 350px,
            (min-width: 1024px) 380px,
            (min-width: 1280px) 400px,
            (min-width: 1536px) 640px,
            230px
          "
          width={300}
          height={200}
          src="/images/bookstore_medium.webp"
          alt="Imagem de uma biblioteca"
          className="img_with_dialog"
          onClick={openDialog}
        />
        <p className={styles.home_description}>
          Seja bem-vindo à minha biblioteca, aqui eu reúno os livros que eu pretendo ler, e caso algum se interesse por algum pode lê-lo.
        </p>
        <a href="/books/" className="button_redirection">
          <button>
            <svg 
              xmlns="http://www.w3.org/2000/svg" fill="none" 
              viewBox="0 0 24 24" strokeWidth="1.5" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
            </svg>          
            <p>Ver todos os livros</p>
          </button>
        </a>
      </main>
      <Dialog 
        srcSet="/images/bookstore_medium.webp 1280w, /images/bookstore_small.webp 640w"
        sizes="
          (min-width: 640px) 400px, 
          (min-width: 768px) 450px,
          (min-width: 1024px) 480px,
          (min-width: 1280px) 500px,
          (min-width: 1536px) 640px,
          250px
        "
        height={266.88}
        width={400}
        src="/images/bookstore_medium.webp"
        alt="Imagem de uma biblioteca" 
      />
    </Layout>
  )
}