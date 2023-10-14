import SideToSideContent from '@/components/portfolio/side-to-side-content'

export default function Portfolio() {
  return (
    <main className="m-auto min-h-screen max-w-[1440px] bg-[#F6F6F6]">
      <section className="mx-auto flex max-w-[1200px] flex-col overflow-hidden">
        <div className="mt-16 w-full">
          <h2 className="w-full text-center text-[18vw] font-extralight tracking-tighter">
            Tony Özkan
          </h2>
        </div>
        <SideToSideContent />
      </section>
    </main>
  )
}
