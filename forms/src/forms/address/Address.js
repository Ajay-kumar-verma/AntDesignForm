import React ,{useState} from 'react';
import {Link} from 'react-router-dom'
import { Form, Input, Button, Checkbox ,Select ,DatePicker ,Divider} from 'antd';
import "./style.css"

function AppContact() {
  const option = (list)=>list.map((name)=>(<Select.Option key={name}>{name}</Select.Option>));
  const selectOption =(placeholder,list) =><Select mode="tags" placeholder={placeholder} 
  style={{width: '100%',}}>{option(list)}</Select>
  
  const selectInput =(...data)=>{
    return (<>
     
        <Form.Item  label={data[0]}  name={data[1]} rules={[{required: true,message: 'required !'}]} >
        {data[2]!==undefined ? selectOption(data[0],data[2]):null}
   </Form.Item>
 </>
    )
 }
 



  const dataInput =(...data)=>{
    const {showCount,maxLength} = data[2]; 
      const placeholder=data[0];
     return (<>
     
        <Form.Item label={data[0]} name={data[1]} rules={[{required: true,message: 'required !'}]} >
        {maxLength?<Input allowClear showCount maxLength={maxLength} placeholder={placeholder}  />:<Input  />} 
         </Form.Item>
  </>
    )
  }
  
      const formData =[]; 
  
      const state = selectInput("State","state",["Bihar"])
      formData.push(state)
 
      const city = selectInput("City","city",["Patna"])
      formData.push(city)
 

      const zipCode = dataInput("Enter Zip code of your area ","zipCode",{maxLength:6,placeholder:"zip code "})
          formData.push(zipCode)

      const address1 = dataInput("Address 1 ","address 1",{maxLength:100})
       formData.push(address1);

       const address2 = dataInput("Address 2 ","address 2",{maxLength:100})
       formData.push(address2);

       const street = dataInput("Street  ","street",{maxLength:100})
       formData.push(street);

       const area = dataInput("Area  ","area",{maxLength:100})
       formData.push(area);

       const colony = dataInput("colony ","colony",{maxLength:100})
       formData.push(colony);
   
       const landMark = dataInput("landMark ","landmark",{maxLength:100})
       formData.push(landMark);



       const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };  

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  
  return (
        <Form  className="addressPage"
     onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      labelCol={{span: 24,}}
      wrapperCol={{span: 24,}}
     
      scrollToFirstError
        >
        <Divider>Current Address </Divider> 
         
   {formData.map(e=>e)}
          <Form.Item>
            <Button 
            type="primary" htmlType="submit" style={{width:"100%"}} >
              Submit
            </Button>
          </Form.Item>
        </Form>
  
  );
}

export default AppContact;