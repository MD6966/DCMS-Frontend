import { AppBar, Box, Button, Toolbar } from '@mui/material'
import React from 'react'
import { useDispatch } from 'react-redux'
import { Outlet } from 'react-router'
import { userLogOut } from '../../store/actions/userActions'

const User = () => {
  const dispatch = useDispatch()
  const handleLogOut = () => {
    dispatch(userLogOut())
  }
  return (
    <div>
        <AppBar position='static'>
            <Toolbar>
                User 
                <Box sx={{ml:'auto'}}>
                  <Button variant='contained'
                  onClick={handleLogOut}
                  >
                    Logout
                  </Button>
                </Box>
            </Toolbar>
        </AppBar>
        <Outlet /> 
      
    </div>
  )
}

export default User
