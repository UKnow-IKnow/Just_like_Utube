import React from 'react'
import { Link } from 'react-router-dom'
import { Typography, Card, CardContent, CardMedia } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'

import { demoThumbnailUrl, demoChannelUrl, demoVideoUrl, demoChannelTitle, demoVideoTitle } from '../utils/constants'

const VideoCard = ({vid: { id: {videoId}, snippet}}) => {

  return (
    <card>
      <Link to={videoId? `/video/${videoId}` : demoVideoUrl}>
        <CardMedia 
          image={snippet?.thumbnails?.high?.url}
          alt={snippet?.title}
          sx={{
            borderTopLeftRadius: 3,
            borderTopRightRadius: 3,
            width: { xs: '100%', sm: '358px'},
            height: 190
          }}
        />
      </Link>
      <CardContent
        sx={{
          borderBottomLeftRadius: 3,
          borderBottomRightRadius: 3, 
          backgroundColor: '#1e1e1e', height: '106px'
        }}
      >
        <Link to={videoId? `/video/${videoId}` : demoVideoUrl}>
          <Typography variant='subtitle1' fontWeight='bold' color='#FFF'>
            {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}  
          </Typography>
        </Link>
        <Link to={snippet?.channelId? `/channel/${snippet?.channelId}` : demoChannelUrl}>
          <Typography variant='subtitle2' fontWeight='bold' color='gray'>
            {snippet?.channeltitle || demoChannelTitle }  
            <CheckCircle />
          </Typography>
        </Link>
      </CardContent>

      
    </card>
  )
}

export default VideoCard