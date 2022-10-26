import React from 'react'
import {Divider} from 'antd'
import './style.css'
import Login1 from './Login1'
import Login2 from './Login2'

const Login = () => {
  return (
    <>

    <Divider style={{ borderLeft:"10px solid green" ,backgroundColor:"#6e4",color: "#234" }}>Login form 1</Divider>
    <Login1 />
    <Divider >Login Form 2</Divider>
    <Login2 />

    <Divider style={{ border: "5px  solid #d8d8d8" }}>or</Divider>
   <Divider style={{ backgroundColor: "#8d8" }}>or</Divider>
   <Divider style={{ borderColor: "#8d8" }}>or</Divider>
    </>
  )
}

export default Login