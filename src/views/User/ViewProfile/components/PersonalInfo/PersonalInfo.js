import { Box, Divider, Stack, Typography } from '@mui/material'
import React from 'react'

const PersonalInfo = (props) => {
    const state = props.state
  return (
    <div>
      <Stack direction="row" spacing={8}>
        <Box>
            <Typography fontWeight="bold">
                Name
            </Typography>
        </Box>
        <Box>
            {state.name}
        </Box>
      </Stack>
      <Divider sx={{mb:3}}/>
      <Stack direction="row" spacing={8}>
        <Box>
            <Typography fontWeight="bold">
                Email
            </Typography>
        </Box>
        <Box>
            {state.email}
        </Box>
      </Stack>
      <Divider sx={{mb:3}}/>
      <Stack direction="row" spacing={8}>
        <Box>
            <Typography fontWeight="bold">
                Phone
            </Typography>
        </Box>
        <Box>
            +971-123-456-789
        </Box>
      </Stack>
      <Divider sx={{mb:3}}/>
      <Stack direction="row" spacing={8}>
        <Box>
            <Typography fontWeight="bold">
                Mobile
            </Typography>
        </Box>
        <Box>
        +971-123-456-789
        </Box>
      </Stack>
      <Divider sx={{mb:3}}/>
      <Stack direction="row" spacing={8}>
        <Box>
            <Typography fontWeight="bold">
                Address
            </Typography>
        </Box>
        <Box>
        123 Main Street NY 10001
        </Box>
      </Stack>
      <Divider sx={{mb:3}}/>
    </div>
  )
}

export default PersonalInfo
