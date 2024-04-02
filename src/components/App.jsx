import { useState } from 'react'
import viteLogo from '/vite.svg'
import css from './App.module.css'
import Profile from './Profile/Profile'
import transactions from '/src/transactions.json'
import friends from "/src/friends.json"
import userData from "/src/userData.json"
import FriendList from './FriendList/FriendList'
import TransactionHistory from './TransactionHistory/TransactionHistory'


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
      <FriendList friends ={friends}/>
      <TransactionHistory items={transactions} />
    </>
  )
}

