'use client'

import { storage } from '@/firebase/config'
import { getDownloadURL, listAll, ref } from 'firebase/storage'
import { Loader2 } from 'lucide-react'
import Image from 'next/image'
import { Suspense, useEffect, useState } from 'react'

export default function SideToSideContent() {
  const [allPhotos, setAllPhotos] = useState<(string | null)[]>()
  const [isLoading, setIsLoading] = useState(false)

  const handleAllPhotos = async () => {
    const portfolioRef = ref(storage, 'portfolio') // Substitua 'storage' pela sua instância de armazenamento.

    try {
      const items = await listAll(portfolioRef)

      // Use Promise.all para buscar os URLs de download de forma paralela.
      const promises = items.items.map(async (item) => {
        try {
          setIsLoading(true)
          const url = await getDownloadURL(item)
          return url
        } catch (error) {
          console.error('Erro ao obter o URL de download:', error)
          // Lide com erros ou retorne um valor padrão, conforme necessário.
          return null
        } finally {
          setIsLoading(false)
        }
      })

      // Aguarde todas as promessas serem resolvidas.
      const imageUrls = await Promise.all(promises)

      // Filtrar URLs válidos (não retornou erros).
      const validImageUrls = imageUrls.filter((url) => url !== null)

      // Agora você tem os URLs das fotos em 'validImageUrls'.
      console.log('URLs das fotos:', validImageUrls)
      setAllPhotos(validImageUrls)
    } catch (error) {
      console.error('Erro ao listar itens:', error)
      // Lide com erros ao listar os itens, se necessário.
    }
  }
  // https://firebasestorage.googleapis.com/v0/b/ozkan-assets.appspot.com/o/portfolio%2FIMG_2745.jpg?alt=media&token=2597db01-9b04-4b6b-aa92-a37993106115&_gl=1*1icq3ou*_ga*NTYzMTM1Mjg2LjE2OTU4NDA2Njg.*_ga_CW55HF8NVT*MTY5NzMxMzI2MS44LjEuMTY5NzMxNTE1MC42MC4wLjA.
  useEffect(() => {
    handleAllPhotos()
  }, [])

  return (
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
                often approached by those seeking a perspective within a body of
                work that tells a story.I enjoy allowing freedom to fall within
                my approach and later structuring the bones of what will come to
                be. But it all begins with a mirror, visualizing myself within
                the space, within the message, within the moment.
              </p>
            </div>
          </div>

          <div className="col-span-2 grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:gap-2">
            {isLoading ? (
              <Loader2 className="animate-spin" />
            ) : (
              allPhotos?.map((data, key) => (
                <div key={key} className="relative h-[300px] overflow-hidden">
                  <Image
                    loading="eager"
                    fill
                    style={{ objectFit: 'cover' }}
                    alt="NextUI hero Image"
                    src={data as string}
                  />
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
