import React ,{useState} from 'react';
import { Form, Input, Button, message,Alert,notification  ,Select ,Divider } from 'antd';
import './style.css'
function AppContact() {

  const option = (list)=>list.map((name)=>(<Select.Option allowClear key={name}>{name}</Select.Option>));
  const selectOption =(placeholder,list) =><Select placeholder={placeholder} mode="tags" style={{width: '100%',}}>{option(list)}</Select>
  
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
    return (<>
   
      <Form.Item label={data[0]} name={data[1]} rules={[{required: true,message: 'required !'}]} >
      {maxLength?<Input allowClear placeholder={data[0]} showCount maxLength={maxLength}  />:<Input placeholder={data[0]} />} 
       </Form.Item>
</>
  )
}



  const formData =[]; 
      const fullName = dataInput("Enter full name as per Adhar card ","fullName",{maxLength:12})
          formData.push(fullName)

      const addharInput = dataInput("Enter addhar number ","adharNumber",{showCount:"showCount",maxLength:10})
       formData.push(addharInput);

  const numberOption = selectInput("Enter numbers we can contact with ","mobiles",[])
     formData.push(numberOption)

  const emailsOption = selectInput("Enter Emails we can contact with ","emails",[])
       formData.push(emailsOption)

  const qualifications = ["BCA","10th","12th","Bachelor","B.E","BSC",]
  const qualificationsOption =selectInput("Enter your qualification  ","qualification ",qualifications);
     formData.push(qualificationsOption);     

  const subjects =["Hindi","English","Math","Science","Computer","All"]
  const subjectsOption =selectInput("Subjects you want to  teach","subjects",subjects);
       formData.push(subjectsOption);
  
  const classes =["NC","LKG","UKG",...new Array(12).fill(0).map((_,i)=>i+1+" class")]
  const classesOption = selectInput("which all classes  you want to  teach","classes",classes);
        formData.push(classesOption);
  
  const workingType =["Not working ","Working full time", "Doing part time job"]
  const workingOption =selectInput("which all Board  you want to  teach","working",workingType);   
        formData.push(workingOption);

  const days =["All days",'Sunday',"Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  const daysOption=selectInput("Days you are free to take classes","freeDaya",days);
        formData.push(daysOption)

  const boards =["CBSE","NCERT","BSEB","Other"];
  const BoardOption =selectInput("which all Board  you want to  teach","board",boards);
        formData.push(BoardOption)

  const vehicles = ["Nothing","Bike","Bicyle","other"]
  const  vehicleOption=selectInput("Vehicles you have ","vehicles",vehicles);
          formData.push(vehicleOption)
 
  const distanceOption =selectInput("How far can you go from your current location ","distance",new Array(5).fill(0).map((_,i)=>2*(i+1)+" KM" ));
        formData.push(distanceOption);

  const expectedFeeOption = selectInput("your fee expectation ","expectedFee",new Array(4).fill(0).map((_,i)=>500*(i+1)+" Rupees " ))
    formData.push(expectedFeeOption);

  const [form] = Form.useForm();
  const data = Form.useWatch('sunday',form);
  console.log('Form data is :',data)
    
    const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };  

  const onFinishFailed = (errorInfo) => { 
    notification['error']({
      message: 'Notification Title',
      description:
        'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
        placement:"bottom", 
      });
     
    console.log('Failed:', errorInfo);
  };
  


  return (
        <Form   className="detailsPage"
     onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      labelCol={{span: 24,}}
      
      wrapperCol={{span: 24,}}
     
          initialValues={{ remember: true }}
          scrollToFirstError
          
        >
   <Divider>Personal details</Divider>   
    {formData.map(e=>e)}
          <Form.Item>
            <Button 
            type="primary" htmlType="submit"  
             style={{width:"100%"}}
            >
              Submit
            </Button>
          </Form.Item>
        </Form>
    );
}

export default AppContact;