'use client'
import { useEffect, useState } from 'react'
import ReactPlayer from 'react-player'

export default function VideoPlayer() {
  const [isVideoPlayerMounted, setIsVideoPlayerMounted] = useState(false)

  useEffect(() => {
    setIsVideoPlayerMounted(true)
  }, [])

  return (
    <>
      <div className="flex h-screen items-center justify-center">
        {isVideoPlayerMounted && (
          // USE LATER:
          // <ReactPlayer
          //   style={{
          //     backgroundColor: 'black',
          //   }}
          //   width={'100%'}
          //   url="https://giistyxelor.s3.amazonaws.com/giists/video/video0cP3w019TiZYYcUy22WY.mp4"
          //   controls={false}
          //   playing={true}
          //   muted
          //   loop
          // />
          <video autoPlay muted loop style={{ width: '100%', height: '500px' }}>
            <source src="https://giistyxelor.s3.amazonaws.com/giists/video/video0cP3w019TiZYYcUy22WY.mp4" />
          </video>
        )}
      </div>
    </>
  )
}
