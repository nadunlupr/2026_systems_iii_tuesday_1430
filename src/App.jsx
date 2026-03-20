import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import GroupCard from './groups/group-card'
import { Link } from 'react-router'

function App() {
  const [count, setCount] = useState(0)

  const groupList = [{name: "Smart Group", desc: "Not so smart"}, 
    {name: "Stupid Group", desc: "Not so stupid"},
    {name: "Average Group", desc: "Well.. average"}, 
    {name: "Boring Group", desc: "Too boring to write"}];

  // function callBack(object){
  //   return(
  //     <GroupCard grpName={object.name} description={object.desc} />
  //   )
  // }

  const callBack = (group) => {
    return(
      <GroupCard grpName={group.name} description={group.desc} />
    )
  }

  return (
    <>
      <Link to="/counter">Go to Counter</Link>
      
      {
        groupList.map(callBack)
      }
    </>
  )
}

export default App
