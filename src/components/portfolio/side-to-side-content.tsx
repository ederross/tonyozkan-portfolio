'use client'

import Image from 'next/image'

export default function SideToSideContent() {
  return (
    <div className="py-6 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-screen-xl px-4 md:px-4">
        <div className="grid gap-8 md:grid-cols-3 lg:gap-12">
          <div className="col-span-1 ">
            <div className="h-64 overflow-hidden rounded-lg md:h-auto">
              <h2 className="mb-4 text-center text-[42px] font-normal md:text-left">
                My approach
              </h2>

              <p className="text-center text-xs font-light   sm:text-sm md:text-left">
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
            <div className="relative h-[400px]">
              <Image
                loading="eager"
                fill
                objectFit="cover"
                alt="NextUI hero Image"
                src="/assets/portfolio/5.jpg"
              />
            </div>

            <div className="relative h-[400px]">
              <Image
                loading="eager"
                fill
                objectFit="cover"
                alt="NextUI hero Image"
                src="/assets/portfolio/2.jpg"
              />
            </div>

            <div className="relative h-[400px]">
              <Image
                loading="eager"
                fill
                objectFit="cover"
                alt="NextUI hero Image"
                src="/assets/portfolio/3.jpg"
              />
            </div>

            <div className="relative h-[400px]">
              <Image
                loading="eager"
                fill
                objectFit="cover"
                alt="NextUI hero Image"
                src="/assets/portfolio/4.jpg"
              />
            </div>

            <div className="relative h-[400px]">
              <Image
                loading="eager"
                fill
                objectFit="cover"
                alt="NextUI hero Image"
                src="/assets/portfolio/1.jpg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
