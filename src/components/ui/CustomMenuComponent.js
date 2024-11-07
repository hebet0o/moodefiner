import React from "react";
import { Link } from "react-router-dom";

export default function CustomMenuComponent() {
  return (
    <div className="overlay-content p-5">
      <ul className="space-y-4">
        <li>
          <Link to="/termekek" className="text-primary text-3xl">Termékeink</Link>
          <ul className="ml-4 mt-2 space-y-2">
            <li>
              <Link to="/termekek/szemelyes-fejlodes" className="text-primary">Személyes fejlődés</Link>
              <ul className="ml-4 mt-1 space-y-1">
                <li><Link to="/termekek/szemelyes-fejlodes/onbizalom" className="text-primary hover:text-primary">Önbecsülés és önbizalom növelés</Link></li>
                <li><Link to="/termekek/szemelyes-fejlodes/stresszkezeles" className="text-grey hover:text-primary"><p>Stresszkezelés és relaxációs technikák</p></Link></li>
                <li><Link to="/termekek/szemelyes-fejlodes/erzelmi-intelligencia" className="text-gray-500 hover:text-primary"><p>Érzelmi intelligencia fejlesztése</p></Link></li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <Link to="/ki-miben-segit" className="text-black text-3xl">Ki miben segít?</Link>
          <ul className="ml-4 mt-2 space-y-2">
            <li>
              <Link to="/ki-miben-segit/pszichologusok" className="text-primary">Pszichológusok</Link>
              <ul className="ml-4 mt-1 space-y-1">
                <li><Link to="/ki-miben-segit/pszichologusok/diagnozis" className="text-grey hover:text-primary">Diagnózis és kezelés</Link></li>
                <li><Link to="/ki-miben-segit/pszichologusok/mentalis-betegsegek" className="text-grey hover:text-primary">Mentális betegségek kezelése</Link></li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}