import React from 'react'
import {Box ,TextField,Button} from '@mui/material'
import { useState } from 'react'
import { authenticateSignup } from '../../../Servise api/api'
import { useNavigate } from 'react-router-dom'


const signupInitialvalue = {
   name:'',
   username:'',
   email:'',
   phone:'',
   password:''
}

function Signin() {

  const [signup , setSignup]=useState(signupInitialvalue);
  const navigate =useNavigate();




    const onInputchange = (e)=>{
          setSignup({...signup , [e.target.name]:e.target.value})
    }

    const singupUser = async () =>{
       let response =  await authenticateSignup(signup);
       console.log(response);
       if(!response) return;
        navigate('/login');
    }

    
  return (
    <Box>
      <Box><TextField variant="filled" label='Enter name' onChange={(e)=>onInputchange(e)} name='name' /></Box>
      <Box><TextField variant="filled" label='Enter username' onChange={(e)=>onInputchange(e)} name='username'/></Box>
      <Box><TextField variant="filled" label='Enter email' onChange={(e)=>onInputchange(e)} name='email'/></Box>
      <Box><TextField variant="filled" label='Enter phone no.' onChange={(e)=>onInputchange(e)} name='phone'/></Box>
      <Box><TextField variant="filled" label='Enter password'onChange={(e)=>onInputchange(e)}  name='password'/></Box>
      <Button onClick={()=>singupUser()}>Signin</Button>
    </Box>
  )
}

export default Signin
