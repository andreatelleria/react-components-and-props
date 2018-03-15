import React from 'react';

/* const Item = () => (
  <div>
    <li>Redux</li>
    <li>React-router</li>
    <li>Js</li>
  </div>
) */

/* const datos = ['Redux', 'React-router', 'Js'];
const notas = [10, 20, 30];

const Item = () => (
  <div>
    <li>{datos[0]}</li>
    <li>{datos[1]}</li>
    <li>{datos[2]}</li>
  </div>
) */

const Item = ( {curso} ) => (
  <div>
    <li>{curso}</li>
  </div>
)

export default Item