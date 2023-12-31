'use client'

import Image from 'next/image'

export default function SideToSideImages() {
  return (
    <div className="py-6 max-lg:px-4 sm:py-8 lg:py-32">
      <div className="mx-auto max-w-screen-2xl pt-6">
        <div className="grid gap-6  sm:grid-cols-2">
          <div className="flex flex-col">
            <div className="relative h-[600px]">
              <Image
                loading="eager"
                fill
                style={{ objectFit: 'cover' }}
                alt="NextUI hero Image"
                src="/assets/headshot2.jpg"
              />
            </div>{' '}
          </div>

          <div className="flex flex-col ">
            <div className="relative h-[600px]">
              <Image
                loading="eager"
                fill
                style={{ objectFit: 'cover' }}
                alt="NextUI hero Image"
                src="/assets/headshot.jpg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
