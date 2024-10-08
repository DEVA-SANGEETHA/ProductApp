import React from 'react'
import { AppBar, Toolbar, Button,Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
      <div>
          <AppBar>
              <Toolbar>
                  
                  <Typography variant="h6" sx={{ flexGrow:1}} >
                    PRODUCT
                  </Typography>
                  <Link to='/add'>
                      <Button color="error">Add</Button>
                  </Link>
                  <Link to='/home'>
                      <Button color="error">Home</Button></Link>
                  
            
         
              </Toolbar>
          </AppBar>
    </div>
  )
}

export default Navbar