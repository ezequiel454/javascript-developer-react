import React from 'react'
import { Col } from 'antd'

const vertLeft = {
  height: 40,
  marginTop: 36,
  marginLeft: '90%',
  borderLeft: '2px solid #e0e0eb'
}

const vertRight = {
  height: 40,
  marginTop: 36,
  marginRight: '90%',
  borderLeft: '2px solid #e0e0eb'
}

const TextLine = ({ firstValue, secondValue, thirdValue }) => {
  return (
    <div>
      <Col xs={3} sm={4} md={3} lg={3} xl={2} >
        <p style={{fontSize: 16, marginLeft: '90%', marginTop: 20, color: '#A3A3A3'}}>Faltas</p>
        <b><p style={{fontSize: 24, marginLeft: '100%', marginBottom: 10}}>{firstValue}</p></b>
      </Col>

      <Col span={1} >
        <div style={vertLeft} />
      </Col>

      <Col xs={3} sm={4} md={3} lg={3} xl={2} >
        <p style={{fontSize: 16, marginLeft: '20%', marginTop: 20, color: '#A3A3A3'}}>Presenças</p>
        <b><p style={{fontSize: 24, marginLeft: '50%', marginBottom: 10}}>{secondValue}</p></b>
      </Col>

      <Col span={1} >
        <div style={vertRight} />
      </Col>

      <Col xs={3} sm={4} md={3} lg={2} xl={2} pull={1}>
        <p style={{fontSize: 14, marginLeft: '20%', marginTop: 20, color: '#A3A3A3'}}>N. Observações</p>
        <b><p style={{fontSize: 24, marginLeft: '90%', marginBottom: 10}}>{thirdValue}</p></b>
      </Col>
    </div>
  )
}

export default TextLine
