import Footer from '../components/footer/Footer';
import { useNavigate } from 'react-router-dom';
import styles from '../views/landingpage.module.css';

    const LandingPage = ( ) => {
        const navigate = useNavigate()

        return(
             
            <div>
           

       <div className={Styles.pagDiv}> 
       

           <video autoPlay playsInline muted loop>
               <source src={imageImg.startVideo} type="video/mp4"/>
           </video>
           
           <div className={Styles.imgs}>
               <img className={Styles.startPag2} src={imageImg.LOGO} alt="" />
               {allPokemon.length !== 0 && <img className={Styles.startPag} type='button' onClick={()=>navigate('/home')} src={imageImg.loanding} alt="" />}
           </div>           
              
       </div>

       <Footer />   

       </div>
   
   )

    }

    export default LandingPage;

