'use client'
import { Image } from '@nextui-org/react'
import Link from 'next/link'
import { Button } from './ui/button'
import { ArrowUpRight, Instagram } from 'lucide-react'

export default function Footer() {
  return (
    <>
      <footer>
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div className="md:flex md:justify-between">
            <div className="mb-10 flex items-center  md:mb-0">
              <Link href="/" className="flex items-center">
                <Image
                  width={'100%'}
                  src="/assets/logo.svg"
                  className="mr-3 h-8"
                  alt="FlowBite Logo"
                />
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
                    <Link href="/directing" className="hover:underline">
                      Directing
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
