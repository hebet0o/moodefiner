import React from "react";
import CardComponent from "../../components/ui/CardComponent";

export default function HomeComponent() {
  return (
    <div className="home-container" style={{ backgroundImage: "url('/assets/pictures/homebg.jpg')" }}>
      <div className="inner-container w-full py-16">
        <CardComponent title="FEDEZD FEL A BELSŐ HARMÓNIÁD!">
          <p>Találd meg az utat a kiegyensúlyozott és boldog élethez!
           A MooDefiner segít megtalálni a számodra legmegfelelőbb
           szakembert, legyen az pszichológus, coach vagy mentál tréner.
           Válogass szakértőink között a városod alapján, és indulj el
           a lelki fejlődés útján. 

           Itt a segítség kéznél van – válaszd ki, aki hozzád 
           legjobban illik, és tedd meg az első lépést a jobb közérzet felé!</p>
           <button className="btn w-1/2 mt-20" href="szakembereink">Tekintsd meg szakembereinket</button>
        </CardComponent>
        
      </div>
    </div>
  );
}