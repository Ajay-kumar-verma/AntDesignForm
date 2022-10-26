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
          <h2>Acurrent address</h2>
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
            name="zipCode" 
            rules={[
              { 
                required: true,
                message: 'Please enter zip code ' 
              }]
            }
          >
            <Input maxLength={6}  placeholder="pin number" />
          </Form.Item>
  <Form.Item 
            name="state" 
            rules={[
              { 
                required: true,
                message: 'Please enter state ' 
              }]
            }
  >
        <Select
        mode="tags"
        style={{
          width: '100%',
        }}
        >
     {[
         <Select.Option key="1">Bihar</Select.Option>,
        ]}

        </Select>

       </Form.Item>
          

       <Form.Item 
            name="city" 
            rules={[
              { 
                required: true,
                message: 'Please enter city ' 
              }]
            }
  >
        <Select
        mode="tags"
        style={{
          width: '100%',
        }}
        >
     {[
         <Select.Option key="1">Patna</Select.Option>,
        ]}

        </Select>

       </Form.Item>
      

       <Form.Item
            name="Address1" 
            rules={[
              { 
                required: true,
                message: 'Please enter Address1 ' 
              }]
            }
          >
            <Input maxLength={100} showCount  placeholder="Address 1" />
          </Form.Item>



          <Form.Item
            name="Address2" 
            rules={[
              { 
                required: true,
                message: 'Please enter Address2 ' 
              }]
            }
          >
            <Input maxLength={100} showCount  placeholder="Address 2" />
          </Form.Item>




          <Form.Item
            name="street" 
            rules={[
              { 
                required: true,
                message: 'Please enter street ' 
              }]
            }
          >
            <Input maxLength={100} showCount  placeholder="Street " />
          </Form.Item>



          <Form.Item
            name="area" 
            rules={[
              { 
                required: true,
                message: 'Please enter area ' 
              }]
            }
          >
            <Input maxLength={100} showCount  placeholder="Area" />
          </Form.Item>


          <Form.Item
            name="colony" 
            rules={[
              { 
                required: true,
                message: 'Please enter colony ' 
              }]
            }
          >
            <Input maxLength={100} showCount  placeholder="Enter colony" />
          </Form.Item>

          <Form.Item
            name="landMark" 
            rules={[
              { 
                required: true,
                message: 'Please enter land mark ' 
              }]
            }
          >
            <Input maxLength={100} showCount  placeholder="Enter land mark" />
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