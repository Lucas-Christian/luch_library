import Link from 'next/link';
import { useRouter } from 'next/router';

export function Navbar() {
  const router = useRouter();
  return (
    <nav>
      <Link href="/" className={router.pathname === "/" ? "white" : ""}>
        Início
      </Link>
      <Link href="/books" className={router.pathname === "/books" ? "white" : ""}>
        Livros
      </Link>
    </nav>
  )
}