import React from 'react';
import Header from './header';
import Section from './section'
//import Section from './section';

/* const App = () => (
  <Header />
) */

/* const datos = ['Redux', 'React-router', 'Js'];
const notas = [10, 20, 30]; */

/* const App = () => (
  <div>
    <Header
      title='Esto es mi spa de react'
      url='react.png'
      paragraph='Librería de js que me permite trabajar las vistas de mi spa'
    />
    <Section
      contenido='Si quiero llegar a realizar single applications potententes debo conocer'
      arrayCursos={datos}
    />
  </div>
) */

const data = {
  titulo: 'Hola mundo desde React',
  url: 'react.png',
  text: 'Librería de js que me permite trabajar las vistas de mi spa',
  parrafo: 'Si quiero llegar a realizar single applications potententes debo conocer',
  items : ['Redux', 'React-Router', 'Js', 'DOM']
}

const App = () => (
  <div>
    <Header
      title = {data.titulo}
      url = {data.url}
      paragraph = {data.text}
    />
    <Section 
      contenido = {data.parrafo}
      arrayCursos = {data.items}
    />
  </div>
)

export default App
