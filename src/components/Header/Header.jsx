import { NavLink } from 'react-router-dom'
import './Header.scss'

export const Header = () => {
    return (
         <>
            <header className='header' id='header'>
                <div className="container">
                    <nav className="header__menu">
                        <NavLink to='/' className='header__link'>Сatalog</NavLink>
                        <NavLink to='/our' className='header__link'>Our Clients</NavLink>
                    </nav>
                </div>
            </header>
        </>
     )
 }
export default Header