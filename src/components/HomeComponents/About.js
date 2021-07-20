import '../../styles/HomeCompStyles/About.css'
import { Carousel } from 'react-responsive-carousel'
import styles from "react-responsive-carousel/lib/styles/carousel.min.css";
const About = () => {
    return (
        <div className='about'>
            <div className='about__container'>

            <div className='about__text'>
                <h1>About us ...</h1>
                <p>If you are looking for the perfect way to buy your dream property
              or sell your precious home then look no more, 'Perfector' will pave the path 
              for your convenience. You can view our brilliant collection of properties
              or fill a form to sell your one , its that easy. We further provide trained agents
              for you to consult with and appoint to negotiate on your behalf. Remember, we are
              here for your sake.</p> 

            </div>
           

            <div className='about__carousel'>
            <Carousel  autoPlay={true} showArrows={true} showThumbs={false} infiniteLoop>
                <div>
                <img src="https://images.unsplash.com/photo-1560184897-ae75f418493e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="img1" />
                
                </div>
                <div>
                <img src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="img1" />
              
                </div>
                
                <div>
                <img src="https://images.unsplash.com/photo-1484154218962-a197022b5858?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1053&q=80" alt="img1" />
               
                </div>

            </Carousel>

            </div>
           

              


            </div>

           
            
        </div>
    )
}

export default About
