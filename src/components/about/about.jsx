/* eslint-disable react/no-unescaped-entities */
import styles from './about.module.css';

const About = () => {
  return (
    <div className={styles.about}>
      <h1>BIENVENIDOS</h1>
      <p>
        Hola, mi nombre es Víctor Alfonso Sepúlveda y me emociona demasiado poder presentarles 
        a PROGRAMANDO SUEÑOS. Han sido días arduos de codeo, prueba y error; 
        que hoy se ven reflejados en esta singlepage. Es una muestra de mi visión y lo que se 
        puede ofrecer cuando están en ella.
        Los comentarios siempre serán BIENVENIDOS y podrán agregar más valor a la app; para ello estamos 
        dispuesto a recibir sus comentarios o sugerencias, sin dudar enviarlas a través de (email).
      </p>

      <p>
        Agradecemos demasiado su atención, su tiempo y comprensión, y estamos listos para que trabajemos juntos 
        y demos mas opciones al futuro de nuestros niños.
        Abrazos...
      </p>
    </div>
  );
};

export default About;