import { X } from 'lucide-react'
import Image from 'next/image'
import { Dispatch, SetStateAction } from 'react'

interface Client {
  name: string
  cover: string
  images: string[]
  videos: never[]
}

interface Props {
  selectedClient: Client
  setSelectedClient: Dispatch<SetStateAction<IClientWork | undefined>>
}

export default function ClientDetails({
  selectedClient,
  setSelectedClient,
}: Props) {
  return (
    <>
      <section className="fixed left-0 z-50  mx-auto flex h-screen w-full flex-col bg-white">
        <div className="m-auto w-full max-w-[1000px] ">
          <div className="mt-8 flex min-h-[32px] w-full justify-between py-4">
            <div className="w-1/2">
              <h2 className="text-4xl">{selectedClient.name}</h2>
            </div>
            <button
              type="button"
              className="p-2"
              onClick={() => setSelectedClient(undefined)}
            >
              <X />
            </button>
          </div>
          <div className="col-span-2 grid gap-16 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:gap-8">
            {selectedClient.images.map((data, key) => (
              <div key={key} className="relative h-[500px]">
                <Image
                  loading="eager"
                  fill
                  style={{ objectFit: 'cover' }}
                  alt="NextUI hero Image"
                  src={data}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
