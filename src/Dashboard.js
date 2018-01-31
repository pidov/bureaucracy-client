import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Layout, Menu, Button } from 'antd'
import { actions, selectors } from './auth/auth'

const { Header, Footer } = Layout
export class DashboardNormal extends Component {
  render () {
    return (
      <Layout className="layout">
        <Header>
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['2']}
            style={{ lineHeight: '64px', float: 'left' }}
          >
            <Menu.Item key="1">nav 1</Menu.Item>
            <Menu.Item key="2">nav 2</Menu.Item>
            <Menu.Item key="3">nav 3</Menu.Item>
          </Menu>
          <Button
            onClick={this.props.LOG_OUT}
            type="primary" 
            style={{float: 'right', margin: '15px 0 0'}}
          >
            Log out
          </Button>
        </Header>
        <Footer style={{ textAlign: 'center' }}>
          Tick42 ©2018
        </Footer>
      </Layout>
    )
  }
}

export const Dashboard = connect(
  state => ({
    isAuthorized: selectors.isAuthorized(state),
    loginFormError: selectors.loginFormError(state)
  }),
  dispatch => ({
    ...bindActionCreators(actions, dispatch)
  })
)(DashboardNormal)
