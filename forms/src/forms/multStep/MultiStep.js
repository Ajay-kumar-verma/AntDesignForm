import { Button, message, Steps } from 'antd';
import React, { useState } from 'react';
import  PhoneVerify from './PhoneVerify'
import  UserData from './UserData'
import  AccountCreateInfo from './AccountCreateInfo'

const { Step } = Steps;


const steps = [
  {
    title: 'Number verification ',
    content: <PhoneVerify />,
  },
  {
    title: 'User Information ',
    content: <UserData />,
  },
  {
    title: 'Create Account',
    content:<AccountCreateInfo /> ,
  },
];

const App = () => {
  const [current, setCurrent] = useState(0);
   return (
    <>
      <Steps style current={current}>
        {steps.map((item) => (
          <Step key={item.title} title={item.title} />
        ))}
      </Steps>

      <div className="steps-content">
        {steps[current].content}
        
        </div>
      
      <div className="steps-action">
               {current === steps.length - 1 ?  (
          <Button type="primary" 
          onClick={() => message.success('Processing complete!')}>
            Done
          </Button>
        ):(<Button type="primary"
         onClick={() => setCurrent(current + 1)}>
        Next
      </Button>
        )}

        {current >0 && (
          <Button
            style={{
              margin: '0 8px',
            }}
            onClick={() => setCurrent(current - 1)}
          >
            Previous
          </Button>
        )}
      </div>
    </>
  );
};
export default App;