import React from 'react'

export default function NavbarLayout() {
  return (
    <div className='flex justify-center'>
      <ul className='flex border-2 bg-orange-300'>
        <li>Pokedex</li>
        <li>Favorites</li>
        <li>About</li>
        <input type="text" placeholder='serach'/>
      </ul>
    </div>
  )
}
