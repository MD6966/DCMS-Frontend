import { FormControl, InputLabel, MenuItem, Select, Button, Box, Grid, Hidden, Typography, TextField, AppBar, Toolbar, styled, Dialog, DialogTitle, DialogContent, DialogActions  } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import './App.css'
import Page from '../components/page/page';
import Nav from '../components/AppBar/Header'
import LockIcon from '@mui/icons-material/Lock';
import { Link, useNavigate } from 'react-router-dom';
import {userLogin} from '../store/actions/userActions'
import { useSnackbar } from 'notistack';
import { RotatingLines } from 'react-loader-spinner'
import axios from 'axios';
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
const initialValues = {
  email:'',
  password:''
}
const Login = () => {
  const isAuthenticated = useSelector((state)=> state.user.isAuthenticated)
  console.log(isAuthenticated)
  const [formValues, setFormValues] = React.useState(initialValues)
  const [isLoading, setLoading] = React.useState(false)
  const [open, setOpen] = React.useState(false)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const {enqueueSnackbar} = useSnackbar()
  const handleChange =(e) => {
    const {name, value} = e.target
    setFormValues({...formValues, [name]:value})
  }
  const [email, setEmail] = React.useState("")
  const handleChangeEmail = (e) => {
    setEmail(e.target.value)
  }
  const handleSubmitEmail =async (e) => {
    setLoading(true)
    e.preventDefault()
    // console.log(email)
    try{
        const res = await axios.post(`${process.env.REACT_APP_URL}/password/forgot`, {email:email})
        setLoading(false)
        enqueueSnackbar(res.data.message, {
          variant:'success'
        })
    }
    catch(err) {
      setLoading(false)
      enqueueSnackbar(err.response.data.errMessage, {
        variant:'error'
      })
    }
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(userLogin(formValues)).then((res)=> {
      console.log(res)
    }).catch((err)=> {
      enqueueSnackbar(err.response.data.errMessage, {
        variant:'error'
      })
    })
  }
  React.useEffect(() => {
    if (isAuthenticated) {
      navigate('/user/dashboard', {replace: true});
    }
  }, [isAuthenticated]);
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
          <form
          onSubmit={handleSubmit}
          >
          <TextField fullWidth label='Email' sx={{mb:2}} 
          name='email' value={formValues.email} onChange={handleChange}
          type='email'
          />
          <TextField fullWidth label='Password' sx={{mb:1}} 
          name='password' value={formValues.password} onChange={handleChange}
          />
              <Typography sx={{textAlign:'right', cursor:'pointer'}}
              onClick={()=> setOpen(true)}
              >
                Forgot Password?
              </Typography>
              <Box
              sx={{display:'flex', justifyContent:'center', mt:2}}
              >
              <Button variant='contained'
              sx={{height:'40px', width:'100px'}}
              type='submit'
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

       <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>
          Reset your password 
        </DialogTitle>
        <DialogContent>
          <Typography>
            Forgot your password? No problem. Just let us know your email address and we will email you a
            password reset link that will allow you to choose a new one
          </Typography>
          <form onSubmit={handleSubmitEmail}>
          <TextField type='email' fullWidth sx={{mt:2}} 
          name="email" value={email} onChange={handleChangeEmail}
          label="Email"
          placeholder='john@abc.com'
          required
          />
        <DialogActions>
        {
          isLoading ? <Button type='submit' variant='disabled'>    <RotatingLines
          strokeColor="#312236"
          strokeWidth="5"
          animationDuration="0.75"
          width="30"
          visible={isLoading}/> </Button> :
          <Button type='submit'variant='contained'
          > Email password reset link </Button>
        }
        </DialogActions>
          </form>
        </DialogContent>
       </Dialog>
  
       
  
  </Page>
  )
}

export default Login;
    