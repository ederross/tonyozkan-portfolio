'use Film'
import { Loader2, X } from 'lucide-react'
import Link from 'next/link'
import { Dispatch, SetStateAction, useEffect, useState } from 'react'

import YouTube from 'react-youtube'
import { motion } from 'framer-motion'
import Image from 'next/image'

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
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 2, delay: 1 }}
              className="w-2/2"
            >
              <h2 className="text-3xl sm:text-4xl">{selectedFilm?.name}</h2>
            </motion.div>
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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2, delay: 1 }}
            className="h-[500px] w-full bg-red-200"
          >
            {selectedFilm.videosId.map((data, key) => (
              <YouTube
                key={key}
                videoId={data}
                className="h-[400px]"
                opts={{
                  width: '100%',
                  height: 500,
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
            ))}
          </motion.div>
          <div className="mt-4 flex flex-col sm:mt-8 sm:flex-row ">
            <div className="w-3/3 mb-2 flex flex-col sm:w-1/3">
              <h2 className="my-1 text-3xl sm:text-4xl">Screenshots</h2>
              <p>Lorem ipsum dolor sit amet</p>
            </div>
            <div className="w-3/3 sm:w-2/3">
              <div className="col-span-2 grid gap-16 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:gap-4">
                {selectedFilm?.images.map((data, key) => (
                  <motion.div
                    key={key + Math.random()}
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 10 }}
                    transition={{ ease: 'easeInOut', duration: 2 }}
                    className="relative h-[200px] bg-black sm:h-[100px]"
                  >
                    <Image
                      priority
                      fill
                      style={{ objectFit: 'contain' }}
                      alt="NextUI hero Image"
                      src={data}
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
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
