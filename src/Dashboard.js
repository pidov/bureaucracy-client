import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Layout, Menu, Button } from 'antd'
import { actions, selectors } from './auth/auth'
import { Link } from 'react-router-dom'

const { Header, Footer } = Layout
export class DashboardNormal extends Component {
  render () {
    return (
      <Layout className="layout">
        <Header>
          <Menu theme="dark" mode="horizontal" style={{ lineHeight: '64px', float: 'left' }} >
            <Menu.Item key="1">
              <Link to='/loa'>Request Leave</Link>
            </Menu.Item>
          </Menu>
          <Button
            onClick={this.props.LOG_OUT}
            type="primary" 
            style={{float: 'right', margin: '15px 0 0'}}
          >
            Log out
          </Button>
        </Header>
        <div>
          {this.props.children}
        </div>
        <Footer style={{ textAlign: 'center' }}>
          Tick42 ©2018
        </Footer>
      </Layout>
    )
  }
}

export const Dashboard = connect(
  state => ({}),
  dispatch => ({
    ...bindActionCreators(actions, dispatch)
  })
)(DashboardNormal)
