import React, { useState } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import axios from 'axios'

const Home = () => {
    var [user, setUser] = useState([])
    axios.get("https://fakestoreapi.com/products")
        .then((response) => {
            console.log(response)
            setUser(response.data);
    })
  return (
      <div>
          <Grid container spacing={2}>
              {user.map((val) => {
                  return(
              <Grid item xs={12} sm={6} md={4}>
                  
              
          <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                  sx={{ height: 140 }}
                  image={val.image}
                  title={val.title}
              />
              <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                                      {val.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                     Category: {val.category}
                  </Typography>
                  <Typography variant='h6'>Price{val.price}

                  </Typography>
              </CardContent>
              
                  </Card>
                      </Grid>
                  )
              })}
          </Grid>

          
      </div>
  )
}

export default Home