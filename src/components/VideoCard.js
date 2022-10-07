import React from 'react'
import { Link } from 'react-router-dom'
import { Typography, Card, CardContent, CardMedia } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'

import { demoThumbnailUrl, demoChannelUrl, demoVideoUrl, demoChannelTitle, demoVideoTitle } from '../utils/constants'

const VideoCard = ({vid: { id: {videoId}, snippet}}) => {

  return (
    <card>
      <Link to={videoId? `/video/${videoId}` : demoVideoUrl}>
        <CardMedia image={snippet?.thumbnails?.high?.url}/>
      </Link>
    </card>
  )
}

export default VideoCard