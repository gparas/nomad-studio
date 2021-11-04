import Link from 'next/link';
import C from './constants';

const Navbar = () => {
  return (
    <header className="flex flex-row justify-between items-center">
      {C.LINKS.map(link => (
        <Link key={link.label} href={link.href}>
          <a className="ml-6">{link.label}</a>
        </Link>
      ))}
    </header>
  );
};

export default Navbar;
