import React, { useState } from 'react'
import { Box, Button, Card, CardActions, CardContent, Typography} from '@mui/material'
import axios from 'axios'
import { convertLength } from '@mui/material/styles/cssUtils'

const Dashboard = () => {
  const [output,setOutput]=useState([]);
 axios.get('https://jsonplaceholder.typicode.com/posts')
 .then((res)=>{
  console.log(res.data);
  setOutput(res.data);

 })
 .catch((err)=>{
  console.log(err);
 })
  return (
    
    <div>
      {output.map((val,i)=>{
        return (
          <React.Fragment>
        
    <CardContent>
      <Typography sx={{ fontSize: 30 }} color="white" variant="h4" gutterBottom>
        {val.title}
      </Typography>
      
     
      <Typography variant="h6">
       {val.body}
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">Learn More</Button>
    </CardActions>
  </React.Fragment>

        )
      })}
      
      
       
    </div>
  )
}

export default Dashboard
