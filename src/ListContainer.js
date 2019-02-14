import React from 'react';
import Description from './Description';

export default function ListContainer (props) {

  let routeNames = props.areaAndRoutes[props.areaName].classicRoutes.map((route) => {
    return route.name
  })

  debugger

  return (
      <ul>
        {
          
      console.log(routeNames)
      
        
      }
      </ul>
    )
}

