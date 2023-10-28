import React from 'react';
import chef from './Images/chef.jpg';
import chef1 from './Images/chef1.jpg';
import chef2 from './Images/chef2.jpg';

export default function About() {
  return (
    <div className="w-100 fs-5">
      <div className='row'>
        <div className='col'>
          <img src={chef} className='img-fluid' alt="chef" />
        </div>
      </div>

      <div className=' container p-5 text-center'>
        <h2>A long history…</h2>
        <p>
          Lorem ipsum dolor sit amet. Qui aliquam minima qui deserunt reprehenderit et consequatur excepturi et quia omnis ut dolorum galisum aut ipsam reprehenderit ut minus magnam. Ad officiis quisquam est pariatur beatae sit fugiat cumque hic consequatur aliquid ut laboriosam voluptate id laboriosam nihil est repellendus quisquam.
        </p>
      </div>

      <div className="container mt-5 text-center">
        <div className='row'>
          <div className='col'>
            <img src={chef1} alt="chef" className='img-fluid' />
          </div>
          <div className='col p-5'>
            <h4>Hwa Young</h4>
            <p>Founder</p>
            <p>
              Lorem ipsum dolor sit amet. Qui aliquam minima qui deserunt reprehenderit et consequatur excepturi et quia omnis ut dolorum galisum aut ipsam reprehenderit ut minus magnam.
            </p>
          </div>
        </div>

        <div className='row mt-5 mb-5'>
          <div className='col p-5'>
            <h4>Noah Flynn</h4>
            <p>Co-Founder</p>
            <p>
              Lorem ipsum dolor sit amet. Qui aliquam minima qui deserunt reprehenderit et consequatur excepturi et quia omnis ut dolorum galisum aut ipsam reprehenderit ut minus magnam.
            </p>
          </div>
          <div className='col'>
            <img src={chef2} alt="chef" className='img-fluid' />
          </div>
        </div>
      </div>
    </div>
  );
}
