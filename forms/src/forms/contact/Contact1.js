import React ,{useState} from 'react';

import { Form, Input, Button, Checkbox, Divider } from 'antd';
const { TextArea } = Input;

function AppContact() {

  const dataInput =(...data)=>{
    const {showCount,maxLength} = data[2]; 
      return (<>
        <Form.Item label={data[0]} name={data[1]} rules={[{required: true,message: 'required !'}]} >
        {showCount?<Input showCount  maxLength={maxLength}  />:<Input  maxLength={maxLength} />} 
         </Form.Item>
  </>
    )
  }
  







       const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };  

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  
  return (
        <Form   className="contactPage"
      onFinish={onFinish}
      labelCol={{span: 24,}}
      wrapperCol={{span: 24,}}
     
      onFinishFailed={onFinishFailed}
         initialValues={{ remember: true }}
      
      >
     
       <Divider>We will contact you soon ! </Divider>
          <Form.Item
            name="fullname" 
            label="Enter full Name "
            rules={[
              { 
                required: true,
                message: 'Please enter your full name!' 
              }]
            }
          >
            <Input maxLength={50}  placeholder="Full Name" />
          </Form.Item>
          <Form.Item
          name="email"
            rules={[
              {
                type: 'email',
                message: 'The input is not valid E-mail!',
              },
              {
                required: true,
                message: 'Please input your E-mail!',
              },
            ]}
          >
            <Input  maxLength={100} placeholder="Email Address"/>
          </Form.Item>
          <Form.Item
            name="telephone"
            rules={[
 {
                required: true,
                message: 'Please input your mobile number',
              },
            ]}
           >
            <Input maxLength={10} placeholder="Telephone" />
          </Form.Item>
          <Form.Item
            name="subject"
            rules={[
             
              {
                required: true,
                message: 'Please input your subject',
              },
            ]}
          >
            <Input  placeholder="Subject" />
          </Form.Item>
          <Form.Item
            name="message"
            rules={[
              {
                required: true,
                message: 'Please input you want to talk about ',
              },
            ]}

           >
            <TextArea showCount 
             style={{
              height: 120,
              resize: 'none',
            }}
             maxLength={1000} placeholder="Message" />
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
              <Checkbox>I agree with terms and conditions.</Checkbox>
            </Form.Item>
            <a href='#'style={{float:"right"}}  > Thanks for contacting us ! </a>
          </Form.Item>

          <Form.Item>
            <Button
            type="primary" htmlType="submit" className="btn">
              Submit
            </Button>
          </Form.Item>
        </Form>
  
  );
}

export default AppContact;