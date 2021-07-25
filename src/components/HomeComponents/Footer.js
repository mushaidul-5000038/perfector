import { Link } from 'react-router-dom'
import '../../styles/HomeCompStyles/Footer.css'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer__container'>
                <h1>Perfector</h1>
                <hr />
                <div className='footer__details'>

                    <Link to='/'><h3>Home</h3></Link>
                    <Link to='/buy'><h3>Buy</h3></Link>
                    <Link to='/sell'><h3>Sell</h3></Link>
                </div>
                <span>©Mushaidul-2021</span>

            </div>

        </div>
    )
}

export default Footer
