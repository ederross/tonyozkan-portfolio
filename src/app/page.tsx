import VideoPlayer from '@/components/home/hero'
import SideToSideImages from '@/components/home/side-to-side-images'

export default function Home() {
  return (
    <main className="m-auto min-h-screen max-w-[1440px] bg-[#F6F6F6]">
      <section className="mx-auto flex max-w-[1000px] flex-col overflow-hidden">
        <VideoPlayer />
        <SideToSideImages />
      </section>
    </main>
  )
}
