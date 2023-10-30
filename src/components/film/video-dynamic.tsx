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
          <Link key={key} href={`?film=${data.slug}`}>
            <div className="mb-16 flex flex-col gap-2">
              <div
                className="h-[400px] w-full bg-slate-200"
                style={{
                  backgroundImage: `url('${data.cover}')`,
                  backgroundSize: 'cover',
                }}
              ></div>
              <span>{data.name}</span>
            </div>
          </Link>
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
