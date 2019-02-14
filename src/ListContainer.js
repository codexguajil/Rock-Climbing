import React from 'react';
import Description from './Description';

export default function ListContainer (props) {

  // let routeNames = props.areaAndRoutes[props.areaName].classicRoutes.map((route) => {
  //   return route.name
  // })

  let matchedAreas = Object.keys(props.areasAndRoutes).reduce((acc, area) => {
    if (props.areaName.includes(area)) {
     acc.push(props.areasAndRoutes[area])
    }
    return acc;
  }, [])

  
  console.log(matchedAreas);

  return (
      <ul>
        {
          
      
        
      }
      </ul>
    )
}

