import React from 'react'
import Notes from './Notes';

export const Home = (props) => {

  const showAlert = props.showAlert
  return (
    <div>
      <Notes showAlert={showAlert}/>
    </div>
  )
}

export default Home;