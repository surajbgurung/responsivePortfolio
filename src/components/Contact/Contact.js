import React from 'react';
import mail from './Images/mail.png';
import linkendin from './Images/linkendin.png';
import github from './Images/github1.png';
import insta from './Images/insta.png';
import './contact.css';



export const Contact = () => {
    
    return (
        //old
        // <div>
        // <h2  style={{marginTop: '30px',marginLeft:'30px' }}>Contact Me</h2>
        //     <div className="row">
        //            <a href="mailto: microbiosuraj@gmail.com" class="card-link" style={{margin: '20px' }}><img src={mail} alt="mail"
        //           width="40px" height="40px" hspan="20"/></a>
        //       <a href="https://www.linkedin.com/in/suraj-gurung-38069419a/" style={{margin: '20px' }}><img src={linkendin}
        //           alt="linkedin image" width="35px" height="35px" hspan="20"/></a>
        //       <a href="https://github.com/surajbgurung" style={{margin: '20px' }}><img src={github} alt="github image"
        //           width="40px" height="40px" hspan="20"/></a> 
        //       <a href="https://www.instagram.com/jarus_grg/?hl=en" style={{margin: '20px' }}><img src={insta} alt="insta image"
        //           width="40px" height="40px" hspan="20"/></a>
        //     </div>
        //   </div>
        

        //starting new
     
        // <h2  style={{marginTop: '30px',marginLeft:'30px' }}>Contact Me</h2>
            <ul>
                
                <li><a href="mailto: microbiosuraj@gmail.com"><img src={mail} alt="mail" width="40px" height="40px" hspan="20"/></a></li>
                <li><a href="mailto: microbiosuraj@gmail.com">microbiosuraj@gmail.com</a></li>
                <li><a href="https://www.linkedin.com/in/suraj-gurung-38069419a/"><img src={linkendin} alt="linkendin" width="40px" height="40px" hspan="20"/></a></li>
                <li> <a href="https://www.linkedin.com/in/grgsuraj/">https://www.linkedin.com/in/grgsuraj/</a></li>
                <li><a href="https://github.com/surajbgurung"><img src={github} alt="github image" width="40px" height="40px" hspan="20"/></a></li>
                <li> <a href="https://github.com/surajbgurung">https://github.com/surajbgurung</a></li>
                <li><a href="https://www.instagram.com/jarus_grg/?hl=en"><img src={insta} alt="insta" width="40px" height="40px" hspan="20"/></a></li>
                {/* <li> <a href="https://www.instagram.com/jarus_grg/?hl=en">https://www.instagram.com/jarus_grg/?hl=en</a></li> */}
            </ul>
       

         )
    
}