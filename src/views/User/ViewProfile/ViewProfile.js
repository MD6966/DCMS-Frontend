import React from 'react'
import Page from '../../../components/page/page'
import { Box, Stack, TableBody, TableCell, TableRow, styled } from '@mui/material'
import ProfileInfo from './components/ProfileInfo/ProfileInfo'
import PersonalInfo from './components/PersonalInfo/PersonalInfo'
import LinksInfo from './components/LinksInfo/LinksInfo'
import UserBehavior from './components/UserBehaviors/UserBehavior'
import { useLocation } from 'react-router'

const StyledRoot = styled(Box)(({theme})=> ({
    minHeight:'100vh',
    background:'#e2e2e2',
    padding: theme.spacing(10)
}))
const StyledBox1 = styled(Box)(({theme})=> ({
    minHeight:'50vh',
    background:'#fff',
    padding: theme.spacing(2),
    borderRadius: theme.spacing(1),
    display:'flex',
    justifyContent:'center',
    alignItems:'center'
}))
const StyledBox2 = styled(Box)(({theme})=> ({
    minHeight:'30vh',
    background:'#fff',
    padding: theme.spacing(2),
    borderRadius: theme.spacing(1),
}))
const StyledBox3 = styled(Box)(({theme})=> ({
    height:'30vh',
    background:'#fff',
    padding: theme.spacing(2),
    borderRadius: theme.spacing(1),
}))
const StyledBox4 = styled(Box)(({theme})=> ({
    minHeight:'60vh',
    background:'#fff',
    padding: theme.spacing(2),
    borderRadius: theme.spacing(1),
}))
const ViewProfile = () => {
    const {state} = useLocation()
  return (
    <Page
    title="View Profile"
    >
        <StyledRoot>
            <Stack direction="row" spacing={3}>
                <StyledBox1 flex={1} sx={{background:'#fff'}}>
                    <ProfileInfo state={state}/>
                </StyledBox1>
                <StyledBox2 flex={2} >
                    <PersonalInfo state={state}/>
                </StyledBox2>
            </Stack>
            <Stack direction="row" spacing={3} sx={{mt:2}}>
            <StyledBox3 flex={1}>
                    <LinksInfo state={state}/>
            </StyledBox3>
            <StyledBox4 sx={{background:'#fff'}} flex={2}>
                <UserBehavior state={state}/>
            </StyledBox4>
            </Stack>
        </StyledRoot>
    </Page>
  )
}

export default ViewProfile
