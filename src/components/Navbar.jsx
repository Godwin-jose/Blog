

import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'


function Navbar() {
  return (
    <div>
        <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
        
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} style={{textAlign:'left', color:'yellow'}}>
          BCC News
          </Typography>
          <Button color="inherit">
          Login
            </Button>
          <Button color="inherit">
          Sign UP
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
    </div>
  )
}

export default Navbar