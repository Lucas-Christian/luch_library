export type BookData = {
  categories: string;
  ariaLabel: string;
  authors: string[];
  title: string;
  src: string;
  alt: string;
  id: string;
}

export const booksData = [
  {
    categories: "software_development software_engineering",
    ariaLabel: "Livro Engenharia de Software uma abordagem profissional",
    authors: ["Roger S. Pressman", "Bruce R. Maxim"],
    title: "Engenharia de Software\nUma abordagem profissional",
    src: "https://raw.githubusercontent.com/LordLuch/images/main/books/software_engineering_a_professional_approach.webp",
    alt: "Capa do livro Engenharia de Software uma abordagem profissional",
    id: "software_engineering_a_professional_approach"
  },
  {
    categories: "software_development software_engineering",
    ariaLabel: "Livro Engenharia de Software por Ian Sommerville",
    authors: ["Ian Sommerville"],
    title: "Engenharia de Software\nIan Sommerville",
    src: "https://raw.githubusercontent.com/LordLuch/images/main/books/software_engineering_ian_sommerville.webp",
    alt: "Capa do livro Engenharia de Software por Ian Sommerville",
    id: "software_engineering_ian_sommerville"
  },
  {
    categories: "software_development digital_design",
    ariaLabel: "Livro Interação Humano Computador",
    authors: ["David Benyon"],
    title: "Interação Humano Computador",
    src: "https://raw.githubusercontent.com/LordLuch/images/main/books/human_computer_interaction.webp",
    alt: "Capa do livro Interação Humano Computador",
    id: "human_computer_interaction"
  },
  {
    categories: "business",
    ariaLabel: "Livro O Investidor Inteligente",
    authors: ["Benjamin Graham"],
    title: "O Investidor Inteligente",
    src: "https://raw.githubusercontent.com/LordLuch/images/main/books/the_smart_investor.webp",
    alt: "Capa do livro O Investidor Inteligente",
    id: "the_smart_investor"
  }
]