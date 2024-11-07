import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import CustomMenuComponent from "../../components/ui/CustomMenuComponent";

export default function HeaderComponent() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(0);
  const headerRef = useRef(null);

  useEffect(() => {
    if (headerRef.current) {
      setHeaderHeight(headerRef.current.offsetHeight);
    }
  }, []);

  function toggleNav() {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <>
      <header ref={headerRef} className="fixed top-0 left-0 w-full z-40 bg-white">
        <nav className="flex justify-between overflow-hidden flex-wrap items-center bg-white font-['primary']">
          <div className="flex align-middle flex-row items-center justify-between w-8/12">
            <a href="home">
              <img
                src={`${process.env.PUBLIC_URL}/assets/logo.svg`}
                alt="MooDefiner"
                className="object-scale-down h-52 w-52 transition-all duration-300 ease-in-out hover:scale-110"
              ></img>
            </a>
            <Link className="headerLink" to="/miben-segithetunk">Miben segíthetünk?</Link>
            <Link className="headerLink" to="/szakembereink">Szakembereink</Link>
            <Link className="headerLink" to="/idopontfoglalas">Időpontfoglalás</Link>
            <Link className="headerLink" to="/kapcsolat">Kapcsolat</Link>
          </div>
          <div className="flex flex-col w-2/12 mr-60">
            <Link className="btn my-1.5" to="/bejelentkezes"><button>Bejelentkezés</button></Link>
            <Link className="btn" to="/regisztracio"><button>Regisztráció</button></Link>
          </div>
          <div className="custom_menu z-50">
          <button className={`bg-transparent block custom-menu-button ${isMenuOpen ? 'open' : ''}`}  onClick={toggleNav}>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </button>
          </div>
        </nav>
      </header>
      <div 
        className={`overlay ${isMenuOpen ? 'active' : ''}`} 
        style={{ top: `${headerHeight}px`, height: `calc(100vh - ${headerHeight}px)` }}
      >
        <CustomMenuComponent />
      </div>
    </>
  );
}