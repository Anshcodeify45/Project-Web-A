import React from 'react'
import { Box ,TextField,Button,Typography,styled } from '@mui/material'
import { useState } from 'react'
import { authenticateLogin } from '../../../Servise api/api'
import { useNavigate } from 'react-router-dom'




const Container =styled(Box)`
      width:100%;
      background-color:#ffcdd2;
      height:95.7vh;
      padding-top:30px;
`

const LoginBox = styled(Box)`
      display:flex;
      margin-top:110px;
      margin-left:370px;
      background-color:rgba(0, 0, 0, 0.8);
      box-shadow: 0 8px 10px #ff5722;
      margin-right:350px;
      height:70vh;
      widht:50%;
`
const LeftBox = styled(Box)`
    background-color:#f44336;
    border-top-right-radius:180px;
    border-bottom-right-radius:180px;
    padding:50px 100px 100px 50px;
    width:70%;
`

const RightBox= styled(Box)`
        margin-left:60px;
        color:white;
        padding-bottom:100px;
        width:70%;
        padding-top:130px;
       
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
    padding:10px 20px 10px 10px;
    background-color:#f44336;
    color:white;
    font-size:15px;
    width:86%;
    margin-right:20px;
    border-radius:15px;
`

const Imgbox = styled(Box)`
   width:100%;
`
const Img = styled('img')({
  width:'100%',
})
  


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

  const navtoSignup = () =>{
    navigate('/signin')
  }
  return (
    <Container>
      <LoginBox>
       <LeftBox>
        <Imgbox>
          <Img src="https://png.pngtree.com/png-clipart/20230101/original/pngtree-cartoon-illustration-of-kids-reading-png-image_8849944.png" alt="" />
        </Imgbox>
        <Box style={{width:"100%",display:'flex',alignItems:'center',paddingTop:100}}>
          <Box><Typography variant='p'>Don't have your account!</Typography></Box>
          <Box> <Button style={{color:'white',fontSize:15}} onClick={()=>navtoSignup()}>Join here</Button></Box>
        </Box>
        </LeftBox> 
      <RightBox>
        <Box><Typography variant='h4' color={'white'} style={{paddingLeft:80,paddingBottom:15}}>Login</Typography></Box>
      { error && <Typography style={{color:'red'}}>Invalid username or password</Typography> }
      <InputBox><Inpt variant="filled" label='Enter username' onChange={(e)=>onLoginchange(e)} name='username'/></InputBox>
      <InputBox><Inpt variant="filled" label='Enter password' onChange={(e)=>onLoginchange(e)}  name='password'/></InputBox>
      <Box><LoginBtn onClick={()=>loginUser()}>Login</LoginBtn></Box>
      </RightBox>
      </LoginBox>
    </Container>
  )
}

export default Login
