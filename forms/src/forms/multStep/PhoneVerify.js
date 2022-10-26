import React ,{useState} from 'react'
import { Button,message,  Form, Input } from 'antd';

const   App = () => {
   const [otp,setOtp] =useState(false)

   const [form] = Form.useForm();
   const mobile = Form.useWatch('phone', form);
   console.log(mobile)
  
 
    const onFinish = (values) => {
       setOtp(true)
       form.setFieldsValue({
        phone: ''
      });
   
      message.success(`6 digits Otp has been sent to ${mobile}`);
       console.log('Success:', values);
    setTimeout(()=>setOtp(false),2000)

    };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  
  return (
    <>
    
  <Form  
    form={form}
  style={{maxWidth:"50%",margin:"auto"}}
      name="basic"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
       <label>{otp?"Enter Otp":"Enter phone Number "}  </label>
      <Form.Item
      name="phone"
        rules={[
          {
            required: true,
            message: 'Please input your phone number !',
          },
        ]}
      >
      <Input 
       addonBefore={otp?null:"+91"}
      maxLength={otp?6:10}
     allowClear
    autoFocus
        placeholder={otp?"Enter Otp":"Enter phone Number "}  />
      </Form.Item>
      <Form.Item
      >
        
     {otp ===true?( <Button type="primary" style={{width:"100%"}} htmlType="submit">
          Verify Otp
         </Button>)
        :
        (<Button
            disabled={(""+mobile).length!==10}
            type="primary"  style={{width:"100%"}} htmlType="submit">
             Send Otp
            </Button>) 
         }
         

      </Form.Item>
     </Form>


</>
  );
};
export default App;