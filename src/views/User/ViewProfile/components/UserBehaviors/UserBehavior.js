import React from 'react'
import { Box,Typography,Divider,Card,CardHeader,CardContent } from '@mui/material'
const UserBehavior = (props) => {
    const state = props.state

  return (
    <div>
         <Box>
              <Typography variant='h4'>
                {state.name}'s behaviors
              </Typography>
              <Divider /> 
              {
                state.behavior.map((val,ind)=> {
                  return(
                    <Card sx={{background:'#e2e2e2', mt:2}} key={ind}>
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
    </div>
  )
}

export default UserBehavior
