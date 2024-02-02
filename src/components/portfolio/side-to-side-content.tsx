'use client'

import { useCallback, useEffect, useState } from 'react'

import Link from 'next/link'
import { useSearchParams } from 'next/navigation'

import { Loader2 } from 'lucide-react'

import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'

import { motion } from 'framer-motion'

import { PhotoProvider, PhotoView } from 'react-photo-view'
import 'react-photo-view/dist/react-photo-view.css'

import { portfolioData } from './data'
import PortfolioDetails from './portfolioDetails'

export default function SideToSideContent() {
  const searchParams = useSearchParams()
  const photoName = searchParams.get('image')

  const [allPhotos, setAllPhotos] = useState<(string | null)[]>()
  const [isLoading, setIsLoading] = useState(false)

  const [selectedPortolioURL, setSelectedPortfolioURL] = useState<IPortfolio>()

  useEffect(() => {
    if (photoName) {
      if (selectedPortolioURL) {
        document.body.classList.add('overflow-y-hidden')
      }
    } else {
      document.body.classList.remove('overflow-y-hidden')
    }
  }, [photoName, selectedPortolioURL])

  // const handleAllPhotos = async () => {
  //   const portfolioRef = ref(storage, 'portfolio') // Substitua 'storage' pela sua instância de armazenamento.

  //   try {
  //     const items = await listAll(portfolioRef)

  //     // Use Promise.all para buscar os URLs de download de forma paralela.
  //     const promises = items.items.map(async (item) => {
  //       try {
  //         setIsLoading(true)
  //         const url = await getDownloadURL(item)
  //         return url
  //       } catch (error) {
  //         console.error('Erro ao obter o URL de download:', error)
  //         // Lide com erros ou retorne um valor padrão, conforme necessário.
  //         return null
  //       } finally {
  //         setIsLoading(false)
  //       }
  //     })

  //     // Aguarde todas as promessas serem resolvidas.
  //     const imageUrls = await Promise.all(promises)

  //     // Filtrar URLs válidos (não retornou erros).
  //     const validImageUrls = imageUrls.filter((url) => url !== null)

  //     console.log('URLs das fotos:', validImageUrls)
  //     setAllPhotos(validImageUrls)
  //   } catch (error) {
  //     console.error('Erro ao listar itens:', error)
  //   }
  // }

  // useEffect(() => {
  //   handleAllPhotos()
  // }, [])
  const handleClient = useCallback(() => {
    const photoURL = portfolioData.find((data) => data.slug === photoName)
    setSelectedPortfolioURL(photoURL)
  }, [photoName])

  useEffect(() => {
    handleClient()
  }, [handleClient])

  return (
    <>
      <div className="pb-6">
        <div className="mx-auto max-w-screen-xl px-4 pt-28 md:px-4 lg:pt-36">
          <div className="flex w-full flex-col items-center gap-8  md:grid-cols-3 lg:grid lg:gap-12">
            <div className="col-span-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-2 xl:gap-16">
              {portfolioData
                ?.map((data, key) => (
                  <Link key={key} href={`?image=${data.slug}`}>
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.6 }}
                      className="flex h-[432px] w-full items-center justify-center overflow-hidden"
                    >
                      <Avatar className="h-full w-full overflow-hidden rounded-none duration-1000 ease-out">
                        <AvatarImage
                          className="object-contain"
                          src={data.image}
                          alt={`store profile picture`}
                          suppressHydrationWarning
                        />
                        <AvatarFallback
                          className="rounded-md"
                          suppressHydrationWarning
                        >
                          <Loader2 className="animate-spin text-slate-500" />
                        </AvatarFallback>
                      </Avatar>
                    </motion.div>
                  </Link>
                ))
                .slice(0, 2)}
            </div>

            <div className="col-span-3 grid w-full items-center gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:gap-2">
              {isLoading ? (
                <Loader2 className="animate-spin" />
              ) : (
                <>
                  {portfolioData
                    ?.map((data, key) => (
                      <Link key={key} href={`?image=${data.slug}`}>
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.6 }}
                          className="flex h-[400px] w-full items-center justify-center overflow-hidden"
                        >
                          <Avatar className="h-full w-full overflow-hidden rounded-none bg-transparent duration-1000 ease-out">
                            <AvatarImage
                              className="object-contain object-center"
                              src={data.image}
                              alt={`store profile picture`}
                              suppressHydrationWarning
                            />
                            <AvatarFallback
                              className="rounded-md"
                              suppressHydrationWarning
                            >
                              <Loader2 className="animate-spin text-slate-500" />
                            </AvatarFallback>
                          </Avatar>
                        </motion.div>
                      </Link>
                    ))
                    .slice(2, 19)}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
      {selectedPortolioURL && (
        <PortfolioDetails
          selectedPortfolio={selectedPortolioURL}
          setSelectedPortfolio={setSelectedPortfolioURL}
        />
      )}
    </>
  )
}
