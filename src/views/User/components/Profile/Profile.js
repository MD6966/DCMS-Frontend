import React from 'react'
import { Box, Button, Card, CardActions, CardContent, CardHeader, TextField, Typography, styled } from '@mui/material';
import Page from '../../../../components/page/page';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { useSnackbar } from 'notistack';
const StyledRoot = styled(Box)(({ theme }) => ({
    paddingLeft: theme.spacing(30),
    paddingRight: theme.spacing(30),
    paddingTop: theme.spacing(5),
    paddingBottom: theme.spacing(5),
    background:'#e2e2e2',
    minHeight:'100vh'
  }));

const Profile = (props) => {
    // console.log(props.data)
    const profileInformation = {
        name:'',
        email:''
    }
    const passwordInfo ={
        currentPassword:'',
        newPassword:'',
        confirmPassword:''
    }
    const [profileData, setProfileData] = React.useState(profileInformation)
    const [passValues, setPassValues] = React.useState(passwordInfo)
    const userData = useSelector((state)=> state.user.user)
    const {enqueueSnackbar} = useSnackbar()
    React.useEffect(() => {
        setProfileData(props.data)
    },[])
    const handleChange = (event) => {
        const { name, value } = event.target;
        setProfileData({...profileData, [name]:value})
    }
    const handleChangePass = (event) => {
        const { name, value } = event.target;
        setPassValues({...passValues, [name]:value})
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        try{
            const res = await axios.put(`${process.env.REACT_APP_URL}/user/update/${userData._id}`, profileData) 
            enqueueSnackbar(res.data.message, {
                variant:'success'
            })
        }
        catch(err) {
            console.log(err)
        }
    }
    const handlePassSubmit = async (e) => {
        e.preventDefault()
        try{
            const res = await axios.put(`${process.env.REACT_APP_URL}/password/update/${userData._id}`, passValues) 
            enqueueSnackbar(res.data.message, {
                variant:'success'
            })
            setPassValues(passwordInfo)
        }
        catch(err) {
            enqueueSnackbar(err.response.data.errMessage, {
                variant:'error'
            })
        }
    }
    return (
    <Page
    title="Profile"
    >
    <StyledRoot>
      <Card sx={{mb:2}}>
        <form onSubmit={handleSubmit}>

        <CardHeader title={
            <>
            <Typography variant='h6' fontWeight="bold">
                Profile Information
            </Typography>
            
            <Typography>
                Update your account's profile information and email address
            </Typography>
            </>
        } />
        <CardContent>
            <TextField label="Name" sx={{width:'60%', mb:2}} value={profileData.name} 
            name="name" onChange={handleChange} />
            <TextField label="Email" sx={{width:'60%',}} value={profileData.email} 
            name='email' onChange={handleChange}/>
        </CardContent>
            <CardActions>
            <Button variant='contained'
            sx={{ml:1}}
            type='submit'
            >
                Save
            </Button>
            </CardActions>
                </form>
      </Card>
      <Card sx={{mb:2}}>
        <form
        onSubmit={handlePassSubmit}
        >

        <CardHeader title={
            <>
            <Typography variant='h6' fontWeight="bold">
                Update Password
            </Typography>
            
            <Typography>
                Ensure your account is using a long, random password to stay secure
            </Typography>
            </>
        } />
        <CardContent>
            <TextField label="Current Password" sx={{width:'60%', mb:2}}
            value={passValues.currentPassword} name="currentPassword" onChange={handleChangePass}
            required
            />
            <TextField label="New Password" sx={{width:'60%', mb:2}}
            value={passValues.newPassword} name="newPassword" onChange={handleChangePass}
            required
            />
            <TextField label="Confirm Password" sx={{width:'60%',}}
            value={passValues.confirmPassword} name="confirmPassword" onChange={handleChangePass}
            required
            />
           
        </CardContent>
            <CardActions>
            <Button variant='contained'
            sx={{ml:1}}
            type='submit'
            >
                Save
            </Button>
            </CardActions>
            </form>
      </Card>
      <Card>
        <CardHeader title={
            <>
            <Typography variant='h6' fontWeight="bold">
                Delete Account
            </Typography>
            
            <Typography
            sx={{width:'60%'}}
            >
                Once your account is deleted, all of it's resources and data will be permanentaly
                deleted, Before deleting your account, please download any data or
                information that you want to retain            
            </Typography>
            </>
        } />
            <CardActions>
            <Button variant='contained'
            sx={{ml:1,background:'#fc3232',
            '&:hover': {
                background:'#c41717'
            }
        }}
            >
                Delete Account
            </Button>
            </CardActions>
      </Card>
    </StyledRoot>
    </Page>
  )
}

export default Profile
