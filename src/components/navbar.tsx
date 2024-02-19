'use client'

import Image from 'next/image'
import Link from 'next/link'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Dot, Menu } from 'lucide-react'

export default function Navbar() {
  const [loadedMenu, setLoadedMenu] = useState(false)

  const pathName = usePathname()
  const isNoLogoPage =
    pathName.includes('/client-works') || pathName.includes('/directing')

  useEffect(() => {
    setLoadedMenu(true)
  }, [])

  return (
    <>
      <nav className="fixed z-50 w-full">
        <div className="mx-auto flex flex-wrap items-start justify-between bg-transparent pt-4 max-xl:px-2 xl:px-6">
          {!isNoLogoPage ? (
            <Link href={'/'}>
              <div className="relative ml-2 h-8 w-[116px] bg-transparent">
                <Image
                  loading="eager"
                  fill
                  style={{ objectFit: 'contain' }}
                  className="bg-transparent"
                  alt="NextUI hero Image"
                  src="/assets/logo.svg"
                />
              </div>
            </Link>
          ) : (
            <div></div>
          )}

          <div className="md:w-auto">
            <DropdownMenu>
              <DropdownMenuTrigger className="flex h-8 w-8 select-none items-center justify-center rounded-lg focus:outline-none focus:outline-offset-0 focus-visible:outline-none lg:hidden">
                <Menu size={20} className="transition-all ease-in-out" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="flex flex-col items-center gap-0  border-none bg-transparent p-0 shadow-none">
                <Link href={'/'}>
                  <DropdownMenuItem className="transition-all ease-in-out hover:scale-80 hover:opacity-50">
                    Home
                  </DropdownMenuItem>
                </Link>
                <Link href={'/client-works'}>
                  <DropdownMenuItem className="transition-all ease-in-out hover:scale-80 hover:opacity-50">
                    Clients Works
                  </DropdownMenuItem>
                </Link>
                <Link href={'/portfolio'}>
                  <DropdownMenuItem className="transition-all ease-in-out hover:scale-80 hover:opacity-50">
                    Portfolio
                  </DropdownMenuItem>
                </Link>
                <Link href={'/film'}>
                  <DropdownMenuItem className="transition-all ease-in-out hover:scale-80 hover:opacity-50">
                    Film
                  </DropdownMenuItem>
                </Link>
              </DropdownMenuContent>
            </DropdownMenu>

            <div className="hidden items-center space-y-2 pr-3 pt-0 text-sm lg:flex lg:flex-col">
              <Link
                href={'/'}
                className="transition-all ease-in-out hover:scale-80 hover:opacity-50"
              >
                Home
              </Link>
              <Link
                href={'/client-works'}
                className="transition-all ease-in-out hover:scale-80 hover:opacity-50"
              >
                Client Works
              </Link>
              <Link
                href={'/portfolio'}
                className="transition-all ease-in-out hover:scale-80 hover:opacity-50"
              >
                Portfolio
              </Link>
              <Link
                href={'/film'}
                className="transition-all ease-in-out hover:scale-80 hover:opacity-50"
              >
                Film
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}
