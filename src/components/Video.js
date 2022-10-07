import React from 'react'
import { Stack, Box } from '@mui/material'

import VideoCard from './VideoCard'
import ChannelCard from './ChannelCard'

const Video = ({video}) => {
  return (
    <Stack direction='row' flexWrap='wrap' justifyContent='start' gap={2}>
      {video.map((item, index)=> (
        <Box key={index}>
          {item.id.videoId && <VideoCard vid={item}/>}
          {item.id.channelId && <ChannelCard channelDetail={item}/>}
        </Box>
      ))}
    </Stack>
  )
}

export default Video