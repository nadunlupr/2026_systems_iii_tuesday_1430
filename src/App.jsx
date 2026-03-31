import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import GroupCard from './groups/group-card'
import { Link } from 'react-router'

function App() {
  const initialState = {
    searchText: ''
  }

  const [state, setState] = useState(initialState);

  const groupList = [{ name: "Smart Group", desc: "Not so smart" },
  { name: "Stupid Group", desc: "Not so stupid" },
  { name: "Average Group", desc: "Well.. average" },
  { name: "Boring Group", desc: "Too boring to write" }];

  // function callBack(object){
  //   return(
  //     <GroupCard grpName={object.name} description={object.desc} />
  //   )
  // }

  const callBack = (group) => {
    return (
      group.name.includes(state.searchText) ?
        <GroupCard grpName={group.name} description={group.desc} /> :
        undefined
    )
  }

  return (
    <>
      <Link to="/counter">Go to Counter</Link>
      <br/>
      <Link to="/promise-demo">Go to Promise demo</Link>
      <br/>
      <Link to="/product-list">Go to fetch products</Link>
      <br/>
      <input type='text'
        onChange={({ target: { value } }) => setState({ ...state, searchText: value })} />
      {
        groupList.map(callBack)
      }
    </>
  )
}

export default App
