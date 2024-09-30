import React from 'react';

function Person(person) {
  return (
    <div>
      <h2>
        I am {person.name}. I am {person.age} years old. I lived in{' '}
        {person.city}
      </h2>
    </div>
  );
}

export default Person;
