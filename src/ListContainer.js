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

  console.log(matchedAreas, "areas");
  console.log(matchedAreas[0].classicRoutes)

  let matchedType = props.areaType.reduce((acc, selectedType) => {
    matchedAreas.forEach((uniqueArea) => {
      uniqueArea.classicRoutes.forEach((route) => {
        if (route.type.includes(selectedType)) {
          acc.push(route)
        }
      })
    })

    return acc;
  }, []);

  console.log(matchedType, "types");

  

  return (
      <ul>
        {
          
      matchedType.map((type) => {
        return (
          <Description matchedType={type} 
          />
        )
      })
        
      }
      </ul>
    )
}

