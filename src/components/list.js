import React from 'react';
import Item from './item'

const List = ({ cursos }) => (
  <ul>
    {cursos.map(curso => 
      <Item 
        curso = {curso}
        key = {curso} />
      )
    }
  </ul>
)

export default List;