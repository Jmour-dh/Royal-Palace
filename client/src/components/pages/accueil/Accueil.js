import React from "react";
import Home from "./components/Home";
import Description from "./components/Description";
import Decouvrir from "./components/Decouvrir";
import Info from "./components/Info";

function Accueil() {
  return (
    <>
      <Home />
      <Description/>
      <Decouvrir/>
      <Info/>
    </>
  );
}

export default Accueil;
