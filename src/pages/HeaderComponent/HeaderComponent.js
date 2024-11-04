import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function HeaderComponent() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-10 bg-white">
        <nav className="flex justify-between items-center px-4 lg:px-8 py-4">
          {/* Logo and Title */}
          <div className="flex items-center space-x-4">
            <a href="home">
              <img
                src={`${process.env.PUBLIC_URL}/assets/logo.svg`}
                alt="MooDefiner"
                className="h-10 w-10"
              />
            </a>
            <span className="font-primary font-bold text-lg lg:text-xl">MooDefiner</span>
          </div>

          {/* Navigation Links */}
          <div className="hidden lg:flex space-x-6">
            <Link className="headerLink" to="/miben-segithetunk">Miben segíthetünk?</Link>
            <Link className="headerLink" to="/szakembereink">Szakembereink</Link>
            <Link className="headerLink" to="/idopontfoglalas">Időpontfoglalás</Link>
            <Link className="headerLink" to="/kapcsolat">Kapcsolat</Link>
          </div>

          {/* Login/Registration */}
          <div className="hidden lg:flex space-x-4">
            <Link className="btn" to="/bejelentkezes"><button>Bejelentkezés</button></Link>
            <Link className="btn" to="/regisztracio"><button>Regisztráció</button></Link>
          </div>

          {/* Hamburger Icon */}
          <div className="lg:hidden">
            <button onClick={toggleMenu} className="focus:outline-none custom_menu">
              <span className="s-1"></span>
              <span className="s-2"></span>
              <span className="s-3"></span>
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {isOpen && (
          <div id="nav" className="overlay">
            <div className="overlay-content">
              <Link to="/miben-segithetunk">Miben segíthetünk?</Link>
              <Link to="/szakembereink">Szakembereink</Link>
              <Link to="/idopontfoglalas">Időpontfoglalás</Link>
              <Link to="/kapcsolat">Kapcsolat</Link>
              <Link to="/termekek">Termékeink</Link>
              <Link to="/bejelentkezes">Bejelentkezés</Link>
              <Link to="/regisztracio">Regisztráció</Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
