import { AppBar, Toolbar, Box, Typography } from '@mui/material'
import React from 'react'
import NavBarLinks from '../../layouts/Landing/NavBarLinks'

const Header = () => {
  return (
    <div>
      <AppBar>
        <Toolbar>
            <Typography>
            Data Collection & Management System
            </Typography>
            <Box style={{marginLeft:'auto'}}>
            <NavBarLinks  /> 
            </Box>
        </Toolbar>
        </AppBar> 
    </div>
  )
}

export default Header
