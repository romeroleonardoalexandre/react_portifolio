import React from 'react'
import { Link } from 'react-router-dom'
import '../index.css'

const Header = ({ children }) => {
    return (
        <div>
            <div>
                <h3 className='headerLink'><Link to='/'>Home</Link></h3>
                <h3 className='headerLink'><Link to='/jokes'>Jokes</Link></h3>
                <h3 className='headerLink'><Link to='/game'>Game</Link></h3>
            </div>
            { children }
        </div>
    )
}
export default Header