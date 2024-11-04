import React, { useState } from "react";
import { Link } from "react-router-dom";
import CustomMenuComponent from "../../components/ui/CustomMenuComponent"; // Ne felejtsd el importálni!

export default function HeaderComponent() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleNav() {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <>
      <header className="absolute top-0 left-0 w-full">
        <nav className="flex justify-between overflow-hidden flex-wrap items-center bg-white font-['primary']">
          <div className="flex align-middle flex-row items-center justify-between w-8/12">
            <a href="home">
              <img
                src={`${process.env.PUBLIC_URL}/assets/logo.svg`}
                alt="MooDefiner"
                className="object-scale-down h-52 w-52"
              ></img>
            </a>
            <Link className="headerLink" to="/miben-segithetunk">Miben segíthetünk?</Link>
            <Link className="headerLink" to="/szakembereink">Szakembereink</Link>
            <Link className="headerLink" to="/idopontfoglalas">Időpontfoglalás</Link>
            <Link className="headerLink" to="/kapcsolat">Kapcsolat</Link>
          </div>
          <div className="flex flex-col w-2/12 mr-60">
            <Link className="btn my-1.5" to="/bejelentkezes"><button>Bejelentkezés</button></Link>
            <Link className="btn" to="/regisztracio"><button >Regisztráció</button></Link>
          </div>
          <div className="custom_menu">
            <button className="bg-transparent block" onClick={toggleNav}>
              <span className={`s-1 transition-all duration-100 ${isMenuOpen ? 'rotate-45 translate-y-6 w-3/4' : ''}`}> </span>
              <span className={`s-2 ${isMenuOpen ? 'translate-x-96' : ''}`}> </span>
              <span className={`s-3 transition-all duration-100 ${isMenuOpen ? '-rotate-45 -translate-y-6 w-3/4' : ''}`}> </span>
            </button>
          </div>
        </nav>
        {isMenuOpen && <CustomMenuComponent />}
      </header>
    </>
  );
}
