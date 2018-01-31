import React, { Component } from 'react'
// import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
// import { actions, selectors } from './auth'
import { LoAForm } from './LoAForm'
import { Row, Col } from 'antd'

export class LoAFormNormal extends Component {
  render () {
    return (
      <Row type="flex" align="middle" justify="space-around" className="leave-form-row">
        <Col span={8}>
          <h1>Заявление за отпуск</h1>
          <LoAForm />
        </Col>
      </Row>
    )
  }
}

export const LoAPage = connect(
  state => ({}),
  dispatch => ({})
)(LoAFormNormal)
