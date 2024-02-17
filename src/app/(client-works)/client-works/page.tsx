import Grid3Images from '@/components/clientWorks/grid3-images'

export default function ClientWorks() {
  return (
    <main className="m-auto min-h-screen max-w-[1440px] bg-[#F6F6F6]">
      <section className="mx-auto flex max-w-[1000px] flex-col overflow-hidden">
        <div className="mt-24 flex w-full flex-col justify-between gap-4 border-b-1 px-4 pb-8 lg:flex-row">
          <div className="flex-1">
            <h2 className="text-3xl  font-normal tracking-tighter">
              Client Works
            </h2>
          </div>
          <div className="flex-1">
            <p className="text-justify text-xs font-light sm:text-left sm:text-sm">
              Tony is known for his creative approach with brand partnerships.
              Every campaign is a new chance to explore myself in different ways
              aligning the brands vision. I enjoy executing brands visions and
              bringing my own creativity into their process and message. Video
              and Photo fascinate me and allow me to visualize myself within the
              message , within the vision.
            </p>
          </div>
        </div>
        <Grid3Images />
      </section>
    </main>
  )
}
