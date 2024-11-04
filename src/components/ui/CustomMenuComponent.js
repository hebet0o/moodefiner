import React from "react";
import { Link } from "react-router-dom"; 

export default function CustomMenuComponent() {
  return (
    <div id="nav" className="overlay mt-16 absolute right-0 w-full bg-white shadow-lg z-50">
      <div className="overlay-content p-5">
        <ul>
          <Link to="/termekek"><li className="text-black list-none font text-3xl"> Termékeink </li></Link>
          <ul>
            <li className="text-primary my-2.5 ">
              <a href="termekek" className="text-2xl">
                Személyes fejlődés
              </a>
              <ul>
                <a href="termekek"><li className="link">Önbecsülés és önbizalom növelés</li></a>
                <a href="termekek"><li className="link">Stresszkezelés és relaxációs technikák</li></a>
                <a href="termekek"><li className="link">Érzelmi intelligencia fejlesztése</li></a>
              </ul>
            </li>
          </ul>
        </ul>
        <ul>
          <Link to="/ki-miben-segit"><li className="text-black list-none font text-3xl"> Ki miben segít? </li></Link>
          <ul>
            <li className="text-primary my-2.5 ">
              <a href="termekek" className="text-2xl">Pszichológusok</a>
              <ul>
                <a href="termekek"><li className="link">Diagnózis és kezelés</li></a>
                <a href="termekek"><li className="link">Mentális betegségek kezelése</li></a>
              </ul>
            </li>
          </ul>
        </ul>
      </div>
    </div>
  );
}
