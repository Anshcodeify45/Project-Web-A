import React from 'react'
import { AppBar , Box , styled , Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'


const Nav = styled(AppBar)`
    width:100%;
    height:70px;
    background-color:#212121;
`
const Navdisplay = styled(Box)`
        display:flex;
        justify-content:space-evenly;
`
        const Btns =styled(Button)`
        background-color:#e53935;
        margin-top:12px;
        color:#fafafa;
        padding:10px 20px 10px 20px;
        border-radius:10px;
        font-size:15px;
        font-weight:550;
        &:hover {
        background-color: #fafafa;
        color: lightgray;
        letter-spacing: 0.25em;
        box-shadow: 0 0 35px #e53935;
        color:#e53935;

        }
        `

        const Logo= styled(Box)`
         width:50%;
        `
        const LogoImg= styled('img')({
            width:'20%',
            paddingLeft:10,
            marginTop:12,
            cursor:'pointer',
        })
         
        



function Navbar() {

    const navigate = useNavigate();

    const navtoHome = ()=>{
        navigate('/home');
    }

    const navtoDetails = ()=>{
        navigate('/audit');
    }

    const navtoLogin = ()=>{
        navigate('/login');
    }
  return (
    <Nav>
        <Navdisplay>
            <Logo>
                <LogoImg src="https://seeklogo.com/images/M/mathnasium-logo-941989419C-seeklogo.com.png" alt="" />
            </Logo>
            
            <Box><Btns onClick={()=>navtoHome()}>Home</Btns></Box>
            <Box><Btns onClick={()=>navtoDetails()}>Details</Btns></Box>
            <Box><Btns onClick={()=>navtoLogin()}>Logout</Btns></Box>


        </Navdisplay>
    </Nav>
  )
}

export default Navbar
