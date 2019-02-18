import React from 'react';
import Description from './Description';

export default function ListContainer (props) {

  let matchedType;

  if(props.filterTypes.length > 0) {
    let matchedAreas = Object.keys(props.areasAndRoutes).reduce((acc, area) => {
      if (props.filterAreas.includes(area)) {
       acc.push(props.areasAndRoutes[area])
      }
      return acc;
    }, [])
    matchedType = props.filterTypes.reduce((acc, selectedType) => {
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
    //if the user types an area in the search directly then execute the following:
    matchedType = Object.keys(props.areasAndRoutes).reduce((acc, area) => {
      if (props.filterAreas === area) {
       acc = props.areasAndRoutes[area].classicRoutes
      }
      return acc;
    }, [])
  }

  return (
      <ul className="climbing-route-list-container">
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

