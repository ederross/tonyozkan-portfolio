import Image from 'next/image'

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'

export default function Grid3Images() {
  return (
    <div className="col-span-2 my-24 grid gap-16 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:gap-8">
      <div className="relative h-[400px]">
        <Image
          loading="eager"
          fill
          style={{ objectFit: 'cover' }}
          alt="NextUI hero Image"
          src="/test/cover.jpg"
        />
      </div>

      <Sheet>
        <SheetTrigger>Open</SheetTrigger>
        <SheetContent className="w-full bg-white ">
          <SheetHeader>
            <SheetTitle>Are you sure absolutely sure?</SheetTitle>
            <SheetDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  )
}
