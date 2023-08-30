import { FormControl, InputLabel, MenuItem, Select, Button, Box, Grid, Hidden, Typography, TextField, AppBar, Toolbar, styled  } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import './App.css'
import Page from '../components/page/page';
import Nav from '../components/AppBar/Header'
import LockIcon from '@mui/icons-material/Lock';
import { Link } from 'react-router-dom';
const StyledRoot1 = styled(Box)(({theme})=> ({
  padding: theme.spacing(3)
}))
const StyledRoot2 = styled(Box)(({theme})=> ({
  padding: theme.spacing(3)
}))
const StyledButton = styled(Button)(({theme})=> ({
  background:'#f9ea3e',
  marginTop: theme.spacing(4),
  textTransform:'none',
  fontSize:'1.05rem',
  height:'50px',
  width:'150px',
  '&:hover':{
    background: theme.palette.secondary.main,
    color:'#fff'
}
}))
const Login = () => {
  const dispatch = useDispatch()
  const [value, setValue] = useState("")
  const handleChange =(e) => {
    setValue(e.target.value)
  }
  return (<Page
  title="Login"
  >
   <AppBar position='static'>
    <Toolbar>
      <Typography>
        Login 
      </Typography>
    </Toolbar>
   </AppBar>
    
  
    <Box className="container" >
      <Box className='neumorphism'>
     <Grid container>
      <Grid item
      className="Grid1"
      xs={6}
      sm={6}
      md={6}
      lg={6}
      xl={6} >
        <StyledRoot1>
        <Box style={{display:'flex', justifyContent:'center', alignItems:'center',}}>
                <Box style={{height:'80px', width:'80px', background:'#47314E', rotate:'45deg', boxShadow:'5px 5px 15px #4C5BB6',
                borderRadius:'10px', 
                display:'flex', justifyContent:'center', alignItems:'center'
              }}>
               <LockIcon style={{rotate:'-45deg', fontSize:'3rem', color:'#ffffff'}} />
              
              </Box>
              </Box>
            

        <Box style={{marginTop:'3rem'}}>
        <Typography sx={{mb:0.5, textAlign:'center'}}>
                <Typography fontWeight="bold" sx={{display:'inline', mr:0.5}}>
                  Welcome Back!
                </Typography>
                Please login.
              </Typography>
          <form>
          <TextField fullWidth label='Email' sx={{mb:2}} />
          <TextField fullWidth label='Password' sx={{mb:1}} />
              <Typography sx={{textAlign:'right', cursor:'pointer'}}>
                Forgot Password?
              </Typography>
              <Box
              sx={{display:'flex', justifyContent:'center', mt:2}}
              >
              <Button variant='contained'
              sx={{height:'40px', width:'100px'}}
              >
                Login
              </Button>
              </Box>
          </form>
        </Box>
        </StyledRoot1>
      </Grid>
      <Hidden smDown>
      <Grid item
      className="Grid2"
      xs={6}
      sm={6}
      md={6}
      lg={6}
      xl={6} >
        <Box className="box">
          <StyledRoot2>
        <Typography sx={{color:'#fff', textAlign:'center', fontWeight:'bold',}} variant='h5'>
           Login on the internal platform
           </Typography>
           <Typography sx={{color:'#fff', mt:2}}>
           Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
           Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
           when an unknown printer took a galley of type and scrambled it to make a type 
           specimen book. 
           It has survived not only five centuries, but also the leap into electronic 
           typesetting, remaining essentially unchanged

           </Typography>
           <Box sx={{display:'flex', justifyContent:'center'}}>
            <StyledButton
            component={Link}
            to="/register"
            >
              Register here
            </StyledButton>
           </Box>
          </StyledRoot2>
        </Box>
      </Grid>
      </Hidden>
     </Grid>
      </Box>
       </Box>  
  
       
  
  </Page>
  )
}

export default Login;
    