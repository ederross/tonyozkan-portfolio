import VideoPlayer from '@/components/home/hero'
import SideToSideImages from '@/components/home/side-to-side-images'
import SideToSideContent from '@/components/portfolio/side-to-side-content'
import Balancer from 'react-wrap-balancer'

export default function Portfolio() {
  return (
    <main className="m-auto min-h-screen max-w-[1440px] bg-[#F6F6F6]">
      <section className="mx-auto flex max-w-[1200px] flex-col overflow-hidden">
        <div className="mt-16 w-full">
          <h1 className="w-full text-center text-[19vw] font-extralight tracking-tighter">
            <Balancer>Tony Özkan</Balancer>
          </h1>
        </div>
        <SideToSideContent />
      </section>
    </main>
  )
}
