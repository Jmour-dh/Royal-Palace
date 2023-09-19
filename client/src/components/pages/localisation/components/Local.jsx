import React from 'react';
import styles from './Local.module.scss';


function LocalMap() {
  return (
    <div className='{styles.local}'>
    <div  style={{ width: '100%', height: '300px', marginTop:'-1520px', marginBottom: '1210px', }}>
      <iframe
        title="Google Map"
        width="100%"
        height="100%"
        frameBorder="0"
        scrolling="no"
        marginHeight="0"
        marginWidth="0"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509812!2d144.95373631592676!3d-37.817209979751994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x2ab8a08c3e21ce0b!2sFederation%20Square!5e0!3m2!1sen!2sau!4v1631203571909!5m2!1sen!2sau"
      ></iframe>
    </div>
    </div>
  );
}

export default LocalMap;