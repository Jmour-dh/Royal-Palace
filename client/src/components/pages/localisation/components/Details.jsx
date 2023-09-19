import React from "react";
import styles from "./Details.module.scss";


function Details() {
  return (
    <div className={styles.details2}>
    <div className={styles.detail}>
      <h4> DETAILES </h4>
      <h5> Foods&drinks</h5>
    </div>

    <div className={styles.spa}>
      <h4>Spa et loisirs</h4>
        
          <h4>     
          Lorsque le ciel est incroyablement bleu, les forêts d'Arcadia sont les plus agréables pour les visiteurs ; une multitude d'activités de plein air vous attendent, notamment la randonnée, le vélo, la marche et le ski. Si vous préférez un temps plus lent, entrez dans le centre de bien-être offrant une vue imprenable sur la forêt et comprenant deux salles de soins, un sauna, un hammam, un jacuzzi, une salle de sport avec des équipements en bois et une piscine troglodyte intérieure.     
          </h4>
    </div>

    <div className={styles.plus}>
      <h4>Quoi de plus</h4>
       
        <h4>Conformément à l'utilisation du bois dans tout l'intérieur de Royal, une salle de sport ultramoderne avec des vues enchanteresses et des équipements en bois élégants pour les séances d'entraînement est un équipement clé, ce qui facilite l'exercice à l'intérieur. Ceux qui recherchent les secrets de la Grèce authentique peuvent pratiquer la chasse aux champignons et l'équitation, ou explorer un ancien monastère à proximité et se plonger dans l'architecture époustouflante et les vues sur la rivière et les gorges de Lousios.</h4>
    </div>
  </div>
  );
}
export default Details;