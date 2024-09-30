import React from 'react';
// normal function

// function Greet() {
//   return <h1>Hello Nirmal</h1>;
// }
// export function Greet() {
//   return <h1>Hello Nirmal</h1>;
// }

// fat arrow function with props
// const Greet = (props) => {
//   console.log(props);
//   return (
//     <div>
//       <h1>
//         Hello {props.name} a.k.a {props.heroName}
//       </h1>
//       {props.children}
//     </div>
//   );
// };

// fatarrow function with destructuring props and states
// const Greet = ({ name, heroName }) => {
//   console.log(name, heroName);
//   return (
//     <div>
//       <h1>
//         Hello {name} a.k.a {heroName}
//       </h1>
//     </div>
//   );
// };
// fatarrow function with destructuring props and states
const Greet = (props) => {
  const { name, heroName } = props;
  console.log(name, heroName);
  return (
    <div>
      <h1>
        Hello {name} a.k.a {heroName}
      </h1>
    </div>
  );
};

export default Greet;
