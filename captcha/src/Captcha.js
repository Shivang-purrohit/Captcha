import React from 'react'
import { useState } from 'react';


const Captcha = (props) => {
    
    const [user, setUser] = useState({
        username:""
    });
    const characters ='abc123';
    function generateString(length) 
    {
        let result = '';
        const charactersLength = characters.length;
        for ( let i = 0; i < length; i++ ) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
       return result;
     }
     const captcha = generateString(6) 
     let handleChange = (e) => {
       let name = e.target.name;
       let value = e.target.value;
       user[name] = value;
       setUser(user);
    }
    const onSubmit = e => {
      var element =  document.getElementById("succesBTN");
      var inputData = document.getElementById("inputType");
       element.style.cursor = "wait";
       element.innerHTML  = "Checking...";
       inputData.disabled = true;
       element.disabled = true;
        var myFunctions = function(){
            if(captcha == user.username)
            {
              element.style.backgroundColor   = "green";
              element.innerHTML  = "Captcha Verified";
              element.disabled = true;
              element.style.cursor = "not-allowed";
              inputData.style.display = "none";
              
            }
            else
            {
              element.style.backgroundColor   = "red";
              element.style.cursor = "not-allowed";
              element.innerHTML  = "Not Matched";
              element.disabled = true;
             
              var myFunction = function(){
                element.style.backgroundColor   = "#007bff";
                element.style.cursor = "pointer";
                element.innerHTML  = "Verify Captcha";
                element.disabled = false;
                inputData.disabled = false;
                
              };
              setTimeout(myFunction,2000);
            }
          }   
          setTimeout(myFunctions,2000); 
    };
    

  return (
    <>
   <div className='login-form' >
    <div className='form-title'>
     Sign Up
    </div>
    <div className='form-input'>
     <label for="firstname">First Name</label>
     <input type="text" id='firstname'/>
    </div>
    <div className='form-input'>
     <label for="lastname">Last Name</label>
     <input type="text" id='last-name'/>
    </div>
    <div className='form-input'>
     <label for="username">Email</label>
     <input type="text" id='username'/>
    </div>
    <div className='form-input'>
     <label for="password">Password</label>
     <input type="password" id='password'/>
    </div>
    <div className='form-input'>
     <label for="password">Confirm Password</label>
     <input type="password" id='password'/>
    </div>
    <div className='captcha'>
     <label for="captcha-input">Enter Captcha</label>
     <div className="preview">{captcha}</div>
     <div className="captcha-form">
       <input type="text" name="username"  onChange={handleChange} id="inputType" className="captcha-form" placeholder='Enter Captcha '/>
      
     </div>
    </div>
    <div className="form-input">
     <button type="button" id="succesBTN" onClick={onSubmit}>Sign Up</button>
    </div>
     
   </div>
   </>
  )
}

export default Captcha
