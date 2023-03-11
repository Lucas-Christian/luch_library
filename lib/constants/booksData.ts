export type BookData = {
  categories: string;
  ariaLabel: string;
  download: string;
  authors: string[];
  height: number;
  width: number;
  title: string;
  read: string;
  src: string;
  alt: string;
  id: string;
}

export const booksData = {
  software_engineering_a_professional_approach: {
    categories: "software_development software_engineering",
    ariaLabel: "Livro Engenharia de Software uma abordagem profissional",
    download: "https://drive.google.com/uc?id=1Dew5uoCNkSYpxdDtqKkVdag_XAtm6x9a&export=download",
    authors: ["Roger S. Pressman", "Bruce R. Maxim"],
    height: 406,
    width: 314,
    title: "Engenharia de Software\nUma abordagem profissional",
    read: "https://drive.google.com/file/d/1Dew5uoCNkSYpxdDtqKkVdag_XAtm6x9a/view",
    src: "https://raw.githubusercontent.com/LordLuch/images/main/books/software_engineering_a_professional_approach.webp",
    alt: "Capa do livro Engenharia de Software uma abordagem profissional",
    id: "software_engineering_a_professional_approach",
  },
  software_engineering_ian_sommerville: {
    categories: "software_development software_engineering",
    ariaLabel: "Livro Engenharia de Software por Ian Sommerville",
    download: "https://drive.google.com/uc?id=1DfakjyKVX7LC9N2ZybPeBqRZ4veTQdL5&export=download",
    authors: ["Ian Sommerville"],
    height: 444,
    width: 330,
    title: "Engenharia de Software\nIan Sommerville",
    read: "https://drive.google.com/file/d/1DfakjyKVX7LC9N2ZybPeBqRZ4veTQdL5/view",
    src: "https://raw.githubusercontent.com/LordLuch/images/main/books/software_engineering_ian_sommerville.webp",
    alt: "Capa do livro Engenharia de Software por Ian Sommerville",
    id: "software_engineering_ian_sommerville"
  },
  human_computer_interaction: {
    categories: "software_development digital_design",
    ariaLabel: "Livro Interação Humano Computador",
    download: "https://drive.google.com/uc?id=1pcgx8KzVR1xactop2UUqs6baC0r-ZxnI&export=download",
    authors: ["David Benyon"],
    height: 595,
    width: 397,
    title: "Interação Humano Computador",
    read: "https://drive.google.com/file/d/1pcgx8KzVR1xactop2UUqs6baC0r-ZxnI/view",
    src: "https://raw.githubusercontent.com/LordLuch/images/main/books/human_computer_interaction.webp",
    alt: "Capa do livro Interação Humano Computador",
    id: "human_computer_interaction"
  },
  the_smart_investor: {
    categories: "business",
    ariaLabel: "Livro O Investidor Inteligente",
    download: "https://drive.google.com/uc?id=1vsWKbF2jSRZgpQTm9z92TvADDwye3-dB&export=download",
    authors: ["Benjamin Graham"],
    height: 486,
    width: 395,
    title: "O Investidor Inteligente",
    read: "https://drive.google.com/file/d/1vsWKbF2jSRZgpQTm9z92TvADDwye3-dB/view",
    src: "https://raw.githubusercontent.com/LordLuch/images/main/books/the_smart_investor.webp",
    alt: "Capa do livro O Investidor Inteligente",
    id: "the_smart_investor"
  }
}