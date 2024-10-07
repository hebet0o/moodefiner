import React from "react";
import { Link } from "react-router-dom";

export default function HeaderComponent() {
  function openNav() {
    document.getElementById("nav").classList.toggle("menu_width");
    document.querySelector(".custom_menu").classList.toggle("menu_style");
  }

  return (
    <>
    <header className="fixed top-0 left-0 w-full z-10">
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
          <button className="bg-transparent block" onClick={openNav}>
            <span className="s-1 transition-all duration-100"> </span>
            <span className="s-2"> </span>
            <span className="s-3"> </span>
          </button>
        </div>
      </nav>
    </header><>
        <div id="nav" className="overlay">
          <div className="overlay-content">
          {/*Termékek*/}
          <ul>
            <Link to="/termekek"><li className="text-black list-none font text-3xl"> Termékeink </li></Link>
            <ul>
            <li className="text-primary my-2.5 ">
              <a href="termekek" className="text-2xl">
              Személyes fejlődés
              </a>
              <ul>
              <a href="termekek">  
                 <li className="link">
                Önbecsülés és önbizalom növelés
                </li>
              </a>
              <a href="termekek">  
                 <li className="link">
                 Stresszkezelés és relaxációs technikák
                </li>
              </a>
              <a href="termekek">  
                 <li className="link">
                 Érzelmi intelligencia fejlesztése
                </li>
              </a>  
              </ul>
            </li>
            <li className="text-primary my-2.5 ">
              <a href="termekek" className="text-2xl">
              Szorongás és depresszió
              </a>
              <ul>
              <a href="termekek">  
                 <li className="link">
                 Szorongás kezelése
                </li>
              </a>
              <a href="termekek">  
                 <li className="link">
                 Depresszió megelőzése és kezelése
                </li>
              </a>
              <a href="termekek">  
                 <li className="link">
                 Mindfulness és meditáció
                </li>
              </a>  
              </ul>
            </li>
            <li className="text-primary my-2.5 ">
              <a href="termekek" className="text-2xl">
              Párkapcsolati és családi dinamika
              </a>
              <ul>
              <a href="termekek">  
                 <li className="link">
                 Párkapcsolati kommunikáció
                </li>
              </a>
              <a href="termekek">  
                 <li className="link">
                 Családi kapcsolatok és konfliktuskezelés
                </li>
              </a>
              <a href="termekek">  
                 <li className="link">
                 Szülői nevelés és gyermekpszichológia
                </li>
              </a>  
              </ul>
            </li>
            </ul>
          </ul>
          {/*Ki miben segít szekció*/}
          <ul>
            <Link to="/ki-miben-segit"><li className="text-black list-none font text-3xl"> Ki miben segít? </li></Link>
            <ul>
            <li className="text-primary my-2.5 ">
              <a href="termekek" className="text-2xl">
              Pszichológusok
              </a>
              <ul>
              <a href="termekek">  
                 <li className="link">
                 Diagnózis és kezelés
                </li>
              </a>
              <a href="termekek">  
                 <li className="link">
                 Mentális betegségek kezelése
                </li>
              </a>  
              </ul>
            </li>
            <li className="text-primary my-2.5 ">
              <a href="termekek" className="text-2xl">
              Coach-ok
              </a>
              <ul>
              <a href="termekek">  
                 <li className="link">
                 Karriertervezés és fejlődés
                </li>
              </a>
              <a href="termekek">  
                 <li className="link">
                 Munkahelyi kihívások kezelése
                </li>
              </a>  
              </ul>
            </li>
            <li className="text-primary my-2.5 ">
              <a href="termekek" className="text-2xl">
              Mentál Trénerek
              </a>
              <ul>
              <a href="termekek">  
                 <li className="link">
                 Érzelmi tudatosság és kezelése
                </li>
              </a>
              <a href="termekek">  
                 <li className="link">
                 Kapcsolati készségek fejlesztése
                </li>
              </a>  
              </ul>
            </li>
            <li className="text-primary my-2.5 ">
              <a href="termekek" className="text-2xl">
              Speciális területek
              </a>
              <ul>
              <a href="termekek">  
                 <li className="link">
                 Fizikai és mentális egészség kapcsolata
                </li>
              </a>
              <a href="termekek">  
                 <li className="link">
                 Csoportdinamika és közösségi támogatás
                </li>
              </a>  
              </ul>
            </li>
            </ul>
          </ul>
          </div>
        </div>
       </> 
      </>
  );
}
