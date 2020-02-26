import Link from 'next/link';

export default function about() {
  return (
    <div>
      <Link href="/index">
        <a>Home</a>
      </Link>
      <p>Página de perfil</p>
    </div>
  );
}