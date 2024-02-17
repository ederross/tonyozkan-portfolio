import VideosDynamic from '@/components/film/video-dynamic'

export default function Film() {
  return (
    <main className="m-auto min-h-screen max-w-[1440px] bg-[#F6F6F6]">
      <section className="mx-auto flex max-w-[1000px] flex-col overflow-hidden">
        <div className="mt-24 flex w-full flex-col justify-between gap-4 border-b-1 px-4 pb-8 lg:flex-row">
          <div className="flex-1">
            <h2 className="text-3xl  font-normal tracking-tighter">Film</h2>
          </div>
          <div className="flex-1">
            <p className="text-justify text-xs font-light sm:text-left sm:text-sm">
              I came to NewYork City in 2022 to pursue acting full time and I
              fell in love with the creative process of Film. My passion lies in
              storytelling whether it’s through directing or acting. Film gives
              me endless critic options to express myself and emerging in that
              world is truly a gift.
            </p>
          </div>
        </div>
        <VideosDynamic />
      </section>
    </main>
  )
}
