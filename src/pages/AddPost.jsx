import React from 'react'
import AddPostPages from '../components/header/AddPostPages'
import { useParams } from 'react-router-dom'
function AddPost() {
      const { userPath } = useParams();
      console.log("param", userPath)   
  
  return (
    <div>
      <AddPostPages userPath={userPath}/>
    </div>
  )
}

export default AddPost