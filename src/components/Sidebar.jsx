import React from 'react'
import {Stack} from '@mui/material'
import {categories} from '../utils/constants'
const Sidebar = ({selectedCategory,setSelectedCategory}) => (
    <Stack className="sidebar"
       direction="row"
        sx={{
            overflowY:"auto",
            height:{sx:'auto', md:'95%'},
            flexDirection:{sm:'row', md:'row'}
        }}
    >
        {categories.map((category)=>(
            <button onClick={
                ()=>{setSelectedCategory(category.link)
            }}>
                <span>{category.name}</span>
            </button>
        ))}
    </Stack>
  
)

export default Sidebar