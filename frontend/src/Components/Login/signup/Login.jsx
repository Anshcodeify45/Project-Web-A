import React from 'react'
import { Box ,TextField,Button,Typography } from '@mui/material'
import { useState } from 'react'
import { authenticateLogin } from '../../../Servise api/api'
import { useNavigate } from 'react-router-dom'


const loginInitialvalues = {
  username:'',
  password:''
}


function Login() {

  const [login,setLogin]=useState(loginInitialvalues)
  const navigate =useNavigate();
  const [error,setError]=useState(false);




  const onLoginchange = (e) =>{
      setLogin({ ...login , [e.target.name]:e.target.value});
  }

  const loginUser = async() => {
   let response = await authenticateLogin(login);
   console.log(response);
   if(response.status === 200){
        navigate('/home')
   } else{
      setError(true);
   }
  }
  return (
    <Box>
        { error && <Typography style={{color:'red'}}>Invalid username or password</Typography> }
      <Box><TextField variant="filled" label='Enter username' onChange={(e)=>onLoginchange(e)} name='username'/></Box>
      <Box><TextField variant="filled" label='Enter password' onChange={(e)=>onLoginchange(e)}  name='password'/></Box>
      <Box><Button onClick={()=>loginUser()}>Login</Button></Box>
    </Box>
  )
}

export default Login
