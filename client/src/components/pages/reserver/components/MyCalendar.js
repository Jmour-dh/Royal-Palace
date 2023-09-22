import React from 'react';
import styles from "./Mycalendar.module.scss";

function MyCalendar() {
  return (
    
<div className={styles.calendar}>

    <div className={styles.reser}>
    <h4>Réservation</h4>
    </div>

    
    <div className={styles.entree} >
    <label>Date d'entrée</label>
    </div>
    
    <input className={styles.date-1} type="date" />

    <div  className={styles.sorti}> 
    <label >Date de sorti</label> 
    <input className={styles.date-2} type="date" />
    </div>

    <div className={styles.adult}>
    <label className={styles.adult}>Adult</label>
    <input type='number' />
    </div>

    <div  className={styles.enfant} >
    <label>Enfant</label>
    <input type='number' />

    <div className={styles.select}>
    <label for="select">Chambre</label>
                      <select id="Chambre" name="Chambre">
                        <option value="Chambre Double Standard">Chambre Double Standard</option>
                        <option value="Chambre Double Supérieure">Chambre Double Supérieure</option>
                        <option value="Chambre Double Deluxe">Chambre Double Deluxe</option>
                        <option value="Chambre VIP">Chambre VIP</option>
                      </select>
    </div>

    <div className={styles.check}>
    <input type='checkbox' />
    <label className={styles.check}>J'accepte</label>
    </div>

    </div>
    

    <button>Reserver</button>
    
</div>
    
  )
}

export default MyCalendar;