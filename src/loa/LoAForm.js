import React, { Component } from 'react'
import { Form, Icon, Input, Button, Row, Col, Alert, DatePicker, Radio, Select } from 'antd'
import PropTypes from 'prop-types'

const { Option } = Select
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;
const RangePicker = DatePicker.RangePicker
const FormItem = Form.Item;

class LoAFormNormal extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.onSubmit(values, e)
      }
    })
  }
  render() {
    const { props } = this
    const { formError, form } = props
    const { getFieldDecorator } = form

    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
        <FormItem>
          {getFieldDecorator('type', {
            initialValue: 'paid',
          })(
            <RadioGroup style={{width: '100%'}}>
              <RadioButton key="paid" value='paid'>Paid</RadioButton>
              <RadioButton key="unpaid" value='unpaid'>Unpaid</RadioButton>
              <RadioButton key="sick" value='sick' disabled>Sick</RadioButton>
            </RadioGroup>
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('fullName', {
            rules: [{ type: 'string', required: true, message: 'Required field!' }]
          })(
            <Input placeholder="Full name" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('occupation', {
            initialValue: 'developer',
            rules: [{ type: 'string', required: true, message: 'Required field!' }]
          })(
            <Select>
              <Option value="developer">Програмист</Option>
              <Option value="developerLead">Ръководител екип програмисти</Option>
              <Option value="devOps">Експерт, системно осигуряване</Option>
              <Option value="qaLead">Ръководител, качество</Option>
              <Option value="administrativeAssistant">Административен асистент</Option>
              <Option value="projectCoordinator">Координатор проекти</Option>
              <Option value="webDesigner">Уеб дизайнер</Option>
            </Select>
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('dates', {
            rules: [{ type: 'array', required: true, message: 'Required field!' }],
          })(
            <RangePicker />
          )}
        </FormItem>
        { formError && (<FormItem>
          <Alert message={formError} type="error" />
        </FormItem>)}
        <FormItem>
          <Button.Group>
            <Button type="primary" htmlType="submit" className="login-form-button" value='submit'>
              Submit
            </Button>
            <Button type="primary" className="login-form-button" onClick={this.handleDownload}>
              Download
            </Button>
          </Button.Group>
        </FormItem>
      </Form>
    );
  }
}

export const LoAForm = Form.create()(LoAFormNormal)

LoAForm.propTypes = {
    onSubmit: PropTypes.func,
    formError: PropTypes.string
}

LoAForm.defaultProps = {
    onSubmit: _ => void 0
}