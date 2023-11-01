'use client'
import { Loader2 } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function VideoPlayer() {
  // video control
  const [isVideoLoading, setVideoIsLoading] = useState(true)

  const handleLoadedData = () => {
    setVideoIsLoading(false)
  }

  const handleCanPlay = () => {
    setVideoIsLoading(false)
  }

  const handleWaiting = () => {
    setVideoIsLoading(true)
  }

  return (
    <>
      <div className="flex h-screen flex-col items-center justify-center">
        {isVideoLoading && (
          <>
            <div className="flex flex-col items-center gap-2">
              <Loader2 className="animate-spin text-black" />
              <span>loading video...</span>
            </div>
          </>
        )}
        <video
          autoPlay
          muted
          loop
          style={{ width: '100%', height: '500px' }}
          onLoadedData={handleLoadedData}
          onCanPlay={handleCanPlay}
          onWaiting={handleWaiting}
        >
          <source src="/assets/videos/unexpressed-feelings.mp4" />
        </video>
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
