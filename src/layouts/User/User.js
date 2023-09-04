import { AppBar, Box, Button, Tab, Tabs, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { useDispatch } from 'react-redux'
import { Outlet } from 'react-router'
import { userLogOut } from '../../store/actions/userActions'
import UserDashboard from '../../views/User/components/UserDashboard/UserDashboard'
import Profile from '../../views/User/components/Profile/Profile'
import Other from '../../views/User/components/Other/Other'
import Page3 from '../../views/User/components/Page3/Page3'

const User = () => {
  const dispatch = useDispatch()
  const [value, setValue] = React.useState(0)
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleLogOut = () => {
    dispatch(userLogOut())
  }

  return (
    <div>
      <AppBar position='static'>
        <Toolbar
        sx={{ml:'20%', mr:'20%'}}
        >
          Logo 
          <Typography sx={{ml:2, mr:2}}>
            |
          </Typography>
          <Tabs value={value} onChange={handleChange}
           TabIndicatorProps={{
            style: {
              backgroundColor: "#fff"
            }
          }}
          >
            <Tab 
            value={0}
            label={
              <Typography sx={{color:'#fff', fontSize:'0.85rem', textTransform:'none'}}>
                Dashboard
              </Typography>
            } />
             <Tab 
            value={1}
            label={
              <Typography sx={{color:'#fff', fontSize:'0.85rem', textTransform:'none'}}>
                Profile
              </Typography>
            } />
             <Tab 
            value={2}
            label={
              <Typography sx={{color:'#fff', fontSize:'0.85rem', textTransform:'none'}}>
                Other
              </Typography>
            } />
             <Tab 
            value={3}
            label={
              <Typography sx={{color:'#fff', fontSize:'0.85rem', textTransform:'none'}}>
                Page 3
              </Typography>
            } />
          </Tabs>
          <Box sx={{ ml: 'auto' }}>
            <Button variant='contained' onClick={handleLogOut}>
              Logout
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      {/* Second App Bar */}
      <AppBar position='static' sx={{pl:'20%'}}>
        <Toolbar>
        <Typography sx={{color:'#fff', fontSize:'0.85rem', textTransform:'none'}}>
                {value==0 ? 'Dashboard':
                value==1 ? 'Profile':
                value==2 ? 'Other':
                'Page 3' 
              }
              </Typography>
        </Toolbar>
      </AppBar>
      {/* <Outlet /> */}
      {value == 0 && <UserDashboard />}
      {value == 1 && <Profile /> }
      {value == 2 && <Other />}
      {value == 3 && <Page3 />}
    </div>
  )
}

export default User
