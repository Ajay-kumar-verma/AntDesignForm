import './style.css'
import {
    AutoComplete,
    Button,
    Cascader,
    Checkbox,
    Col,
    Form,
    Input,
    InputNumber,
    Row,
    Select,
    Divider
  } from 'antd';
  
  import React, { useState } from 'react';

  const { Option } = Select;
    
  const App = () => {
    const [form] = Form.useForm();
    const onFinish = (values) => {
      console.log('Received values of form: ', values);
    };
    
   const onFinishFailed = (values) =>{
    console.log('Received values of form: ', values);
    } 

    return (
      <Form  className="SignUpPage"
        form={form}
        name="register"
        labelCol={{span: 24,}}
        wrapperCol={{span: 24,}}
       
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        initialValues={{
        }}
        scrollToFirstError
      >
       <Divider>Create Account </Divider>

         <label>firstName</label>
        <Form.Item
          name="first Name"
           rules={[
            {
              type: 'text',
              message: 'The input is not valid !',
            },
            {
              required: true,
              message: 'Please input your first Name!',
            },
          ]}
        >
          <Input maxLength={50} showCount placeholder="Enter first Name" />
        </Form.Item>

        <label>LastName</label>
        <Form.Item
          name="last Name"
           rules={[
            {
              type: 'text',
              message: 'The input is not valid !',
            },
            {
              required: true,
              message: 'Please input your last Name!',
            },
          ]}
        >
          <Input maxLength={50} showCount placeholder="Enter last Name" />
        </Form.Item>



        <label>Mobile</label>
        <Form.Item
          name="phone"
          rules={[
            {
              required: true,
              message: 'Please input your phone number!',
            },
          ]}
        >
          <Input
            addonBefore="+91"
            style={{
              width: '100%',
            }}
          />
        </Form.Item>

       <label>Gender</label>  
        <Form.Item
          name="gender"
          rules={[
            {
              required: true,
              message: 'Please select gender!',
            },
          ]}
        >
          <Select placeholder="select your gender">
            <Option value="male">Male</Option>
            <Option value="female">Female</Option>
            <Option value="other">Other</Option>
          </Select>
        </Form.Item>
          <label>Otp</label>
        <Form.Item  extra="We must make sure that your are a human.">
          <Row gutter={8}>
            <Col span={12}>
              <Form.Item
                name="captcha"
                noStyle
                rules={[
                  {
                    required: true,
                    message: 'Please input the captcha you got!',
                  },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Button>Send Otp</Button>
            </Col>
          </Row>
        </Form.Item>
  
        <Form.Item
          name="agreement"
          valuePropName="checked"
          rules={[
            {
              validator: (_, value) =>
                value ? Promise.resolve() : Promise.reject(new Error('Should accept agreement')),
            },
          ]}
        >
          <Checkbox>
            I have read the <a href="">agreement</a>
          </Checkbox>
        </Form.Item>
        <Form.Item >
          <Button type="primary" style={{width:"100%"}} htmlType="submit"className="btn" >
           createAccount
           </Button>
        </Form.Item>
      </Form>
    );
  };
  export default App;