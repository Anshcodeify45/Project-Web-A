import React, { useEffect, useState } from 'react'
import Navbar from '../Nav/Navbar'
import { Box ,styled} from '@mui/material'
import { userData } from '../../Servise api/api';

const Container = styled(Box)`
      background-color:#ffcdd2;
      width:100%;
      height:150vh;
`

const TableBox = styled(Box)`
       width:100%;
       padding-top:90px;
       background-color:#ffcdd2;
`


function Dashboard() {

const [users ,setUsers] = useState([]);


  useEffect( ()=>{
     const fetchData = async() =>{
      try{
            const data = await userData();
            console.log('fetched data', data.data.data);
            setUsers(data.data.data)
      }catch (error){
        console.error('Error fetching users:', error.message);
      }
     }

     fetchData();
  },[])


  return (
    <Container>
      <Box>
        <Navbar/>
      </Box>
      <TableBox>
        <table style={{width:"100%"}}>
          <thead style={{textAlign:"center",padding:"10px 20px 10px 20px",cursor:"pointer",fontSize:25}}>
            <tr>
              <th style={{border:"2px solid",padding:"10px 20px 10px 20px",cursor:"pointer"}}>
                Name
              </th>
              <th style={{border:"2px solid",padding:"10px 20px 10px 20px",cursor:"pointer"}}>
                Email
              </th>
              <th style={{border:"2px solid",padding:"10px 20px 10px 20px",cursor:"pointer"}}>
                Phone no.
              </th>
              <th style={{border:"2px solid",padding:"10px 20px 10px 20px",cursor:"pointer"}}>
                Username
              </th>
            </tr>
          </thead>
          <tbody>
            {
              users.map(data => ( 
                        
                  <tr style={{textAlign:"center",fontSize:20}}>
                  <td style={{border:"2px solid",padding:"10px 20px 10px 20px",cursor:"pointer"}}>{data.name}</td>
                  <td style={{border:"2px solid",padding:"10px 20px 10px 20px",cursor:"pointer"}}>{data.email}</td>
                  <td style={{border:"2px solid",padding:"10px 20px 10px 20px",cursor:"pointer"}}>{data.phone}</td>
                  <td style={{border:"2px solid",padding:"10px 20px 10px 20px",cursor:"pointer"}}>{data.username}</td>
                  </tr>
                       
              ))
            }
          </tbody>
        </table>
      </TableBox>
    </Container>
  )
}

export default Dashboard
