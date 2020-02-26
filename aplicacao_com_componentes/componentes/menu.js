import Link from 'next/link';

const linkStyle = {
  marginRight: 15
};

const Menu = () => (
  <div>
    <Link href="/">
      <a style={linkStyle}>Home</a>
    </Link>
    <Link href="/about">
      <a style={linkStyle}>Perfil</a>
    </Link>
  </div>
);

export default Menu;