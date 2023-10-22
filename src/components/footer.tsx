'use client'

import Link from 'next/link'
import { Button } from './ui/button'
import { ArrowUpRight, Instagram, InstagramIcon } from 'lucide-react'
import Image from 'next/image'

export default function Footer() {
  return (
    <>
      <footer>
        <div className="flex flex-col items-center py-14 sm:hidden">
          <Link href={'/'} className="mb-12">
            <div className="relative ml-2 h-24 w-[216px]">
              <Image
                loading="eager"
                fill
                style={{ objectFit: 'contain' }}
                alt="NextUI hero Image"
                src="/assets/logo.svg"
              />
            </div>
          </Link>

          <div className="mb-8 flex w-full flex-col items-start gap-2 px-4">
            <span className="text-sm font-semibold">NAVIGATON</span>
            <Link href={'/client-works'} className="w-full">
              <Button className="h-20 w-full border border-black text-lg font-medium text-black">
                Client Works
              </Button>
            </Link>
            <Link href={'/portfolio'} className="w-full">
              <Button className="h-20 w-full border border-black text-lg font-medium text-black">
                Portfolio
              </Button>
            </Link>
            <Link href={'/film'} className="w-full">
              <Button className="h-20 w-full border border-black text-lg font-medium text-black">
                Film
              </Button>
            </Link>
          </div>

          <hr className="mx-4 my-6 w-full border-gray-200 dark:border-gray-700 sm:mx-auto" />

          <div className="mb-8 flex w-full flex-col items-start gap-2 px-4">
            <span className="text-sm font-semibold">CONNECT</span>
            <Link
              href={'https://www.instagram.com/tonyozkan/reels/'}
              className="w-full"
            >
              <Button className="h-20 w-full border border-black text-lg font-medium text-black">
                <InstagramIcon />
              </Button>
            </Link>
            <Link
              href={'https://www.tiktok.com/@tonyozkan?lang=en'}
              className="w-full"
            >
              <Button className="h-20 w-full border border-black text-lg font-medium text-black">
                <div className="relative ml-2 h-16 w-[24px]">
                  <Image
                    loading="eager"
                    fill
                    style={{ objectFit: 'contain' }}
                    alt="NextUI hero Image"
                    src="/assets/tiktok.png"
                  />
                </div>
              </Button>
            </Link>
            <Link
              href={'https://www.tiktok.com/@tonyozkan?lang=en'}
              className="w-full"
            >
              <Button className="w-full gap-2 border border-primary-400 py-8 uppercase text-primary-600 underline">
                Get In Contact <ArrowUpRight size={16} />
              </Button>
            </Link>
          </div>
        </div>

        <div className="mx-auto hidden w-full max-w-screen-xl p-4 py-6 sm:block lg:py-8">
          <div className="md:flex md:justify-between">
            <div className="mb-10 flex items-center  md:mb-0">
              <Link href={'/'}>
                <div className="relative ml-2 h-8 w-[116px]">
                  <Image
                    loading="eager"
                    fill
                    style={{ objectFit: 'contain' }}
                    alt="NextUI hero Image"
                    src="/assets/logo.svg"
                  />
                </div>
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 sm:gap-10">
              <div className="lg:border-r-2 ">
                <h2 className="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">
                  NAVIGATION
                </h2>
                <ul className="font-medium text-gray-500 dark:text-gray-400">
                  <li className="mb-4 ">
                    <Link href="/client-works" className="hover:underline">
                      Client Works
                    </Link>
                  </li>
                  <li className="mb-4">
                    <Link href="/portfolio" className="hover:underline">
                      Portfolio
                    </Link>
                  </li>
                  <li>
                    <Link href="/film" className="hover:underline">
                      Film
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="lg:border-r-2 ">
                <h2 className="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">
                  CONNECT
                </h2>
                <ul className="font-medium text-gray-500 dark:text-gray-400">
                  <li className="mb-4">
                    <a
                      href="https://github.com/themesberg/flowbite"
                      className="hover:underline "
                    >
                      Instagram
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://discord.gg/4eeurUVvTy"
                      className="hover:underline"
                    >
                      Tiktok
                    </a>
                  </li>
                </ul>
              </div>
              <div className="flex items-center justify-center ">
                <Button className="gap-2 border border-primary-400 py-8 uppercase text-primary-600 underline">
                  Get In Contact <ArrowUpRight size={16} />
                </Button>
              </div>
            </div>
          </div>
          <hr className="my-6 border-gray-200 dark:border-gray-700 sm:mx-auto lg:my-8" />
          <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm text-gray-500 dark:text-gray-400 sm:text-center">
              © 2023{' '}
              <a href="https://flowbite.com/" className="hover:underline">
                Tony Ozkan
              </a>
              . All Rights Reserved.
            </span>
            <div className="mt-4 flex space-x-5 sm:mt-0 sm:justify-center">
              <Link
                href="#"
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
              >
                <Instagram />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
