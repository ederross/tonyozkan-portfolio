'use Film'
import { Dispatch, SetStateAction, useEffect, useState } from 'react'

import Image from 'next/image'
import Link from 'next/link'

import { VideoIcon, X } from 'lucide-react'

import { motion } from 'framer-motion'

import YouTube from 'react-youtube'

import { PhotoSlider } from 'react-photo-view'
import 'react-photo-view/dist/react-photo-view.css'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { Skeleton } from '../ui/skeleton'

interface Props {
  selectedFilm: IFilm
  setSelectedFilm: Dispatch<SetStateAction<IFilm | undefined>>
}
export default function VideoDetails({ selectedFilm, setSelectedFilm }: Props) {
  const [visible, setVisible] = useState(false)
  const [index, setIndex] = useState(0)

  return (
    <>
      <section className="fixed left-0 z-50 mx-auto  h-screen w-full overflow-auto bg-[#F6F6F6] px-4 pb-40 ">
        <div className="m-auto w-full max-w-[1000px] ">
          <div className="mb-8 mt-8 flex min-h-[32px] w-full justify-between py-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
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
          <div className="h-[500px] w-full bg-slate-50">
            {selectedFilm.isComingSoon && (
              <div className="flex h-[500px] w-full flex-col items-center justify-center rounded-[8px] border bg-[#F6F6F6]">
                <VideoIcon />
                <span>Coming Soon...</span>
              </div>
            )}
            {!selectedFilm.isComingSoon &&
              selectedFilm.videosId.map((data, key) => (
                <YouTube
                  key={key}
                  videoId={data}
                  className="h-[400px]"
                  opts={{
                    width: '100%',
                    height: 500,
                    playerVars: {
                      autoplay: 0,
                    },
                  }}
                  onReady={(event) => {
                    event.target.pauseVideo()
                  }}
                />
              ))}
          </div>
          <div className="mt-4 flex flex-col sm:mt-8 sm:flex-row ">
            <div className="w-3/3 mb-2 flex flex-col sm:w-1/3">
              <h2 className="my-1 text-3xl sm:text-4xl">Stills</h2>
              <p>See the captures of this great work.</p>
            </div>
            <div className="w-3/3 sm:w-2/3">
              <div className="col-span-2 grid gap-16 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:gap-4">
                {selectedFilm?.images.map((data, key) => (
                  <motion.div
                    key={key + Math.random()}
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 10 }}
                    onClick={() => {
                      setVisible(true)
                      setIndex(key)
                    }}
                    transition={{ ease: 'easeInOut', duration: 0.6 }}
                    className="bg-bg-slate relative h-[200px] cursor-pointer sm:h-[100px]"
                  >
                    <Avatar className="h-[200px] w-full overflow-hidden rounded-none sm:h-[100px]">
                      <AvatarImage
                        className="object-contain"
                        src={data}
                        alt={`store profile picture`}
                        suppressHydrationWarning
                      />
                      <AvatarFallback suppressHydrationWarning>
                        <Skeleton className="h-full w-full rounded-none bg-gray-200 " />
                      </AvatarFallback>
                    </Avatar>
                  </motion.div>
                ))}
              </div>

              <PhotoSlider
                images={selectedFilm?.images.map((item) => ({
                  src: item,
                  key: item,
                }))}
                visible={visible}
                onClose={() => setVisible(false)}
                index={index}
                onIndexChange={setIndex}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
