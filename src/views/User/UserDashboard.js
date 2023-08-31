import { Avatar, Box, Stack, Typography, styled, Button, Tooltip } from '@mui/material';
import React, { useState, useRef } from 'react';
import { useSelector } from 'react-redux';
import Page from '../../components/page/page';
import CameraAltIcon from '@mui/icons-material/CameraAlt';

const StyledRoot = styled(Box)(({ theme }) => ({
  padding: theme.spacing(5),
}));

const StyledBox = styled(Box)(({ theme }) => ({
  padding: theme.spacing(5),
  display: 'flex',
  justifyContent: 'center',
  position: 'relative',
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
        <Typography variant="h4">
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
          {/* Hidden file input */}
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
        </StyledBox2>
      </StyledRoot>
    </Page>
  );
};

export default UserDashboard;
