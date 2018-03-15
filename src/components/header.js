import React from 'react';
import Proptypes from 'prop-types';

const Header = ({title, url, paragraph}) => (
  <header>
    <h1> {title} </h1>
    <img src={url} alt={title} />
    <p> {paragraph} </p>
  </header>
)

Header.propTypes = {
  title : Proptypes.string.isRequired,
  url : Proptypes.string.isRequired,
  paragraph : Proptypes.string.isRequired
}

//Si no tenemos data, tengo valores por default. Sirve para asegurarnos que el proyecto siempre levante
Header.defaultProps = {
  title : 'Hola mundo',
  url : 'lulu.jpg',
  paragraph : 'Aquí con mi valor por default'
}

export default Header