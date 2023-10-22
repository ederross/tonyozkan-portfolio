'use client'
import Image from 'next/image'

import { useEffect, useState } from 'react'
import { clientWorks } from './data'

import ClientDetails from './ClientDetails'

export default function Grid3Images() {
  const [selectedClient, setSelectedClient] = useState<IClientWork>()

  const handleSelectedClient = (data: IClientWork) => setSelectedClient(data)

  // useEffect(() => {
  //   if (selectedClient) {
  //     document.body.classList.add('overflow-y-hidden')
  //   } else {
  //     document.body.classList.remove('overflow-y-hidden')
  //   }
  // }, [selectedClient])

  return (
    <>
      <div className="px-4">
        <div className="col-span-2 my-24 grid gap-16 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:gap-8">
          {clientWorks.map((data, key) => (
            <div
              key={key}
              className="relative h-[600px] cursor-pointer overflow-hidden"
              onClick={() => handleSelectedClient(data)}
            >
              <Image
                loading="eager"
                fill
                style={{ objectFit: 'cover' }}
                className="duration-300 ease-out hover:scale-125"
                alt="NextUI hero Image"
                src={data.cover}
              />
            </div>
          ))}
        </div>
      </div>
      {selectedClient && (
        <ClientDetails
          selectedClient={selectedClient as IClientWork}
          setSelectedClient={setSelectedClient}
        />
      )}
    </>
  )
}
