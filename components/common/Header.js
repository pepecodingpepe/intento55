// /components/common/Header.js
import Link from 'next/link';
import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <header className="tracking-wide shadow-lg bg-gradient-to-r from-white to-slate-100" >
      <div className="flex justify-between items-center p-4">
        <div>
          <Link href="/">
            <img style={{ padding: '10px'
             }}
            src="https://iili.io/JIrTVu1.png"  alt="Logo" className="w-96 h-auto" />
          </Link>
        </div>
        <nav className={`flex ${isMenuOpen ? 'flex-col' : 'hidden md:flex'}`}>
          <Link href="/"  className="nav-linkA">Home</Link>
          <Link href="/services"  className="nav-linkB">Productos & Servicios</Link>
          <Link href="/portfolio"  className="nav-linkC">Portafolio</Link>
          <Link href="/clients" className="nav-link">Nuestros Clientes</Link>
          <Link href="/contact" className="nav-link2 ">Manos a la Obra</Link>

        </nav>
        <button
          className="md:hidden font-bold bg-cyan-500 text-white px-4 py-2 rounded-xl "
          onClick={toggleMenu}
        >
          {isMenuOpen ? 'Cerrar' : 'Menú'}
        </button>
      </div>
    </header>
  );
};

export default Header;
