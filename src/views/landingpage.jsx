import Footer from '../components/footer/Footer';
import { useNavigate } from 'react-router-dom';
import Styles from '../views/landingpage.module.css';

    const LandingPage = ( ) => {
        const navigate = useNavigate()

        return(
             
        <div>
           
           <Footer />   
       <div className={Styles.pagDiv}> 
       
           <div></div>           
              
       </div>

       </div>
   
   )

    }

    export default LandingPage;

