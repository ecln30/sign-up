













import React from 'react';


function Form({firstname,lastname, email, password, handleSubmit, handleChange}) {
    return ( 
        <div className="container">
       <p className="try">
         Try it free 7 days <span> then $20/mo.thereafter</span>
       </p>
         
         <form action="">
           <input className="first-name" type="text" placeholder="first name"
               onChange={handleChange}
               value={firstname}
               name="first" required />
           <input type="text" placeholder="last name"
                onChange={handleChange}
               value={lastname}
               name="last" required />

           <input type="text" placeholder="Enter Email"
                onChange={handleChange}
               value={email}
               name="email" required />

           <input type="password" placeholder="Enter Password" 
                 onChange={handleChange}
                value={password}
               name="psw" required />

           <button type="submit" className="signupbtn"
            onSubmit={handleSubmit}
           >CLAIM YOUR FREE TRIAL</button>
           <p> By clicking the button, you are agreeing to our <strong>Terms and Services</strong></p>
         </form>
        </div>
     );
 }

export default Form;



































































































































































































































