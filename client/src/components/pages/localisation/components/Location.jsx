import React from "react";
import styles from "./Location.module.scss";


function Location() {
    return (
    <div className={styles.location}>
      <div className={styles.temperature}>
        <h4>Temperature today</h4>
        
            <h2>25°C / 77°F</h2>
      </div>

      <div className={styles.details}>
        <h4>Location</h4>
          
            <h5>Niché dans la région continentale grecque du Péloponnèse se trouve Arcadia, un village boisé situé à 1 200 mètres d'altitude. Depuis l'Antiquité, Arcadie est considérée comme un paradis terrestre ; on lui a donné un nom utopique en raison de sa beauté naturelle infinie et de sa pureté. Célèbre pour son miel riche, ses pâtes locales et son fromage artisanal, Arcadia se trouve à proximité de la région viticole de Némée et de Gortyna, l'ancienne vallée perdue. Havre de nature à moins de deux heures d'Athènes, ce coin sous-exploré de la Grèce est accessible depuis l'aéroport international d'Athènes et l'aéroport de Kalamata.           
            </h5>
      </div>

      <div className={styles.airport}>
        <h4>Nearest airport</h4>
         
          <h2>KLX - Kalamata International Airport Captain Vasilis Konstantakopoulo</h2>
      </div>
      
    </div>
    );
  }
  
  export default Location;