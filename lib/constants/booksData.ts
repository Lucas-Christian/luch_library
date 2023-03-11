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
    title: ["Engenharia de Software", "Uma abordagem profissional"],
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
    title: ["Engenharia de Software", "Ian Sommerville"],
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
    title: ["Interação Humano Computador"],
    read: "https://drive.google.com/file/d/1pcgx8KzVR1xactop2UUqs6baC0r-ZxnI/view",
    src: "https://raw.githubusercontent.com/LordLuch/images/main/books/human_computer_interaction.webp",
    alt: "Capa do livro Interação Humano Computador",
    id: "human_computer_interaction"
  },
  the_everyday_design: {
    categories: "software_development digital_design",
    ariaLabel: "Livro Design do dia a dia",
    download: "https://drive.google.com/uc?id=1XCHPP_1MSvq_bbOROaB6NmoY8eeZKEPO&export=download",
    authors: ["Donald Norman"],
    height: 500,
    width: 367,
    title: ["Design do dia a dia"],
    read: "https://drive.google.com/file/d/1XCHPP_1MSvq_bbOROaB6NmoY8eeZKEPO/view",
    src: "https://raw.githubusercontent.com/LordLuch/images/main/books/the_everyday_design.webp",
    alt: "Capa do livro Design do dia a dia",
    id: "the_everyday_design"
  },
  the_psychology_of_colors: {
    categories: "software_development digital_design",
    ariaLabel: "Livro A Psicologia das cores",
    download: "https://drive.google.com/uc?id=1DbP7geAlOMKtwRymAJmP21AeUB_vHPV3&export=download",
    authors: ["Eva Heller"],
    height: 622,
    width: 442,
    title: ["A Psicologia das cores"],
    read: "https://drive.google.com/file/d/1DbP7geAlOMKtwRymAJmP21AeUB_vHPV3/view",
    src: "https://raw.githubusercontent.com/LordLuch/images/main/books/the_psychology_of_colors.webp",
    alt: "Capa do livro A Psicologia das cores",
    id: "the_psychology_of_colors"
  },
  interaction_design_beyond_human_computer_interaction: {
    categories: "software_development digital_design",
    ariaLabel: "Livro Design de Interação Além da Interação Humano Computador",
    download: "https://drive.google.com/uc?id=1T-WPGvGizZaEebsGX6LZxSIbS-TszZn3&export=download",
    authors: ["Preece Jennifer", "Rogers Yvonne", "Sharp Helen."],
    height: 622,
    width: 435,
    title: ["Design de Interação", "Além da Interação Humano Computador"],
    read: "https://drive.google.com/file/d/1T-WPGvGizZaEebsGX6LZxSIbS-TszZn3/view",
    src: "https://raw.githubusercontent.com/LordLuch/images/main/books/interaction_design_beyond_human_computer_interaction.webp",
    alt: "Capa do livro Design de Interação Além da Interação Humano Computador",
    id: "interaction_design_beyond_human_computer_interaction"
  },
  pmbok_sixth_edition: {
    categories: "software_development project_management",
    ariaLabel: "Livro PMBOK Sexta Edição",
    download: "https://drive.google.com/uc?id=1kdDSmRgsb6lJ2hrjnjQ2Huo9Zr4pxeW2&export=download",
    authors: ["Project Management Institute"],
    height: 354,
    width: 500,
    title: ["PMBOK Sexta Edição"],
    read: "https://drive.google.com/file/d/1kdDSmRgsb6lJ2hrjnjQ2Huo9Zr4pxeW2/view",
    src: "https://raw.githubusercontent.com/LordLuch/images/main/books/pmbok_sixth_edition.webp",
    alt: "Capa do livro PMBOK Sexta Edição",
    id: "pmbok_sixth_edition"
  },
  pmbok_seventh_edition: {
    categories: "software_development project_management",
    ariaLabel: "Livro PMBOK Sétima Edição",
    download: "https://drive.google.com/uc?id=1TLReNd778iM6hrXe1eAgrGNNjuF1fEov&export=download",
    authors: ["Project Management Institute"],
    height: 622,
    width: 477,
    title: ["PMBOK Sétima Edição"],
    read: "https://drive.google.com/file/d/1TLReNd778iM6hrXe1eAgrGNNjuF1fEov/view?usp=sharing",
    src: "https://raw.githubusercontent.com/LordLuch/images/main/books/pmbok_seventh_edition.webp",
    alt: "Capa do livro PMBOK Sétima Edição",
    id: "pmbok_seventh_edition"
  },
  the_smart_investor: {
    categories: "business",
    ariaLabel: "Livro O Investidor Inteligente",
    download: "https://drive.google.com/uc?id=1vsWKbF2jSRZgpQTm9z92TvADDwye3-dB&export=download",
    authors: ["Benjamin Graham"],
    height: 486,
    width: 395,
    title: ["O Investidor Inteligente"],
    read: "https://drive.google.com/file/d/1vsWKbF2jSRZgpQTm9z92TvADDwye3-dB/view",
    src: "https://raw.githubusercontent.com/LordLuch/images/main/books/the_smart_investor.webp",
    alt: "Capa do livro O Investidor Inteligente",
    id: "the_smart_investor"
  }
}