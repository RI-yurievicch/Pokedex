import React from 'react'
import { Row, Col } from 'antd'
import logo from '../../img/logo.png'
import './index.scss'
import { useHistory } from 'react-router-dom'

const Header = () => {
  const history = useHistory()

  return (
   <Row className='widthHeader'>
     <Col>
        <div className='headerLogo' onClick={() => history.push(`/`)}>
          <span>P</span>
          <img src={logo} alt='headerlogo' />
          kedex
        </div>
     </Col>
   </Row>
  )
}

export default Header