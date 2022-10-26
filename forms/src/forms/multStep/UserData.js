import React ,{useState} from 'react';
import {Link} from 'react-router-dom'

import { Form, Input, Button, Checkbox ,Select ,DatePicker } from 'antd';


function AppContact() {

       const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };  

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  
  return (
    <div   className="block contactBlock">
      <div className="container-fluid">
        <div id="contact" className="titleHolder">
          <h2>Craete Account</h2>
        </div>
        <Form
     onFinish={onFinish}
      onFinishFailed={onFinishFailed}
         name="normal_login"
          className="login-form"
          initialValues={{ remember: true }}
          scrollToFirstError
        >
         
         
         
         <Form.Item
            name="firstName" 
            rules={[
              { 
                required: true,
                message: 'Please enter your first name!' 
              }]
            }
          >
            <Input maxLength={50}  placeholder="first Name" />
          </Form.Item>

          <Form.Item
            name="lastName" 
            rules={[
              { 
                required: true,
                message: 'Please enter your last name!' 
              }]
            }
          >
            <Input maxLength={50}  placeholder="last Name" />
          </Form.Item>

          
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
            <Select.Option value="male">Male</Select.Option>
            <Select.Option value="female">Female</Select.Option>
            <Select.Option value="other">Other</Select.Option>
          </Select>
        </Form.Item>
        
        <Form.Item 
   name="DOB"
   rules={[
     {
       required: true,
       message: 'Please input you date of birth .',
     },
   ]}

  >
<DatePicker className="btn"  
 placeholder="Select your birth date "
/>

  </Form.Item>



          <Form.Item>
            <Form.Item 
              name="remember" 
              valuePropName="checked"
              noStyle
              rules={[
                { validator:(_, value) => value ? Promise.resolve() : Promise.reject('Should accept agreement') },
              ]}
            >
              <Checkbox className="UserData-check">I agree with <Link to="/termAndCondition">terms and conditions. </Link> </Checkbox>
            </Form.Item>
          </Form.Item>

          <Form.Item>
            <Button
            type="primary" htmlType="submit" className="btn">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>  
  );
}

export default AppContact;