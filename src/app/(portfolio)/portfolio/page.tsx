import Hero from '@/components/portfolio/hero'
import SideToSideContent from '@/components/portfolio/side-to-side-content'

export default function Portfolio() {
  return (
    <main className="m-auto min-h-screen max-w-[1440px] bg-[#F6F6F6]">
      <section className="mx-auto flex max-w-[1200px] flex-col overflow-hidden">
        {/* <div className="mt-16 flex w-full items-center justify-center overflow-hidden ">
          <h2 className="w-[100vw] break-keep bg-red-200 text-center text-[19.5vw] font-extralight tracking-tighter">
            Tony Özkan
          </h2>
        </div> */}
        <Hero />
        <SideToSideContent />
      </section>
    </main>
  )
}
