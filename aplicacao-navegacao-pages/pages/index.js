import Link from 'next/link';

export default function Index() {
  return (
    <div>
      <Link href="/about">
        <a>Página inicial</a>
      </Link>
      <p>Seja bem vindo</p>
    </div>
  );
}