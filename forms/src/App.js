// import {Divider} from 'antd'
import {Routes,Route,NavLink} from 'react-router-dom'
import Login from './forms/login/Login';
import SignUp from './forms/signup/signUp';
import ContackForm from './forms/contact/Contact';
import MultiStep from './forms/multStep/Step';
import AddRemoveInput from './forms/addRemove/AddRemoveInput';
import Address from './forms/address/Address';
import Details from './forms/personalDetails/Details';

import Layout from './layout/Layout2';

const style = (e) =>{
  const {isActive} =e;
  console.log(isActive);
  if(isActive)
  return {margin:"5px",color:"red" }
 else return { margin:"2px",}
}

const Links =({children}) =>{
    console.log("App component loaded ")
    return (<>
  <NavLink 
  style={style}
  to={children}>{children}</NavLink>
</>)
}



function App() {
const pathComp = (path,component) =>({path,component});

// const lst = ["LogInForm","SignUpForm","ConactForm","AllForm"]  
const lst = [
    pathComp("LogInForm",<Login />),
    pathComp("SignUp",<SignUp />),
    pathComp("ContackForm",<ContackForm />),
    // pathComp("StepForm",<MultiStep />),
    // pathComp("AddRemoveInput",<AddRemoveInput />),
    pathComp("Address",<Address />),
    pathComp("Details",<Details />),
    // pathComp("Layout",<Layout />),
]
 
return (
  <>
   <div className="menubar" >
   {lst.map(({path}) =><Links>{path}</Links>)}
  
   </div>

 <hr />
 <Routes>
 
 {
  lst.map(({path,component}) => {
   return   <Route    path={path} element={component} />
  })
 }

  {/* <Route path={lst[0]} element={comp[0]  } /> */}
  

 
 </Routes>

  

  </>
    );
}

export default App;
