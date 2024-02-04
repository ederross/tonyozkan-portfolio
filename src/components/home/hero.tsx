'use client'
import { cn } from '@/lib/utils'

import { Loader2 } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Skeleton } from '../ui/skeleton'

export default function VideoPlayer() {
  // video control
  const [isVideoLoading, setVideoIsLoading] = useState(false)

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
            <Skeleton className="h-[500px] w-full bg-gray-200" />
          </>
        )}
        <video
          autoPlay
          muted
          loop
          className={cn(
            'overflow-hidden object-cover',
            isVideoLoading ? 'h-0 w-0' : 'h-[500px] w-full ',
          )}
          controls
          onLoadedData={handleLoadedData}
          onCanPlay={handleCanPlay}
          onWaiting={handleWaiting}
        >
          <source src={'/assets/videos/unexpressed-feelings.mp4'} />
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
