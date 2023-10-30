'use Film'
import { X } from 'lucide-react'
import Link from 'next/link'
import { Dispatch, SetStateAction, useEffect, useState } from 'react'

import YouTube from 'react-youtube'
import { motion } from 'framer-motion'

interface Props {
  selectedFilm: IFilm
  setSelectedFilm: Dispatch<SetStateAction<IFilm | undefined>>
}
export default function VideoDetails({ selectedFilm, setSelectedFilm }: Props) {
  const [isMuted, setIsMuted] = useState(true)

  const [isVideoPlayerMounted, setIsVideoPlayerMounted] = useState(false)

  useEffect(() => {
    setIsVideoPlayerMounted(true)
  }, [])

  return (
    <>
      <section className="fixed left-0 z-50 mx-auto  h-screen w-full overflow-auto bg-white px-4 pb-40 ">
        <div className="m-auto w-full max-w-[1000px] ">
          <div className="mb-8 mt-8 flex min-h-[32px] w-full justify-between py-4">
            <div className="w-2/2">
              <h2 className="text-3xl sm:text-4xl">{selectedFilm?.name}</h2>
            </div>
            <Link href={'/film'}>
              <button
                type="button"
                className="p-2"
                onClick={() => setSelectedFilm(undefined)}
              >
                <X />
              </button>
            </Link>
          </div>

          {selectedFilm.videosId.map((data, key) => (
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 2, delay: 1 }}
              key={key}
            >
              <YouTube
                videoId={data}
                opts={{
                  height: '590',
                  width: '100%',
                  playerVars: {
                    // https://developers.google.com/youtube/player_parameters
                    autoplay: 0,
                  },
                }}
                onReady={(event) => {
                  // access to player in all event handlers via event.target
                  event.target.pauseVideo()
                }}
              />
            </motion.div>
          ))}
        </div>
      </section>
    </>
  )
}

// {/* <YouTube
//           videoId="G93mlf97jVE"
//           opts={{
//             height: '390',
//             width: '100%',
//             playerVars: {
//               // https://developers.google.com/youtube/player_parameters
//               autoplay: 1,
//             },
//           }}
//           onReady={(event) => {
//             // access to player in all event handlers via event.target
//             event.target.pauseVideo()
//           }}
//         /> */}
