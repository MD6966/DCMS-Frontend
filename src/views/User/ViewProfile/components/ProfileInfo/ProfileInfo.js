import { Avatar, Box, Button, Stack, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router'

const ProfileInfo = (props) => {
  const state = props.state
  const navigate = useNavigate()
  const postData = (data) => {
    console.log(data)
    navigate(`/add-behavior/${data._id}`, {state:data})
  }
  return (
    <Box>
        <Box
        sx={{
            display:'flex',
            justifyContent:'center',
            alignItems:'center'
        }}
        >
      <Avatar 
      sx={{height:'100px', width:'100px'}}
      src="/assets/images/user.png"
      />
      </Box>
      <Typography textAlign="center" variant='h4' fontWeight="bold">
        {state.name}
      </Typography>
      <Typography textAlign="center" variant='h6'>
      123 Main Street NY 10001
      </Typography>
      <Stack direction="row">
      <Button variant='outlined' sx={{mt:2}}>
        Follow
      </Button>
      <Button variant='contained' sx={{ml:2, mt:2}}
      onClick={() => postData(state)}
      >
        Add Behavior 
      </Button>
      </Stack>
   
    </Box>
  )
}

export default ProfileInfo
