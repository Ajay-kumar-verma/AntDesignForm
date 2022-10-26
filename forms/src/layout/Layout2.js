import { Col, Divider, Row } from 'antd';
import React from 'react';
import Login1 from '../forms/login/Login1'
const App = () => (
  <>

    <Divider orientation="left">Responsive</Divider>
    <Row  justify='space-between'
    style={{height:"100vh",backgroundColor:"red"}} >
      <Col   
    style={{backgroundColor:"blue"}} 
    
    xs={{
          order: 2,
          span:24
         }}
        sm={{
          order: 2,
          span:24
        }}
        md={{
          order: 1,
          span:12
        }}
        lg={{
          order: 1,
         span:12
        }}
      >
        1 col-order-responsive
      
      
      </Col>
      <Col
       
      style={{backgroundColor:"pink"}}
     span={8}
        xs={{
          order: 1,
          span:24
        }}
        sm={{
          order: 1,
          span:24
        }}
        md={{
          order: 2,
          span:12
        }}
        lg={{
          order: 2,
          span:12
        }}
      >
        <Row 
        style={{height:"100vh",backgroundColor:"green"}}
       justify="space-around" align="middle"
        >
        <Login1 />
        </Row>  

      </Col>
      
    </Row>
  </>
);
export default App;