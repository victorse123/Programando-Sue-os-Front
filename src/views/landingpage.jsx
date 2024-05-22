import Footer from '../components/footer/Footer';
import { useNavigate } from 'react-router-dom';
import Styles from '../views/landingpage.module.css';

    const LandingPage = ( ) => {
        const navigate = useNavigate()

        return(
             
            <div>
           
           <Footer />   
       <div className={Styles.pagDiv}> 
       
           <div className={Styles.imgs}>
               <img className={Styles.startPag2} src={imageImg.LOGO} alt="" />
               {allPokemon.length !== 0 && <img className={Styles.startPag} type='button' onClick={()=>navigate('/home')} src={imageImg.loanding} alt="" />}
           </div>           
              
       </div>

       </div>
   
   )

    }

    export default LandingPage;

