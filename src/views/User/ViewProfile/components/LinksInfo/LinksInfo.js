import { Box, Divider, Typography } from '@mui/material'
import React from 'react'
import LanguageIcon from '@mui/icons-material/Language';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
const LinksInfo = () => {
  return (
    <div>
      <Box sx={{display:'flex', justifyContent:'space-between'}}>
        <Box>
        <LanguageIcon sx={{verticalAlign:'bottom', fontSize:'1.65rem'}}/>
        <Typography sx={{display:'inline', ml:1, fontSize:'1.05rem', fontWeight:'bold'}}>
            Website
        </Typography>
        </Box>
        <Typography>
            abcd@xyz.com
        </Typography>
      </Box>
      <Divider sx={{mt:1, mb:2}}/>
      <Box sx={{display:'flex', justifyContent:'space-between'}}>
        <Box>
        <TwitterIcon sx={{verticalAlign:'bottom', fontSize:'1.65rem'}}/>
        <Typography sx={{display:'inline', ml:1, fontSize:'1.05rem', fontWeight:'bold'}}>
            Twitter
        </Typography>
        </Box>
        <Typography>
            @test
        </Typography>
      </Box>
      <Divider sx={{mt:1, mb:2}}/>
      <Box sx={{display:'flex', justifyContent:'space-between'}}>
        <Box>
        <InstagramIcon sx={{verticalAlign:'bottom', fontSize:'1.65rem'}}/>
        <Typography sx={{display:'inline', ml:1, fontSize:'1.05rem', fontWeight:'bold'}}>
            Instagram
        </Typography>
        </Box>
        <Typography>
            @testInsta
        </Typography>
      </Box>
      <Divider sx={{mt:1, mb:2}}/>
      <Box sx={{display:'flex', justifyContent:'space-between'}}>
        <Box>
        <FacebookIcon sx={{verticalAlign:'bottom', fontSize:'1.65rem'}}/>
        <Typography sx={{display:'inline', ml:1, fontSize:'1.05rem', fontWeight:'bold'}}>
            Facebook
        </Typography>
        </Box>
        <Typography>
            @testfb
        </Typography>
      </Box>
      <Divider sx={{mt:1, mb:2}}/>
    </div>
  )
}

export default LinksInfo
