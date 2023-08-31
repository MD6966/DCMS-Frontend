import { AppBar, Toolbar  ,Typography, Box, styled, Table, 
  TableHead, TableCell, TableBody, TableRow,
IconButton,
} from '@mui/material'
import { makeStyles } from '@mui/styles'
import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom/dist'
import Body from './Body'
import NavBarLinks from './NavBarLinks'
import Page from '../../components/page/page'
import Nav from '../../components/AppBar/Header'
import Footer from './Footer'
import axios from 'axios'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useSnackbar } from 'notistack'
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
const useStyles = makeStyles((theme) => ({
    root:{
      minHeight:'70vh'
    }
}))
const StyledRoot = styled(Box)(({theme})=> ({
  padding: theme.spacing(10),
  marginTop:'2rem'
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
    const {enqueueSnackbar} = useSnackbar()
    const navigate = useNavigate()
    const getData = async () => {
      const res = await axios.get(`${process.env.REACT_APP_URL}/users`)
      // console.log(res.data.users)
      setData(res.data.users)
    }
    React.useEffect(()=> {
      getData()
    }, [])

    const handleEdit = (id) => {
        navigate(`/edit/${id}`)
    }
    const handleDelete = async (id) => {
      confirmAlert({
        title: 'Delete?',
        message: 'Are you sure to want to delete ?',
        buttons:[
          {
            label: 'Yes',
            onClick: async ()=>{
              try {
                const res = await axios.delete(`${process.env.REACT_APP_URL}user/delete/${id}`);
                getData(); 
                enqueueSnackbar(res.data.message, {
                  variant:'success'
                })
              } catch (error) {
                console.log(error);
              }
            }
          },
         {
          label: 'No',
         }
  
        ]
      })
    
    };
    
  return (
    <Page
    title="Welcome To Website"
    >
      <Nav />
        <StyledRoot>
          <Table>
            <StyledHeader>
              <TableRow>
              <StyledCell> Sr</StyledCell>
              <StyledCell> Name</StyledCell>
              <StyledCell> Email</StyledCell>
              <StyledCell> Contact</StyledCell>
              <StyledCell> Residence</StyledCell>
              <StyledCell> Actions</StyledCell>
              </TableRow>
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
                <TableCell>
            <Box
              sx={{display:'flex', justifyContent:'space-between'}}
              >
                <IconButton>
                <EditIcon 
                sx={{color:'#47314E'}}
                onClick={()=>handleEdit(val._id)}
                />
                </IconButton>
                <IconButton>      
                <DeleteIcon 
                sx={{color:'#47314E'}}
                onClick={()=> handleDelete(val._id)}
                
                />
                </IconButton>
              
              </Box>
            </TableCell>

                
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
