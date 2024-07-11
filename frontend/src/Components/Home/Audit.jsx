import React from 'react'
import { Box , styled ,ToggleButtonGroup,ToggleButton,Typography , Select ,MenuItem , Button} from '@mui/material'
import { useState } from 'react'



const Container = styled(Box)`
      width:100%;
      background-color:#ffcdd2;
      height:auto;
      padding-top:30px;
`

const Header = styled(Box)`
    padding-top:120px;
    text-align:center;
`
const LocalBox = styled(Box)`
        padding-bottom:20px;
`
const ListBox = styled(Box)`
        background-color:#e0e0e0;
        margin-left:250px;
        margin-right:250px;
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
        width:30%;
        text-align:center;
        height:50vh;
        padding-top:55px;
  `


  const DataList = styled(Box)`
        display:flex;
        margin-left:100px;
        background-color:#f5f5f5;
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
        <ListBox>
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
                    <DataBox>
                    <Box>
                        <Typography variant='h5' style={{color:"#f44336",paddingBottom:35}}>ESSENTIAL</Typography>
                    </Box>
                    <Box><Typography style={{color:"#263238",paddingBottom:30 , fontSize:20}}>$225<span style={{color:"#37474f",fontSize:10}}>/mo</span></Typography></Box>
                    <Box>
                        <Button>Get Started</Button>
                    </Box>
                    <Box style={{padding:20, display:'flex',alignItems:'center',justifyContent:"flex-start"}}>
                        <Typography variant='p' style={{margin:0}}>Personalized Learning Plan in-center @Home Face to Fcae Tutoring Up to Algebra
                             Monthly Progress Report Guardian Portal Acess 45 minutes/session</Typography>
                    </Box>
                    </DataBox>
                  
                </Box>


                <Box>
                <DataBox>
                    <Box>
                        <Typography variant='h5' style={{color:"#f44336",paddingBottom:35}}>ESSENTIAL</Typography>
                    </Box>
                    <Box><Typography style={{color:"#263238",paddingBottom:30 , fontSize:20}}>$225<span style={{color:"#37474f",fontSize:10}}>/mo</span></Typography></Box>
                    <Box>
                        <Button>Get Started</Button>
                    </Box>
                    <Box style={{padding:20, display:'flex',alignItems:'center',justifyContent:"flex-start"}}>
                        <Typography variant='p' style={{margin:0}}>Personalized Learning Plan in-center @Home Face to Fcae Tutoring Up to Algebra
                             Monthly Progress Report Guardian Portal Acess 45 minutes/session</Typography>
                    </Box>
                    </DataBox>
                </Box>


                <Box>
                <DataBox>
                    <Box>
                        <Typography variant='h5' style={{color:"#f44336",paddingBottom:35}}>ESSENTIAL</Typography>
                    </Box>
                    <Box><Typography style={{color:"#263238",paddingBottom:30 , fontSize:20}}>$225<span style={{color:"#37474f",fontSize:10}}>/mo</span></Typography></Box>
                    <Box>
                        <Button>Get Started</Button>
                    </Box>
                    <Box style={{padding:20, display:'flex',alignItems:'center',justifyContent:"flex-start"}}>
                        <Typography variant='p' style={{margin:0}}>Personalized Learning Plan in-center @Home Face to Fcae Tutoring Up to Algebra
                             Monthly Progress Report Guardian Portal Acess 45 minutes/session</Typography>
                    </Box>
                    </DataBox>

                </Box>


                </DataList>
            </Box>
        </Box>
        </ListBox>
    </Container>
  )
}

export default Audit
