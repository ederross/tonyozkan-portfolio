'use Film'
import { X } from 'lucide-react'
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
              initial={{ opacity: 0, y: 20 }}
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
          <div className="mt-8 flex">
            <div className="flex w-1/3 flex-col">
              <h2 className="my-4 text-3xl sm:text-4xl">Screenshots</h2>
              <p>Lorem ipsum dolor sit amet</p>
            </div>
            <div className="w-2/3">
              <div className="col-span-2 grid gap-16 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:gap-4">
                {selectedFilm?.images.map((data, key) => (
                  <motion.div
                    key={key + Math.random()}
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 10 }}
                    transition={{ ease: 'easeInOut', duration: 2 }}
                    className="relative h-[100px] bg-black"
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
