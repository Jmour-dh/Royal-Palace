import React from "react";
import Location from "./components/Location";
import Details from "./components/Details";
import Wifi from "./components/Wifi";
import View from "./components/View";
import LocalMap from "./components/Local";




function Localisation() {
  return (
    <>
    < Location />
    < Details />
    < Wifi />
    < View />
    < LocalMap />

    </>
  );
}

export default Localisation;
