import { useState } from 'react'
// import reactLogo from '/assets/react.svg'
import viteLogo from '/vite.svg'
import css from './App.module.css'
import Profile from './Profile/Profile'
import userData from "/src/userData";


export default function App() {
  return(
    <>
    <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
    </>
  )
}

