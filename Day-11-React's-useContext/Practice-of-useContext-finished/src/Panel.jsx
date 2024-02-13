import React, { useContext } from 'react'
import { ThemeContext } from './store/Context';

const Panel = ({ title, children }) => {
  // set theme using context
  const className = 'panel-' + theme;
  return (
    <section className={className}>
      <h1>{title}</h1>
      {children}
    </section>
  )
}

export default Panel