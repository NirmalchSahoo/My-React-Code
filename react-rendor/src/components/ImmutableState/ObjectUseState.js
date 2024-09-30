import React, { useState } from 'react';

const initState = {
  fname: 'Nirmal',
  lname: 'Sahoo',
};
export const ObjectUseState = () => {
  const [person, setPerson] = useState(initState);
  const chnageName = () => {
    // person.fname = 'Clerk';
    // person.lname = 'Joe';
    // setPerson(person);
    const newPerson = { ...person };
    newPerson.fname = 'Clerk';
    newPerson.lname = 'Joe';
    setPerson(newPerson);
  };
  console.log('UseState Render');
  return (
    <div>
      <button onClick={chnageName}>
        {person.fname} - {person.lname}
      </button>
    </div>
  );
};
