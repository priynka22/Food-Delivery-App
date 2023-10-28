import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';

export default function Footer() {
  return (
<>
        <div className="bg-body-secondary container-fluid text-center p-5">
        <div className="row">
          <div className="col m-5">
           <h5>FoodBox</h5>
           <p>Lorem ipsum dolor sit amet. Qui aliquam minima qui deserunt reprehenderit et
           consequatur excepturi et quia omnis ut dolorum.</p>
         </div>
          <div className="col m-5">
            <h5>Learn more</h5>
            <p>About</p>
            <p>Contact</p>
            <p>Blog</p>
            <p>Privacy and Policy</p>
          </div>
          <div className="col m-5">
           <h5>Social links</h5>
           <span className='me-3'><InstagramIcon/></span>
            <span><FacebookIcon/></span>
          </div>
        </div>
        <p>FOODIE
 ©. All Rights Reserved. 

Terms of use
Terms of use
 and 

Privacy Policy</p>
      </div>
    
</>
   
  )
}
