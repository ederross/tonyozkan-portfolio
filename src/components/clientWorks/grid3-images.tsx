import Image from 'next/image'

export default function Grid3Images() {
  return (
    <div className="col-span-2 my-24 grid gap-16 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:gap-8">
      <div className="relative h-[600px]">
        <Image
          loading="eager"
          fill
          style={{ objectFit: 'cover' }}
          alt="NextUI hero Image"
          src="/assets/headshot.jpg"
        />
      </div>

      <div className="relative h-[600px]">
        <Image
          loading="eager"
          fill
          style={{ objectFit: 'cover' }}
          alt="NextUI hero Image"
          src="/assets/headshot.jpg"
        />
      </div>

      <div className="relative h-[600px]">
        <Image
          loading="eager"
          fill
          style={{ objectFit: 'cover' }}
          alt="NextUI hero Image"
          src="/assets/headshot.jpg"
        />
      </div>

      <div className="relative h-[600px]">
        <Image
          loading="eager"
          fill
          style={{ objectFit: 'cover' }}
          alt="NextUI hero Image"
          src="/assets/headshot.jpg"
        />
      </div>

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
  )
}
