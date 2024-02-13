import React, { useContext } from 'react'
import { ThemeContext } from './store/Context'
const Button = ({ children, onClick , disabled}) => {
// get value using context
    const className = 'button-' + value;    
    return (
      <button className={className}  disabled={disabled} onClick={onClick}>
        {children}
      </button>
    );
}

export default Button