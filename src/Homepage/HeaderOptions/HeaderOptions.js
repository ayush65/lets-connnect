import React from 'react'
import "./HeaderOptions.css"
import Avatar from '@mui/material/Avatar';


function HeaderOptions({avatar , Icon , title }) {
  return (
    <div  className='headerOption'>
    {Icon &&  <Icon className='header_icon '       / >}

    {avatar && (
     <Avatar  className='header_icon'    src= {avatar} />)}
    <h3  className="header_title">{title}</h3>
    
</div>
  )
}

export default HeaderOptions