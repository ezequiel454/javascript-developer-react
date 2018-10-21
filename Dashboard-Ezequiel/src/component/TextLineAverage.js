import React from 'react'
import { Col } from 'antd'

const vert = {
  height: 40,
  marginTop: 10,
  marginLeft: 40,
  borderLeft: '2px solid #e0e0eb'
}

const TextLine = ({ lista }) => {
  const sumValues = (num1, num2) => num1 + num2
  const studentAverage = ((lista.map(p => p.aluno).reduce(sumValues, 0)) / lista.length).toFixed(2)
  const seriesAverage = ((lista.map(p => p.serie).reduce(sumValues, 0)) / lista.length).toFixed(2)
  const classAverage = ((lista.map(p => p.turma).reduce(sumValues, 0)) / lista.length).toFixed(2)
  return (
    <div>
      <Col xs={20} sm={7} md={7} lg={7} xl={7}>
        <b><p style={{fontSize: 12, marginLeft: 40, marginTop: 0}}>Média do Aluno</p></b>
        <b><p style={{fontSize: 26, marginLeft: 50, marginBottom: 10}}>{studentAverage}</p></b>
      </Col>
      <Col xs={2} sm={2} md={2} lg={1} xl={2}>
        <div style={vert} />
      </Col>
      <Col xs={20} sm={7} md={7} lg={7} xl={7}>
        <b><p style={{fontSize: 12, marginLeft: 40, marginTop: 0}}>Média da Turma</p></b>
        <b><p style={{fontSize: 26, marginLeft: 50, marginBottom: 10}}>{classAverage}</p></b>
      </Col>
      <Col xs={2} sm={2} md={2} lg={1} xl={2}>
        <div style={vert} />
      </Col>
      <Col xs={20} sm={6} md={6} lg={7} xl={6}>
        <b><p style={{fontSize: 12, marginLeft: 40, marginTop: 0}}>Média da Série</p></b>
        <b><p style={{fontSize: 26, marginLeft: 50, marginBottom: 10}}>{seriesAverage}</p></b>
      </Col>
    </div>
  )
}

export default TextLine
