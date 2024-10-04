import { NavLink } from "react-router-dom"
import './header.css'

export default function Header() {
  return (
    <nav>
        <ul>
            <li>
                <NavLink to="" 
                style={({isActive}) => ({
                    color:isActive ? '#007bff' :'black',
                    textDecoration: isActive ? 'underline' : 'none'
                })}
                >HOME</NavLink>
            </li>
            <li>
                <NavLink to="/about"
                style={({isActive}) => ({
                    color:isActive ? '#007bff' :'black',
                    textDecoration: isActive ? 'underline' : 'none'
                })}
                >ABOUT</NavLink>
            </li>
            <li>
                <NavLink to="/contact"
                style={({isActive}) => ({
                    color:isActive ? '#007bff' :'black',
                    textDecoration: isActive ? 'underline' : 'none'
                })}
                >CONTACT</NavLink>
            </li>
            <li>
                <NavLink to="/login"
                style={({isActive}) => ({
                    color:isActive ? '#007bff' :'black',
                    textDecoration: isActive ? 'underline' : 'none'
                })}
                >LogIn</NavLink>
            </li>
        </ul>
    </nav>
  )
}
