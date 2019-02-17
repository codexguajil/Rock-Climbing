import React from 'react';
import Description from './Description';

export default function ListContainer (props) {

  let matchedType;
  if(props.areaType.length > 0) {
    let matchedAreas = Object.keys(props.areasAndRoutes).reduce((acc, area) => {
      if (props.areaName.includes(area)) {
       acc.push(props.areasAndRoutes[area])
      }
      return acc;
    }, [])
    matchedType = props.areaType.reduce((acc, selectedType) => {
      matchedAreas.forEach((uniqueArea) => {
        uniqueArea.classicRoutes.forEach((route) => {
          if (route.type.includes(selectedType)) {
            acc.push(route)
          }
        })
      })
  
      return acc;
    }, []);
  
  } else {
    matchedType = Object.keys(props.areasAndRoutes).reduce((acc, area) => {
      if (props.areaName === area) {
       acc = props.areasAndRoutes[area].classicRoutes
      }
      return acc;
    }, [])
  }

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

