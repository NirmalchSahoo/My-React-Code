import React from 'react';
import Person from './Person';

function NameList() {
  const names = ['Bruce', 'Clark', 'Diana', 'Bruce'];
  // const nameList = names.map((name) => <h2 key={name}>{name}</h2>);
  // index parameter for key prop
  const nameList = names.map((name, index) => (
    <h2 key={index}>
      {index}
      {name}
    </h2>
  ));
  // const persons = [
  //   {
  //     id: 1,
  //     name: 'Alice',
  //     age: 30,
  //     city: 'New York',
  //   },
  //   {
  //     id: 2,
  //     name: 'Bob',
  //     age: 25,
  //     city: 'Los Angeles',
  //   },
  //   {
  //     id: 3,
  //     name: 'Charlie',
  //     age: 35,
  //     city: 'Chicago',
  //   },
  // ];
  // const personList = persons.map((person) => (
  //   <Person key={person.id} person={person}></Person>
  // ));

  return (
    <div>
      {/* <h2>{names[0]}</h2>
      <h2>{names[1]}</h2>
      <h2>{names[2]}</h2> */}

      {nameList}
      {/* {personList} */}
    </div>
  );
}

export default NameList;
