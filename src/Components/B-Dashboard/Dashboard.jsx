import React from 'react';
import { MiniCards } from './MiniCards';
import { Outlet } from 'react-router-dom';

export default function Dashboard(api) {
  console.log("Dashboard: viaja?", api)

  let valorSearch = "algo3";
  const arrayPrueba = [
    {
      "name": 'algo',
      "name": 'algo2',
      "name": 'algo3',
    }
  ]

  return (

    <main>
      {arrayPrueba.map((item, index) => (
        item.name.includes(valorSearch) ?
          <MiniCards
            key={index}
            name={item.name}
          /> : "vacio"
      ))}
      <div className="">
          {/* {isLoading && (
          <p>Loading...</p>
        )} */}

          <Outlet />
        </div>
    </main>
  );
}
