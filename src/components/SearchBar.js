import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Paper, IconButton } from '@mui/material'
import { Search } from '@mui/icons-material'

const SearchBar = () => {
  return (
    <Paper
        component="form"
        onSubmit={() => {}}
        sx={{
            borderRadius: 20,
            border: '1.5px solid #85219C',
            pl: 2,
            boxShadow: 'none',
            mr: { sm: 5},
            height: '40px'
        }}
    >
        <input
            className='search-bar'
            placeholder='Search...'
            value=""
            onChange={() => {}} 
        />
        <IconButton type='submit' sx={{ p:'10px', color: '#85219C' }}>
            <Search />
        </IconButton>
    </Paper>
  )
}

export default SearchBar