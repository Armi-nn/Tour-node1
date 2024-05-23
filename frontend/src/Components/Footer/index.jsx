import { Box } from '@mui/material'
import React from 'react'

export default function Footer() {
  return (
    <Box sx={{
        width:'100%',
        height:'80px',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:"aqua"
    }}>
        <Box>Footer</Box>
    </Box>
  )
}
