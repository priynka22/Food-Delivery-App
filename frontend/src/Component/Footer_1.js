import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';

export default function Footer() {
  return (
    <>
          <div class="bg-body-secondary container-fluid text-center mt-5">
        <div class="row">
          <div class="col m-5">
           <h5>FoodBox</h5>

          </div>
          <div class="col m-5">
            <h5>Learn more</h5>
            <p>About</p>
            <p>Contact</p>
            <p>Blog</p>
            <p>Privacy and Policy</p>
          </div>
          <div class="col m-5">
           <h5>Social links</h5>
           <p><InstagramIcon/></p>
            <p><FacebookIcon/></p>
          </div>
        </div>
      </div>
    
    </>
   
  )
}
