import React from 'react'
import { AppBar , Box , styled , Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'


const Nav = styled(AppBar)`
    width:100%;
    height:70px;
    background-color:#f44336;
`
const Navdisplay = styled(Box)`
        display:flex;
        justify-content:space-evenly;
`
const Btns = styled(Button)`
        background-color:#f44336;
        color:white;
        padding:10px 15px 10px 15px;
        margin-top:8px;
        font-size:20px;
        font-weight:400;
`

function Navbar() {

    const navigate = useNavigate();

    const navtoHome = ()=>{
        navigate('/home');
    }

    const navtoDetails = ()=>{
        navigate('/details');
    }

    const navtoLogin = ()=>{
        navigate('/login');
    }
  return (
    <Nav>
        <Navdisplay>
        <Box><Btns onClick={()=>navtoHome()}>Home</Btns></Box>
        <Box><Btns onClick={()=>navtoDetails()}>Details</Btns></Box>
        <Box><Btns onClick={()=>navtoLogin()}>Logout</Btns></Box>
        </Navdisplay>
    </Nav>
  )
}

export default Navbar
