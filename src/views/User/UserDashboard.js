import { Box,Typography,styled } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import Page from '../../components/page/page'

const StyledRoot = styled(Box)(({theme})=> ({
  padding: theme.spacing(5)
}))
const UserDashboard = () => {
  const userData = useSelector((state)=> state.user.user)
  // console.log(userData)
  return (
    <Page
    title="User Dashboard"
    >
      <StyledRoot>
        <Typography variant='h4'>
          Hi <strong>{userData.name} !</strong>
        </Typography>
      </StyledRoot>
    </Page>
  )
}

export default UserDashboard
