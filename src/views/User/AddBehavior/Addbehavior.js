import React from "react";
import Page from "../../../components/page/page";
import { useLocation, useNavigate } from "react-router";
import {
  AppBar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  TextField,
  Toolbar,
  Typography,
  styled,
} from "@mui/material";
import axios from "axios";
import { useSnackbar } from "notistack";

const StyledRoot = styled(Box)(({ theme }) => ({
  minHeight: "100vh",
  background: "#e2e2e2",
  padding: theme.spacing(10),
}));
const Addbehavior = () => {
  const initialValues = {
    firstname: "",
    lastname: "",
    email: "",
    address: "",
    city: "",
    state: "",
    zipcode: "",
    location: "",
    description: "",
  };
  const { state } = useLocation();
  const {enqueueSnackbar} = useSnackbar()
  const navigate = useNavigate()
  const [formValues, setFormValues] = React.useState(initialValues);
  const handleChange = (e) => {
    const {name, value} = e.target
    setFormValues({...formValues, [name]:value})
  };
  const handleSubmit = async (e) => {
    e.preventDefault()
   try {
    const res = await axios.put(`${process.env.REACT_APP_URL}update/behavior/${state._id}`, {behavior:formValues})
    enqueueSnackbar(res.data.message, {
        variant:'success'
    })
    setFormValues(initialValues)
    navigate('/')
   }
   catch(err) {
    console.log(err)
   }
  }
  return (
    <Page title="Add Behavior">
      <AppBar position="static">
        <Toolbar>
          <Typography>
            Add <strong> {state.name}'s </strong> behavior
          </Typography>
        </Toolbar>
      </AppBar>
      <StyledRoot>
        <Card sx={{ background: "#f7f7f7" }}>
          <CardHeader
            title={
              <Typography
                variant="h5"
                fontWeight="bold"
                textTransform="uppercase"
              >
                Add a new behavior
              </Typography>
            }
          />
          <Divider />
          <form
          onSubmit={handleSubmit}
          >

          <CardContent>
            <Grid container spacing={4} sx={{ p: 2 }}>
              <Grid item xs={12} md={6} lg={6}>
                  <TextField
                  label="First Name"
                  fullWidth
                  name="firstname"
                  value={formValues.firstname}
                  onChange={handleChange}
                  />
              </Grid>
              <Grid item xs={12} md={6} lg={6}>
                <TextField
                  label="Last Name"
                  fullWidth
                  name="lastname"
                  value={formValues.lastname}
                  onChange={handleChange}
                  />
              </Grid>
              <Grid item xs={12} md={12} lg={12}>
                <TextField
                  label="Email"
                  fullWidth
                  placeholder="example@example.com"
                  name="email"
                  value={formValues.email}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} md={12} lg={12}>
                <TextField
                  label="Address"
                  fullWidth
                  helperText="Street Address"
                  name="address"
                  value={formValues.address}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} md={12} lg={12}>
                <TextField
                  label="Address Line 2"
                  fullWidth
                  helperText="Street Address Line 2"
                  />
              </Grid>
              <Grid item xs={12} md={6} lg={6}>
                <TextField
                  label="City"
                  fullWidth
                  name="city"
                  value={formValues.city}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} md={6} lg={6}>
                <TextField
                  label="State / Province"
                  fullWidth
                  name="state"
                  value={formValues.state}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} md={12} lg={12}>
                <TextField
                  label="Postal / Zipcode"
                  fullWidth
                  name="zipcode"
                  value={formValues.zipcode}
                  onChange={handleChange}
                  />
              </Grid>
              <Grid item xs={12} md={12} lg={12}>
                <TextField
                  label="Location"
                  fullWidth
                  helperText="Location of action / behavior"
                  name="location"
                  value={formValues.location}
                  onChange={handleChange}
                  />
              </Grid>
              <Grid item xs={12} md={12} lg={12}>
                <TextField
                  label="Description of action / behavior"
                  fullWidth
                  multiline
                  rows={8}
                  name="description"
                  value={formValues.description}
                  onChange={handleChange}
                  />
              </Grid>
            </Grid>
          </CardContent>
          {/* <CardActions> */}
          <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
            <Button
              sx={{ mr: 4, mb: 2, width: "100px", height: "40px" }}
              variant="contained"
                type="submit"
            >
              Submit
            </Button>
          </Box>
              </form>
          {/* </CardActions> */}
        </Card>
      </StyledRoot>
    </Page>
  );
};

export default Addbehavior;
