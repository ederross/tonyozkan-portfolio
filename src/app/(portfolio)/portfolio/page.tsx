import Hero from '@/components/portfolio/hero'
import SideToSideContent from '@/components/portfolio/side-to-side-content'

export default function Portfolio() {
  return (
    <main className="m-auto min-h-screen max-w-[1440px] bg-[#F6F6F6]">
      <section className="mx-auto flex max-w-[1000px] flex-col overflow-hidden">
        {/* <Hero /> */}
        <SideToSideContent />
      </section>
    </main>
  )
}
