import React ,{useState} from 'react';
import { Form, Input, Button, TimePicker  ,Select ,Divider } from 'antd';

function AppContact() {
  const option = (list)=>list.map((name)=>(<Select.Option key={name}>{name}</Select.Option>));

  
  const qualifications = ["BCA","10th","12th","Bachelor","B.E","BSC",]
  const qualificationsOption =option(qualifications);

  const subjects =["Hindi","English","Math","Science","Computer","All"]
  const subjectsOption =option(subjects);
  
  const classes =["NC","LKG","UKG",...new Array(12).fill(0).map((_,i)=>i+1+" class")]
  const classesOption = option(classes);
  
  const workingType =["Not working ","Working full time", "Doing part time job"]
  const workingOption =option(workingType);   
  
  const days =["All days",'Sunday',"Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  const daysOption=option(days);

  const boards =["CBSE","NCERT","BSEB","Other"];
  const BoardOption =option(boards);

  const vehicles = ["Nothing","Bike","Bicyle","other"]
  const  vehicleOption=option(vehicles);

  const distanceOption =option(new Array(5).fill(0).map((_,i)=>2*(i+1)+" KM" ));
  const expectedFeeOption = option(new Array(4).fill(0).map((_,i)=>500*(i+1)+" Rupees " ))

  const [form] = Form.useForm();
  const data = Form.useWatch('sunday',form);
  console.log('Form data is :',data)
    
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
        </div> 
        <Form   form={form}
     onFinish={onFinish}
      onFinishFailed={onFinishFailed}
         name="normal_login"
          className="login-form"
          initialValues={{ remember: true }}
          scrollToFirstError
        >
         <Divider > Educational Details</Divider> 
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
     {qualificationsOption}

        </Select>
  </Form.Item>


  <label>Subjects you want to  teach</label>
        <Form.Item 
            name="teachSubject" 
            rules={[
              { 
                required: true,
                message: 'Please enter subjects you want to teach ' 
              }]
            }
  > <Select
        mode="tags"
        style={{
          width: '100%',
        }}
        >
     {subjectsOption}
        </Select>
  </Form.Item>



  <label>which all classes  you want to  teach</label>
        <Form.Item 
            name="classes" 
            rules={[
              { 
                required: true,
                message: 'Please enter subjects you want to teach ' 
              }]
            }
  > <Select
        mode="tags"
        style={{
          width: '100%',
        }}
        >
     {classesOption}
        </Select>
  </Form.Item>

  <label>which all Board  you want to  teach</label>
        <Form.Item 
            name="classes" 
            rules={[
              { 
                required: true,
                message: 'Please enter subjects you want to teach ' 
              }]
            }
  > <Select
        mode="tags"
        style={{
          width: '100%',
        }}
        >
     {BoardOption}
        </Select>
  </Form.Item>




  <label>Are you warking ?</label>
        <Form.Item 
            name="working" 
            rules={[
              { 
                required: true,
                message: 'Please enter subjects you want to teach ' 
              }]
            }
  > <Select  
        mode="tags"
        style={{
          width: '100%',
        }}
        >
     {workingOption}
        </Select>
  </Form.Item>


   
   <label> Days you are free  </label>
         <Form.Item  name="days" 
         rules={[{ required: true,message: 'required ! '}]
        } 
        > 
    
    <Select mode="tags" style={{width: '100%'}}>
     {daysOption}
        </Select>
  </Form.Item>
      
  
  <label> Vehicle you have    </label>
         <Form.Item  name="days" 
         rules={[{ required: true,message: 'required ! '}]
        } 
        > 
    
    <Select mode="tags" style={{width: '100%'}}>
     {vehicleOption}
        </Select>
  </Form.Item>
  

       <label> Fees yor are expexting 1 hr for a month for one student  </label>
         <Form.Item  name="days" 
         rules={[{ required: true,message: 'required ! '}]
        } 
        > 
    
    <Select mode="tags" style={{width: '100%'}}>
     {expectedFeeOption }
        </Select>
  </Form.Item>
  




  <label> How far can you go from your current location ?  </label>
         <Form.Item  name="distance" 
         rules={[{ required: true,message: 'required ! '}]
        } 
        > 
    
    <Select mode="tags" style={{width: '100%'}}>
     {distanceOption}
        </Select>
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