import { AppBar, Toolbar  ,Typography, Box, styled, Table, 
  TableHead, TableCell, TableBody, TableRow,
IconButton,InputLabel,Input,InputAdornment,
TextField,FormControl
} from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
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
    const [searchInput, setSearchInput] = React.useState("");
    const [filteredData, setFilteredData] = React.useState(data);
    const navigate = useNavigate()
    const getData = async () => {
      const res = await axios.get(`${process.env.REACT_APP_URL}/users`)
      // console.log(res.data.users)
      setData(res.data.users)
      setFilteredData(res.data.users);
    }
    React.useEffect(()=> {
      getData()
    }, [])
    const handleChangeSearch = (e) => {
      const inputValue = e.target.value.toLowerCase();
    
      const filtered = data.filter((val) => {
        return (
          val.name.toLowerCase().includes(inputValue) ||
          val.email.toLowerCase().includes(inputValue) 
        );
      });
    
      setSearchInput(inputValue);
      setFilteredData(filtered);
    };
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
    const postData = (data) => {
      console.log(data)
      navigate('/add-behavior', {state:data})
    }
  return (
    <Page
    title="Welcome To Website"
    >
      <Nav />
        <StyledRoot>
        <FormControl
        sx={{width:'40%', mb:2, float:'right'}}
        >
          <InputLabel> Search Users </InputLabel>
          <Input 
           value={searchInput}
           onChange={(e) => handleChangeSearch(e)}
          endAdornment={
            <InputAdornment position='end'>
            <SearchIcon />
            </InputAdornment>
          }
          
          
          />
        </FormControl>
          <Table
          
          >
            <StyledHeader>
              <TableRow>
              <StyledCell> Sr</StyledCell>
              <StyledCell> Name</StyledCell>
              <StyledCell> Email</StyledCell>
              <StyledCell> Actions</StyledCell>
              </TableRow>
            </StyledHeader>
            <TableBody>
    {filteredData.length === 0 ? (
      <TableRow>
        <TableCell colSpan={6} align="center">
          No data found
        </TableCell>
      </TableRow>
    ) : (
      filteredData.map((val, ind) => {
        return (
          <TableRow key={val._id}
          sx={{cursor:'pointer'}}
          >
            <TableCell>{ind+1}</TableCell>
                <TableCell  onClick = {() => postData(val)}>{val.name}</TableCell>
                <TableCell  onClick = {() => postData(val)}>{val.email}</TableCell>
                <TableCell>
            <Box
              sx={{display:'flex',}}
              >
                <IconButton>
                <EditIcon 
                sx={{color:'#47314E'}}
                onClick={()=>handleEdit(val._id)}
                />
                </IconButton>
                <IconButton>      
                <DeleteIcon 
                sx={{color:'#47314E',ml:2}}
                onClick={()=> handleDelete(val._id)}
                
                />
                </IconButton>
              
              </Box>
            </TableCell>
          </TableRow>
        );
      })
    )}
  </TableBody>
            </Table> 
        </StyledRoot>
        {/* <Footer />  */}
    </Page>
  )
}

export default Landing
