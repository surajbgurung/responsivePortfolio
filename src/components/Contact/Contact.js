import React from 'react';
import mail from './Images/mail.png';
import linkendin from './Images/linkendin.png';
import github from './Images/github1.png';
import insta from './Images/insta.png';



export const Contact = () => {
    
    return (
  
        <div>
  
          <h2  style={{marginTop: '30px',marginLeft:'30px' }}>Contact Me</h2>
              <div className="row">
                <div className="col-sm-4" style={{margin: '30px'}}>
                     <a href="mailto: microbiosuraj@gmail.com" class="card-link"><img src={mail} alt="mail"
                    width="30px" height="30px" hspan="20"/></a>
                </div>
                <div className="col-sm-4" style={{margin: '30px'}}>
                <a href="https://www.linkedin.com/in/suraj-gurung-38069419a/"><img src={linkendin}
                    alt="linkedin image" width="30px" height="30px" hspan="20"/></a>
                    </div>
                <div className="col-sm-4 " style={{margin: '30px'}}>
                <a href="https://github.com/surajbgurung"><img src={github} alt="github image"
                    width="30px" height="30px" hspan="20"/></a>
                    </div>
                <div className="col-sm-4"style={{margin: '30px'}}>
                <a href="https://www.instagram.com/jarus_grg/?hl=en"><img src={insta} alt="insta image"
                    width="30px" height="30px" hspan="20"/></a>
                    </div>
              </div>
            
            </div>
         )
    
}