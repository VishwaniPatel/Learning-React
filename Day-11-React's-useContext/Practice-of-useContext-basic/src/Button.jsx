import React, { useContext } from 'react'
import { ThemeContext } from './store/Context'
const Button = ({ children, onClick , disabled}) => {
 const value = useContext(ThemeContext)
    const className = 'button-' + value;    
    return (
      <button className={className}  disabled={disabled} onClick={onClick}>
        {children}
      </button>
    );
}

export default Button