import React from 'react';
import { useNavigate } from 'react-router-dom';



export default function Signup() {
  const navigate = useNavigate();
  

  return (
    <>
  
        <div className='border-top loginForm'>
          <form className='container-fluid signInForm w-25 ms-auto me-auto mb-5 border'>
            <div className='text-center mt-5 ms-3 me-3'>
            <h5>Sign up</h5>
            </div>
            <div className="mb-3 me-3 ms-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input type="email" className="form-control" id="exampleInputEmail1" required />
            </div>
            <div className="mb-3 me-3 ms-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input type="password" className="form-control" id="exampleInputPassword1" required />
            </div>
            <div className="mb-3 me-3 ms-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Confirm Password
              </label>
              <input type="password" className="form-control" id="exampleInputPassword1" required />
            </div>
         
           
            <div className='text-center p-3 pb-5'>
      
                <button type="submit" className="btn btn-outline-danger opacity-75" onClick={() => navigate('/Homepage')} >
                  Sign up
                </button>
              
            </div>
          </form>
        </div>
    
    </>
  );
}
