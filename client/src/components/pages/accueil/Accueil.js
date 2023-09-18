import React from "react";
import Home from "./components/Home";
import Description from "./components/Description";
import Decouvrir from "./components/Decouvrir";
import Info from "./components/Info";
import MapComponent from "./components/Map";

function Accueil() {
  return (
    <>
      <Home />
      <Description/>
      <Decouvrir/>
      <Info/>
      <MapComponent/>
    </>
  );
}

export default Accueil;
