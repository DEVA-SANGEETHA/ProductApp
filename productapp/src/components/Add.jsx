import { Button, TextField } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Add = () => {
    const navigate=useNavigate()
    const handleSubmit=()=>{
    navigate('/home')
    }
  return (
      <div>
          <h1>ADD</h1>
          <TextField label="title" variant='outlined'></TextField><br />
          <TextField label="image" variant='outlined'></TextField> <br />
          <TextField label="price" variant='outlined'></TextField><br />
          <TextField label="category" variant='outlined'></TextField><br />
          <Button variant='text ' onClick={handleSubmit}>SUBMIT</Button>
    </div>
  )
}

export default Add