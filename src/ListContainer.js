import React from 'react';
import Description from './Description';

export default function ListContainer (props) {

  return (
      <ul>
        {
          props.distances.map(distance => {
            return (
              <Description distance={distance}/>
              
            )
          })
        }
      </ul>
    )
}

