import React from 'react';
import List from './list';

/* const Section = () => (
  <section>
  <p>Si quiero llegar a realizar single applications potententes debo conocer</p>
  <ul>
    <li>react</li>
    <li>redux</li>
    <li>js</li>
  </ul>
  </section>
) */

//con props
/* const Section = () => (
  <section>
    <p>Si quiero llegar a realizar single applications potententes debo conocer</p>
    <List cursos = {datos} />
  </section>
) */

const Section = ({ contenido, arrayCursos }) => (
  <section>
    <p>{contenido}</p>
    <List cursos={arrayCursos} />
  </section>
)

/* Section.propTypes = {
  
} */

export default Section;