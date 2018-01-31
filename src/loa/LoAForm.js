import React, { Component } from 'react'
import { Form, Icon, Input, Button, Row, Col, Alert, DatePicker, Radio } from 'antd'
import PropTypes from 'prop-types'

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
              <RadioButton key="paid" value='paid'>Платен</RadioButton>
              <RadioButton key="unpaid" value='unpaid'>Неплатен</RadioButton>
              <RadioButton key="sick" value='sick' disabled>По болест</RadioButton>
            </RadioGroup>
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('dates', {
            rules: [{ type: 'array', required: true, message: 'Задължително поле!' }],
          })(
            <RangePicker />
          )}
        </FormItem>
        { formError && (<FormItem>
          <Alert message={formError} type="error" />
        </FormItem>)}
        <FormItem>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Изпрати
          </Button>
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