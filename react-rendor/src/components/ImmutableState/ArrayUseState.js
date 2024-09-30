import React, { useState } from 'react';

const initState = ['Bruce', 'Mark'];
export const ArrayUseState = () => {
  const [persons, setPersons] = useState(initState);
  const handleClick = () => {
    // persons.push('Marsh');
    // persons.push('Kevin');
    // setPersons(persons);
    const newPersons = [...persons];
    newPersons.push('Marsh');
    newPersons.push('Kevin');
    setPersons(newPersons);
  };
  console.log('ArrayUseState Render');
  return (
    <div>
      <button onClick={handleClick}>Click</button>
      {persons.map((person) => (
        <div key={person}>{person}</div>
      ))}
    </div>
  );
};
