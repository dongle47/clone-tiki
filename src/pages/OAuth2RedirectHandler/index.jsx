import { Stack, Typography,Box } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import apiAuth from '../../apis/apiAuth';
import Loading from '../../components/Loading';

function OAuth2RedirectHandler() {
    const location = useLocation()
    const [token, setToken] = useState(null)
    console.log(location)
    const getUrlParameter = (name)=> {
        name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
        var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    
        var results = regex.exec(location.search);
        return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
    };

    useEffect(()=>{
        const getToken = ()=>{
            let token = getUrlParameter('token')
            if(token){
                setToken(token)
            }
        }
        getToken()
    },[location])

    useEffect(()=>{
        const getUser = ()=>{
            let params = {
                auth_result:true,
                token:token
            }
            apiAuth.getUserBySocialToken(params)
            .then(res=>{
                console.log(res)
            })
        }
    },[token])
  return (
    <Stack>
        <Box>
            <Loading/>
            <Typography>Đang xử lý. Vui lòng chờ trong giây lát</Typography>
        </Box>
    </Stack>
  )
}


export default OAuth2RedirectHandler