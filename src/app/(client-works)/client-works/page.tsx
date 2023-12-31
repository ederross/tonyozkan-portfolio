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
              My approach is based in a felt-perception of alignment. I am often
              approached by those seeking a perspective within a body of work
              that tells a story.I enjoy allowing freedom to fall within my
              approach and later structuring the bones of what will come to be.
              But it all begins with a mirror, visualizing myself within the
              space, within the message, within the moment.
            </p>
          </div>
        </div>
        <Grid3Images />
      </section>
    </main>
  )
}
