import { AppBar, Box, Button, Card, CardActions, CardContent, CardHeader, TextField, Toolbar, Typography, styled } from '@mui/material'
import React from 'react'
import Page from '../components/page/page'
import { makeStyles } from '@mui/styles'
import axios from 'axios'
import { useSnackbar } from 'notistack'
import { useNavigate, useParams } from 'react-router'
const StyledRoot = styled(Box)(({theme})=> ({
  minHeight:'100vh',
  display:'flex',
  justifyContent:'center',
  alignItems:'center'
}))
const StyledHeader = styled(CardHeader)(({theme})=> ({
  background: theme.palette.primary.main,
  color:'#fff',
}))

const useStyles = makeStyles((theme)=> ({
  input: {
    marginBottom:'15px'
  }
}))
const initialValues = {
  name:'',
  email:'',
  residence:'',
  contact:'',
  behavior:''
}
const Edit = () => {
  const classes = useStyles()
  const {id} = useParams()
  const [formValues, setFormValues] = React.useState(initialValues)
  const [data, setData] = React.useState([])
  const {enqueueSnackbar} = useSnackbar()
  const navigate = useNavigate()
  const handleChange = (e) => {
    const {name, value} = e.target
    setFormValues({...formValues, [name]: value})
  }
  const getUserDetails = async () => {
    const res = await axios.get(`${process.env.REACT_APP_URL}user/get/${id}`)
    console.log(res.data.user)
    setFormValues(res.data.user)
  }
  React.useEffect(()=> {
    getUserDetails()
  }, [])
  const handleSubmit = async (e) => {
      e.preventDefault()
      try{
        const res = await axios.put(`${process.env.REACT_APP_URL}/user/update/${id}`, formValues)
       enqueueSnackbar(res.data.message, {
        variant:'success'
       })
       setFormValues(initialValues)
       navigate('/')
      }
      catch(err) {
        enqueueSnackbar(err.response.data.errMessage, {
          variant:'error'
        })
        // console.log()
      }
    }
  return (
    <Page
    title="Update"
    >
      <AppBar position='static'>
        <Toolbar>
                <Typography>
                    Edit and Save Info
                </Typography>
                </Toolbar>
      </AppBar>
    <StyledRoot>
        <Card
        sx={{width:'60vw', mt:2}}
        >
          <StyledHeader title="Update Information" /> 
          <CardContent>
            <form onSubmit={handleSubmit}>
              <TextField label="Name" fullWidth className={classes.input} required
              name="name" value={formValues.name} onChange={handleChange}
              />
              <TextField label="Email" fullWidth className={classes.input} required
              name="email" value={formValues.email} onChange={handleChange}
              />
              <TextField label="Residence" fullWidth className={classes.input}
              name="residence" value={formValues.residence} onChange={handleChange}
              />
              <TextField label="Phone" fullWidth className={classes.input}
              name="contact" value={formValues.contact} onChange={handleChange}
              />
              <TextField label="Behavior" fullWidth className={classes.input}
              name="behavior" value={formValues.behavior} onChange={handleChange}
              />
              <Box sx={{display:'flex', justifyContent:'center', mt:2}}>
            <Button variant='contained' 
            type='submit'
            sx={{height:'50px', width:'150px', fontSize:'1.15rem'}}>
              Update
            </Button>
            </Box>
            </form>
          </CardContent>
          <CardActions>
            
          </CardActions>
        </Card>
    </StyledRoot>
    </Page>
  )
}

export default Edit
