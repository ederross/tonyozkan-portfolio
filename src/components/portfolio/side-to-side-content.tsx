'use client'
import { useCallback, useEffect, useState } from 'react'

import { Loader2 } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { portfolioData } from './data'
import PortfolioDetails from './portfolioDetails'
import { motion } from 'framer-motion'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'

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
      <div className="py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-xl px-4 md:px-4">
          <div className="grid gap-8 md:grid-cols-3 lg:gap-12">
            <div className="sticky  top-10 col-span-1">
              <div className=" h-64 overflow-hidden rounded-lg md:h-auto">
                <h2 className="mb-4 text-center text-[42px] font-normal md:text-left">
                  My approach
                </h2>

                <p className="text-center text-xs font-light   sm:text-xs md:text-left">
                  My approach is based in a felt-perception of alignment. I am
                  often approached by those seeking a perspective within a body
                  of work that tells a story.I enjoy allowing freedom to fall
                  within my approach and later structuring the bones of what
                  will come to be. But it all begins with a mirror, visualizing
                  myself within the space, within the message, within the
                  moment.
                </p>
              </div>
            </div>

            <div className="col-span-2 grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:gap-2">
              {isLoading ? (
                <Loader2 className="animate-spin" />
              ) : (
                portfolioData?.map((data, key) => (
                  <Link key={key} href={`?image=${data.slug}`}>
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.6 }}
                      className="flex h-[400px] w-full items-center justify-center overflow-hidden "
                    >
                      <Avatar className=" h-full w-full overflow-hidden rounded-none duration-1000 ease-out hover:scale-[1.2]">
                        <AvatarImage
                          className="object-cover"
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
