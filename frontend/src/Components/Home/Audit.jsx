import React from 'react'
import { Box , styled ,ToggleButtonGroup,ToggleButton,Typography , Select ,MenuItem , Button} from '@mui/material'
import { useState } from 'react'
import Navbar from '../Nav/Navbar'


const Container = styled(Box)`
      width:100%;
      background-color:#ffcdd2;
      height:190vh;
      padding-top:30px;
`

const Header = styled(Box)`
    margin-top:130px;
    text-align:center;
    padding-top:80px;

`
const LocalBox = styled(Box)`
        padding-bottom:20px;
`
const ListBox = styled(Box)`
        background-color:#eeeeee;
        margin-left:250px;
        margin-right:250px;
        paddin-bottom:150px;
`

const CustomToggleButton = styled(ToggleButton)(({ theme }) => ({
    color: 'black',
    '&.Mui-selected': {
      backgroundColor: '#f44336',
      color: 'white',
    },
    '&.Mui-selected:hover': {
      backgroundColor: 'darkred',
    },
  }));

  const ImgPoster = styled(Box)`
        width:100%;
        margin-left:100px;
  `
  const Poster = styled('img')({
     width:'80%;',
     height:'50vh'
  })

  const DataBox = styled(Box)`
        
        text-align:center;
        height:50vh;
        padding-top:55px;
        border:2px;
        width:87%;
        margin-left:13px;
  `
  const DataBox2 = styled(Box)`
        
            text-align:center;
            height:50vh;
            border:2px;
            width:87%;
            margin-left:13px;
`


  const DataList = styled(Box)`
        display:flex;
        margin-left:100px;
        width:80%;
        background-color:#fafafa;
        
  `

  const Para = styled(Typography)`
        width:100%;
        text-align:start;
        font-weight:400;
        color:#616161;
  `


  const Btns =styled(Button)`
        background-color:#e53935;
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
  const SpclBtns = styled(Button)`
        background-color:#ffeb3b;
        color:#212121;
        padding:0 20px 0 20px;
        border-radius:10px;
        margin-bottom:28px;
        margin-top:25px;

  `



function Audit() {


    const [alignment, setAlignment] = useState('6 months');

    const handleAlignment = (event, newAlignment) => {
      if (newAlignment !== null) {
        setAlignment(newAlignment);
      }
    };



  return (
    <Container>
        <Box>
            <Navbar/>
        </Box>
        <ListBox style={{paddingBottom:50}}>
                    <Header>
                    <LocalBox>
                        <Typography style={{fontSize:15,fontWeight:600}}>Mathnesium of Album</Typography>
                    </LocalBox>
                    <LocalBox>
                        <Typography style={{fontSize:28,fontWeight:600}}>Enrollment Options</Typography>
                    </LocalBox>
                    <LocalBox style={{width:"100%"}}>
                    <ToggleButtonGroup 
                          value={alignment}
                          exclusive
                          onChange={handleAlignment}
                          aria-label="text alignment"
                          
                    >
                    <CustomToggleButton value="6 months"style={{borderColor:'red' ,padding:'2px 40px 2px 40px',color:"#263238"}}>6 months</CustomToggleButton>
                    <CustomToggleButton value="12 months" style={{borderColor:'red', padding:'2px 40px 2px 40px',color:"#263238"}}>12 months</CustomToggleButton>
                    <CustomToggleButton value="private 1-1" style={{borderColor:'red',  padding:'2px 40px 2px 40px',color:"#263238"}}>private 1-1</CustomToggleButton>

                    </ToggleButtonGroup>
                    </LocalBox>
                    <LocalBox>
                        <Typography style={{fontSize:13,color:"#455a64",fontWeight:600}}>kashfsu  sduidk;ad djnskj</Typography>
                    </LocalBox>
                    <LocalBox style={{display:'flex',marginLeft:380,alignItems:'center'}}>
                        <Box><Typography style={{paddingRight:10,color:"#455a64"}}>Seasons Count</Typography></Box>
                        <Box>
                            
                            <Select  style={{padding:'0 30px 0 30px',backgroundColor:'#f5f5f5',border:'none'}}>
                            <MenuItem value={3} label="3 seasons" >3 seasons</MenuItem>
                            <MenuItem value={4} label="4 seasons">4 seasons</MenuItem>
                            <MenuItem value={5} label="5 seasons">5 seasons</MenuItem>
                            <MenuItem value={6} label="6 seasons">6 seasons</MenuItem>
                            </Select>
                            
                            </Box>
                    </LocalBox>
                </Header>
        
        <Box>

            <Box>
               
                    <ImgPoster>
                        <Poster src="https://blog.mathnasium.com/wp-content/uploads/2020/09/NA_2020_MathnasiumBrand_Zoom_Backgrounds_CharacterswithSun.png" alt="" />
                    </ImgPoster>


                <DataList>
                    <Box>
                    <DataBox style={{paddingRight:10}}>
                    <Box>
                        <Typography variant='h5' style={{color:"#f44336",paddingBottom:35}}>ESSENTIAL</Typography>
                    </Box>
                    <Box><Typography style={{color:"#263238",paddingBottom:30 , fontSize:20}}>$225<span style={{color:"#37474f",fontSize:10}}>/mo</span></Typography></Box>
                    <Box>
                        <Btns>Get Started</Btns>
                    </Box>
                    <Box style={{padding:20, display:'flex',alignItems:'center',justifyContent:"flex-start"}}>
                        <Para variant='p' style={{margin:0}}>Personalized Learning Plan in-center @Home Face to Fcae Tutoring Up to Algebra
                             Monthly Progress Report Guardian Portal Acess 45 minutes/session</Para>
                    </Box>
                    </DataBox>
                
                    </Box>


                <Box>
                   <DataBox2 style={{paddingRight:10}}>
                    <Box>
                          <SpclBtns>free sale</SpclBtns>
                    </Box>
                    <Box>
                        <Typography variant='h5' style={{color:"#f44336",paddingBottom:35}}>ESSENTIAL</Typography>
                    </Box>
                    <Box><Typography style={{color:"#263238",paddingBottom:30 , fontSize:20}}>$225<span style={{color:"#37474f",fontSize:10}}>/mo</span></Typography></Box>
                    <Box>
                        <Btns>Get Started</Btns>
                    </Box>
                    <Box style={{padding:20, display:'flex',alignItems:'center',justifyContent:"flex-start"}}>
                        <Para variant='p' style={{margin:0}}>Personalized Learning Plan in-center @Home Face to Fcae Tutoring Up to Algebra
                             Monthly Progress Report Guardian Portal Acess 45 minutes/session</Para>
                    </Box>
                    </DataBox2>
                </Box>


                <Box>
                <DataBox style={{paddingRight:13}}>
                    <Box>
                        <Typography variant='h5' style={{color:"#f44336",paddingBottom:35}}>ESSENTIAL</Typography>
                    </Box>
                    <Box><Typography style={{color:"#263238",paddingBottom:30 , fontSize:20}}>$225<span style={{color:"#37474f",fontSize:10}}>/mo</span></Typography></Box>
                    <Box>
                        <Btns>Get Started</Btns>
                    </Box>
                    <Box style={{padding:20, display:'flex',alignItems:'center',justifyContent:"flex-start"}}>
                        <Para variant='p' style={{margin:0}}>Personalized Learning Plan in-center @Home Face to Fcae Tutoring Up to Algebra
                             Monthly Progress Report Guardian Portal Acess 45 minutes/session</Para>
                    </Box>
                    </DataBox>
                </Box>
                </DataList>
            </Box>
        </Box>
                     <LocalBox style={{textAlign:'center',paddingTop:10}}>
                        <Typography style={{fontSize:13,color:"#455a64",fontWeight:600}}>kashfsu  sduidk;ad djnskj</Typography>
                    </LocalBox>
        </ListBox>

                    
    </Container>
  )
}

export default Audit
