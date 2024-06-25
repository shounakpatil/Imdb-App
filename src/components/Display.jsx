import React from 'react';
import {Stack, Box} from '@mui/material';
import DisplayCard from './DisplayCard';
const Display = ({display}) =>{
    // console.log(display);
    return (
<Stack sx={{display:"flex", flexDirection:{sm:"column", md:"row"}}} flexWrap="wrap"
justifyContent="start" gap={2}>    
{
   Array.isArray(display) && display.map((item)=>{
        return (
        <Box key={item.id}
          sx={{
           boxShadow:'none',
           borderRadius:'10px',
           display:'flex',
           alignItems:'center',
           justifyContent:'center',
           margin:'10px'
          }}
        >
        {<DisplayCard details={item} />}
        </Box>
        )
    })
}

</Stack>
    )
}
export default Display;