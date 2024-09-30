import React, { useState } from 'react';
import useInput from '../hooks/useInput';

const FormInput = () => {
  // const [firstName, setFirstName] = useState('');
  const [firstName, bindFirstName, resetFirstName] = useInput('');
  //const [lastName, setLastName] = useState('');
  const [lastName, bindLastName, resetLastName] = useInput('');

  const submithandler = (e) => {
    e.preventDefault();
    alert(`Hello ${firstName} ${lastName}`);
    resetFirstName();
    resetLastName();
  };
  return (
    <div>
      <form onSubmit={submithandler}>
        <div>
          <label htmlFor="">First Name</label>
          <input
            // value={firstName}
            // onChange={(e) => setFirstName(e.target.value)}
            {...bindFirstName}
            type="text"
          />
        </div>
        <div>
          <label htmlFor="">Last Name</label>
          <input
            // value={lastName}
            // onChange={(e) => setLastName(e.target.value)}
            {...bindLastName}
            type="text"
          />
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default FormInput;
