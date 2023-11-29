import React from 'react';

export default function CartItems({ data }) {
  return (
    <>
    <div className=''>
      <table className="table table-striped">
       
        <tbody>
          <tr>
            <td>{data.name}</td>
            <td className='ms-3'>Rs.{data.price}</td>
          </tr>
        </tbody>
      </table>
      </div>
    </>
  );
}
