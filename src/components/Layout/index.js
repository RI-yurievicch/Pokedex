import React from 'react'
import Header from '../Header/index'
import './index.scss'

const Layout = ({ children = '' }) => (
  <div className='wrapper'>
    <Header />
    {children}
  </div>
)

export default Layout