import { AppBar, Toolbar  ,Typography, Box, styled, Table, TableHead, TableCell, TableBody, TableRow } from '@mui/material'
import { makeStyles } from '@mui/styles'
import React from 'react'
import { Outlet } from 'react-router-dom/dist'
import Body from './Body'
import NavBarLinks from './NavBarLinks'
import Page from '../../components/page/page'
import Nav from '../../components/AppBar/Header'
import Footer from './Footer'
import axios from 'axios'
const useStyles = makeStyles((theme) => ({
    root:{
      minHeight:'70vh'
    }
}))
const StyledRoot = styled(Box)(({theme})=> ({
  padding: theme.spacing(10)
}))
const StyledHeader = styled(TableHead)(({theme})=> ({
  background: theme.palette.primary.main
}))
const StyledCell = styled(TableCell)(({theme})=> ({
  color:'#fff'
}))
const Landing = () => {
    const classes = useStyles()
    const [data, setData] = React.useState([])
    const getData = async () => {
      const res = await axios.get(`${process.env.REACT_APP_URL}/users`)
      console.log(res.data.users)
      setData(res.data.users)
    }
    React.useEffect(()=> {
      getData()
    }, [])
    
  return (
    <Page
    title="Welcome To Website"
    >
      <Nav />
        <StyledRoot>
          <Table>
            <StyledHeader>
              <StyledCell> Sr</StyledCell>
              <StyledCell> Name</StyledCell>
              <StyledCell> Email</StyledCell>
              <StyledCell> Contact</StyledCell>
              <StyledCell> Residence</StyledCell>
              <StyledCell> Actions</StyledCell>
            </StyledHeader>
            <TableBody>
              {
                data.map((val,ind)=> {
                  return(
              <TableRow>
                <TableCell>{ind+1}</TableCell>
                <TableCell>{val.name}</TableCell>
                <TableCell>{val.email}</TableCell>
                <TableCell>{val.contact}</TableCell>
                <TableCell>{val.residence}</TableCell>

                
              </TableRow>
                  )
                })
              }
            </TableBody>
            </Table> 
        </StyledRoot>
        {/* <Footer />  */}
    </Page>
  )
}

export default Landing
