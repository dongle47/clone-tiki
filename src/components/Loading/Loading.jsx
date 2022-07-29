import React from 'react'
import {CircularProgress}  from "@mui/material"

function Loading() {

  return (
    <CircularProgress 
        sx={{
            color:"#1890ff",
            mr:"4px"
        }}
        size={20}
        thickness={3}
        />

  )
}

export default Loading