import { Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import { Outlet } from 'react-router-dom/dist'

const NavBarLinks = () => {
  return (
    <div>
       <Button variant='outlined'
       sx={{color:'#fff', 
       borderColor:'#fff',
        '&:hover' : {
          
          background:'#fff',
          color:'#47314E',
        }
      }}
      component={Link}
      to='/login'
      > Login</Button>
    </div>
  )
}

export default NavBarLinks
