import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Signin() {
  const navigate = useNavigate();

  return (
    <>
      <div className='border-top loginForm '>
        <form className='container-fluid signInForm w-25 ms-auto me-auto mb-5 border'>
          <div className='text-center mt-5 ms-3 me-3'>
            <h5>Sign in with</h5>
            <div className='mt-3'>
              <button type="button" className="btn btn-sm btn-outline-danger opacity-75 me-3">
                Login with Facebook
              </button>
              <button type="button" className="btn btn-sm btn-outline-danger opacity-75">
                Login with Google
              </button>
            </div>
            <br />
            <hr />
            <p>Or</p>
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
          <div className="mb-3 form-check me-3 ms-3">
            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
            <label className="form-check-label me-5" htmlFor="exampleCheck1">
              Remember me
            </label>
            <span>Forgot password?</span>
          </div>

          <div className='text-center p-3'>
            <div className="d-grid gap-2">
              <button type="submit" className="btn btn-outline-danger opacity-75"  >
                Sign in
              </button>
            </div>
            <div className='text-center p-3 pb-5'>
              Don't have an account? 
              <Link className="text-decoration-none" to="/Signup">Sign up</Link>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
