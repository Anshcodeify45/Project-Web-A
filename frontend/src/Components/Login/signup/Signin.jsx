import React from 'react'
import {Box ,TextField,Button ,styled,Typography} from '@mui/material'
import { useState } from 'react'
import { authenticateSignup } from '../../../Servise api/api'
import { useNavigate } from 'react-router-dom'

const Container =styled(Box)`
      width:100%;
      background-color:#ffcdd2;
      height:95.7vh;
      padding-top:30px;
`


const SigninBox = styled(Box)`
      display:flex;
      margin-top:110px;
      margin-left:370px;
      background-color:rgba(0, 0, 0, 0.8);
      box-shadow: 0 8px 10px #ff5722;
      margin-right:350px;
      height:70vh;
`
const LeftBox = styled(Box)`
    background-color:#f44336;
    border-top-right-radius:180px;
    border-bottom-right-radius:180px;
    padding:270px 180px 180px 70px;
`
const RightBox= styled(Box)`
        margin-left:60px;
        text-align:center;
        color:white;
        padding-bottom:100px;
        width:70%;
       
`

const InputBox = styled(Box)`
    padding-bottom:15px;
    width:85%; 
    padding-right:70px;  
`
const Inpt = styled(TextField)`
    width:100%;
`
const LoginBtn =  styled(Button)`
    padding:10px 30px 10px 30px;
    background-color:#f44336;
    color:white;
    font-size:15px;
`


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
    <Container>
       <SigninBox>
        <LeftBox>
            <Box style={{color:'white'}}><h1>Hello</h1></Box> 
            <Box><Typography variant="h5"style={{color:'white'}}>New user! Sign up here...</Typography></Box>
        </LeftBox>
       <RightBox>
      <Box><h1>Sign in</h1></Box>
      <InputBox><Inpt variant="filled" label='Enter name' onChange={(e)=>onInputchange(e)} name='name' /></InputBox>
      <InputBox><Inpt variant="filled" label='Enter username' onChange={(e)=>onInputchange(e)} name='username'/></InputBox>
      <InputBox><Inpt variant="filled" label='Enter email' onChange={(e)=>onInputchange(e)} name='email'/></InputBox>
      <InputBox><Inpt variant="filled" label='Enter phone no.' onChange={(e)=>onInputchange(e)} name='phone'/></InputBox>
      <InputBox><Inpt variant="filled" label='Enter password'onChange={(e)=>onInputchange(e)}  name='password'/></InputBox>
      <InputBox><LoginBtn onClick={()=>singupUser()}>Sign in</LoginBtn></InputBox>
      </RightBox>
      </SigninBox>
    </Container>
  )
}

export default Signin
