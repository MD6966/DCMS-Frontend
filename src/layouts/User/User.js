import { AppBar, Box, Button, IconButton, Tab, Tabs, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Outlet } from 'react-router'
import { userLogOut } from '../../store/actions/userActions'
import UserDashboard from '../../views/User/components/UserDashboard/UserDashboard'
import Profile from '../../views/User/components/Profile/Profile'
import Other from '../../views/User/components/Other/Other'
import Page3 from '../../views/User/components/Page3/Page3'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import axios from 'axios'
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
const User = () => {
  const dispatch = useDispatch()
  const [value, setValue] = React.useState(0)
  const userData = useSelector((state)=>state.user.user)
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleLogOut = () => {
    setAnchorEl(null);
    confirmAlert({
      title: 'Log Out?',
      message: 'Are you sure to want to log out ?',
      buttons:[
        {
          label: 'Yes',
          onClick:()=>{
            dispatch(userLogOut())
          }
        },
       {
        label: 'No',
       }

      ]
    })
  }
  const [data, setData] = React.useState([])
  const getUserDetails = async()=> {
    try{
      const res = await axios.get(`${process.env.REACT_APP_URL}user/get/${userData._id}`)
      setData(res.data.user)
    }
    catch(err) {
      console.log(err)
    }
  }
  React.useEffect(()=>{
    getUserDetails()
  },[value])

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
            {/* <Button variant='contained' onClick={handleLogOut}>
              Logout
            </Button> */}
            <Typography>
              {userData.name}
              <IconButton
              onClick={handleClick}
              >
                <ArrowDropDownIcon sx={{color:'#fff'}}/>
              </IconButton>
            </Typography>
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
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleLogOut}>Logout</MenuItem>
      </Menu>
      {/* <Outlet /> */}
      {value == 0 && <UserDashboard />}
      {value == 1 && <Profile data={data}/> }
      {value == 2 && <Other />}
      {value == 3 && <Page3 />}
    </div>
  )
}

export default User
