import React from 'react';
import Search from './Search';


export default function Header (props) {

  return (
    <header className="header">
      <h1>Climb Time</h1>
      <Search search={props.search} />
    </header>
  )
}