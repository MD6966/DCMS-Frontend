import { Avatar, Box, Stack, Typography, styled, Button, Tooltip, Card, CardHeader, Divider, CardContent } from '@mui/material';
import React, { useState, useRef } from 'react';
import { useSelector } from 'react-redux';
import Page from '../../../../components/page/page';
import CameraAltIcon from '@mui/icons-material/CameraAlt';

const StyledRoot = styled(Box)(({ theme }) => ({
  background:'#e2e2e2',
  minHeight:'100vh'
}));

const StyledBox = styled(Box)(({ theme }) => ({
  // padding: theme.spacing(5),
  // display: 'flex',
  // justifyContent: 'center',
  // position: 'relative',
   paddingLeft: theme.spacing(30),
  paddingRight: theme.spacing(30),
  paddingTop: theme.spacing(5),
}));
const StyledBox2 = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  position: 'relative',
}));

const StyledAvatar = styled(Avatar)(({ theme }) => ({
  height: '100px',
  width: '100px',
  transition: 'filter 0.3s ease-in-out',
  '&:hover': {
    filter: 'brightness(0.5)',
    cursor: 'pointer',
    zIndex: 1,
  },
}));

const IconContainer = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  zIndex: 3,
}));

const UserDashboard = () => {
  const userData = useSelector((state) => state.user.user);
  const [hovered, setHovered] = useState(false);
  const fileInputRef = useRef(null);

  const handleAvatarClick = () => {
    // Trigger the hidden file input when the avatar is clicked
    fileInputRef.current.click();
  };

  const handleFileSelect = (event) => {
    const selectedFile = event.target.files[0];
    // Perform any upload or processing logic here with the selected file
  };

  return (
    <Page title="User Dashboard">
      <StyledRoot>
        {/* <Typography variant="h4">
          Hi <strong>{userData.name} !</strong>
        </Typography>
        <StyledBox>
          <Stack>
            <Tooltip title="Upload Image">
              <StyledAvatar
                src="/assets/images/user.png"
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                onClick={handleAvatarClick} // Trigger file input
              />
            </Tooltip>
            
          </Stack>
          <input
            type="file"
            accept=".jpg,.jpeg,.png"
            ref={fileInputRef}
            style={{ display: 'none' }}
            onChange={handleFileSelect}
          />
        </StyledBox>
        <StyledBox2>
        <Stack>
            <Typography sx={{fontWeight:'bold'}} variant='h4'>
              Name: 
              <Typography sx={{display:'inline', ml:1}} variant='h4'>
              {userData.name}
              </Typography>
            </Typography>
            <Typography sx={{fontWeight:'bold', mt:1}} variant='h4'>
              Email: 
              <Typography sx={{display:'inline', ml:1}} variant='h4'>
              {userData.email}
              </Typography>
            </Typography>
            <Typography sx={{fontWeight:'bold', mt:1}} variant='h4'>
              Contact: 
              <Typography sx={{display:'inline', ml:1}} variant='h4'>
              {userData.contact}
              </Typography>
            </Typography>
            <Typography sx={{fontWeight:'bold', mt:1}} variant='h4'>
              Residence: 
              <Typography sx={{display:'inline', ml:1}} variant='h4'>
              {userData.residence}
              </Typography>
            </Typography>
            <Button
            variant="contained"
            sx={{mt:2}}
            >
              Update information
            </Button>
            </Stack>
        </StyledBox2> */}
        <StyledBox>

        <Card sx={{background:'#f7f7f7'}}>
          <CardHeader title={
            <Typography
            
            >
              You're now logged in as: <strong>{userData.name}</strong>
            </Typography>
          } />
        </Card>
          </StyledBox>
          <Box sx={{p:2}}>
          <Stack direction="row" spacing={2} sx={{mt:3}}>
            <Box flex={1} sx={{background:'#fff', height:'40vh', p:3}}>
              This is Box 1
            </Box>
            <Box flex={3} sx={{background:'#fff', minHeight:'100vh', p:3}}>
              <Typography variant='h4'>
                Your behaviors
              </Typography>
              <Divider /> 
              {
                userData.behavior.map((val,ind)=> {
                  return(
                    <Card sx={{background:'#e2e2e2', mt:2}}>
                    <CardHeader title={
                    <Typography>
                      Name: <strong> {val.firstname}</strong>
                    </Typography>
                    }/>
                    <CardContent>
                      <Typography>
                    <strong>Email: </strong> {val.email}
                      </Typography>
                      <Typography>
                    <strong>Location: </strong> {val.location}
                      </Typography>
                      <Typography>
                    <strong>Address: </strong> {val.address}
                      </Typography>
                      <Typography>
                    <strong>Description: </strong> {val.description}
                      </Typography>

                    </CardContent>
                  </Card>
                  )
                })
              }
            
            </Box>
            <Box flex={1} sx={{background:'#fff',height:'40vh', p:3}}>
              This is Box 3
            </Box>
          </Stack>
          </Box>
      </StyledRoot>
      
    </Page>
  );
};

export default UserDashboard;
