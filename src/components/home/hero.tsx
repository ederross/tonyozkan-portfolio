'use client'
import { Loader2 } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function VideoPlayer() {
  const [isVideoPlayerMounted, setIsVideoPlayerMounted] = useState(false)

  useEffect(() => {
    setIsVideoPlayerMounted(true)
  }, [])

  return (
    <>
      <div className="flex h-screen items-center justify-center">
        {isVideoPlayerMounted ? (
          <video autoPlay muted loop style={{ width: '100%', height: '500px' }}>
            <source src="/assets/videos/unexpressed-feelings.mp4" />
          </video>
        ) : (
          <Loader2 className="animate-spin" />
        )}
      </div>
    </>
  )
}

// <ReactPlayer
// style={{
//   backgroundColor: 'black',
// }}
// width={'100%'}
// url="https://giistyxelor.s3.amazonaws.com/giists/video/video0cP3w019TiZYYcUy22WY.mp4"
// controls={false}
// playing={true}
// muted
// loop
// />
