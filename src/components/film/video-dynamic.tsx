'use client'

import { useSearchParams } from 'next/navigation'
import VideoDetails from './videoDetails'
import { useCallback, useEffect, useState } from 'react'
import { filmData } from './data'
import Link from 'next/link'

export default function VideosDynamic() {
  const searchParams = useSearchParams()
  const filmName = searchParams.get('film')

  const [isCoverHovered, setIsCoverHovered] = useState(false)

  const [selectedFilmURL, setSelectedFilmURL] = useState<IFilm>()
  const [hoveredSlug, setHoveredSlug] = useState('')

  useEffect(() => {
    if (filmName) {
      if (selectedFilmURL) {
        document.body.classList.add('overflow-y-hidden')
      }
    } else {
      document.body.classList.remove('overflow-y-hidden')
    }
  }, [filmName, selectedFilmURL])

  const handleMouseEnter = (slug: string) => {
    setHoveredSlug(slug)
    setIsCoverHovered(true)
  }
  const handleMouseLeave = (slug: string) => {
    setHoveredSlug(slug)
    setIsCoverHovered(false)
  }

  const handleFilm = useCallback(() => {
    const FilmURL = filmData.find((data) => data.slug === filmName)
    setSelectedFilmURL(FilmURL as IFilm)
  }, [filmName])

  useEffect(() => {
    handleFilm()
  }, [handleFilm])
  return (
    <>
      <section className="mt-16 flex flex-col">
        {filmData.map((data, key) => (
          <div key={key} className="mb-16 flex flex-col gap-2">
            <Link href={`?film=${data.slug}`}>
              <div
                className="h-[400px] w-full bg-slate-200"
                style={{
                  backgroundImage: `url('${data.cover}')`,
                  backgroundSize: 'cover',
                }}
              ></div>
            </Link>
            <span>{data.name}</span>
          </div>
        ))}
      </section>
      {selectedFilmURL && (
        <VideoDetails
          selectedFilm={selectedFilmURL as IFilm}
          setSelectedFilm={setSelectedFilmURL}
        />
      )}
    </>
  )
}
