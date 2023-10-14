export default function CardVideo() {
  return (
    <>
      <div className="mb-16 flex flex-col gap-2">
        <div
          className="h-[400px] w-full bg-slate-200"
          style={{
            backgroundImage: `url('assets/driver.jpg')`,
            backgroundSize: 'cover',
          }}
        ></div>
        <span>VIDEO TITLE</span>
      </div>
    </>
  )
}
