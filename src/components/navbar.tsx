'use client'

import Image from 'next/image'
import Link from 'next/link'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Dot } from 'lucide-react'

export default function Navbar() {
  return (
    <>
      <nav className="fixed z-10 w-full">
        <div className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-between pt-4 max-xl:px-4">
          <Link href={'/'}>
            <div className="relative h-8 w-[116px]">
              <Image
                loading="eager"
                layout="fill"
                objectFit="contain"
                alt="NextUI hero Image"
                src="/assets/logo.svg"
              />
            </div>
          </Link>

          <div className="md:block md:w-auto">
            <DropdownMenu>
              <DropdownMenuTrigger className="flex h-14 w-14 select-none items-center  rounded-lg focus:outline-none focus:outline-offset-0 focus-visible:outline-none">
                <Dot
                  size={64}
                  className="transition-all ease-in-out hover:h-14 hover:w-14"
                />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="flex flex-col items-center gap-0  border-none bg-transparent p-0 shadow-none">
                <Link href={'/client-works'}>
                  <DropdownMenuItem className="hover:scale-80 transition-all ease-in-out hover:opacity-50">
                    Clients Works
                  </DropdownMenuItem>
                </Link>
                <Link href={'/portfolio'}>
                  <DropdownMenuItem className="hover:scale-80 transition-all ease-in-out hover:opacity-50">
                    Portfolio
                  </DropdownMenuItem>
                </Link>
                <Link href={'/directing'}>
                  <DropdownMenuItem className="hover:scale-80 transition-all ease-in-out hover:opacity-50">
                    Directing
                  </DropdownMenuItem>
                </Link>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </nav>
    </>
  )
}
