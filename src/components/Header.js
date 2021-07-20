import { Link } from "react-router-dom"
import "../styles/Header.css"

const Header = () => {
    return (
        <div className='header'>
            
            <div className='header__container'>
                
                <Link to='/'>
                    <h3 className='header__contents'>Home</h3>
                </Link>

                <Link to='/buy'>
                    <h3 className='header__contents'>Buy</h3>
                </Link>

                <Link to='/sell'>
                    <h3 className='header__contents'>Sell</h3>
                </Link>

                <Link to='/agents'>
                    <h3 className='header__contents'>Agents</h3>
                </Link>     
                      
            </div>
            
        </div>
    )
}

export default Header
