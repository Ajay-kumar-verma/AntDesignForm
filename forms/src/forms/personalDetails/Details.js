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
         
         <label> qualification</label>
         <Form.Item 
            name="qualification" 
            rules={[
              { 
                required: true,
                message: 'Please enter qualification ' 
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
         <Select.Option key="10th">10th</Select.Option>,
         <Select.Option key="12th">12th</Select.Option>,
         <Select.Option key="graduation">graduation</Select.Option>,
      ]}

        </Select>
  </Form.Item>


  <label>Specialized Subject</label>
        <Form.Item 
            name="subject" 
            rules={[
              { 
                required: true,
                message: 'Please enter specialized subject ' 
              }]
            }
  > <Select
        mode="tags"
        style={{
          width: '100%',
        }}
        >
     {[
         <Select.Option key="computerScience">Computer science</Select.Option>,
         <Select.Option key="math">Math</Select.Option>,
         <Select.Option key="physics">Physics</Select.Option>,
         <Select.Option key="other">other</Select.Option>,
      ]}

        </Select>
  </Form.Item>
        


  <label>Subjects you want to  teach</label>
        <Form.Item 
            name="subject" 
            rules={[
              { 
                required: true,
                message: 'Please enter specialized subject ' 
              }]
            }
  > <Select
        mode="tags"
        style={{
          width: '100%',
        }}
        >
     {[
         <Select.Option key="computerScience">Computer science</Select.Option>,
         <Select.Option key="math">Math</Select.Option>,
         <Select.Option key="science">science</Select.Option>,
         <Select.Option key="English">English</Select.Option>,
         <Select.Option key="Hindi">Hindi</Select.Option>,
         
    ]}

        </Select>
  </Form.Item>
    





  <label>Free time you have </label>
        <Form.Item 
            name="subject" 
            rules={[
              { 
                required: true,
                message: 'Please enter specialized subject ' 
              }]
            }
  > <Select
        mode="tags"
        style={{
          width: '100%',
        }}
        >
     {[
         <Select.Option key="computerScience">Computer science</Select.Option>,
         <Select.Option key="math">Math</Select.Option>,
         <Select.Option key="science">science</Select.Option>,
         <Select.Option key="English">English</Select.Option>,
         <Select.Option key="Hindi">Hindi</Select.Option>,
         
    ]}

        </Select>
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