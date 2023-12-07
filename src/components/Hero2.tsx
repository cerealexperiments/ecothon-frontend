import React from "react"
import heroImage from "../../public/hero2.png"
import Image from "next/image"
import Balancer from "react-wrap-balancer"
import Link from "next/link"

export default function Hero2() {
return (
    <div className="relative isolate overflow-hidden bg-gradient-to-b from-indigo-100/20 pt-14">
        <div
          className="absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:-mr-80 lg:-mr-96"
          aria-hidden="true"
        />
        <div className="mx-auto max-w-7xl px-6 py-32 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-6 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8">
            <h1 className="max-w-2xl text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:col-span-2 xl:col-auto">
              <Balancer>
                EthnoCustom - за моду, что заботится о планете
              </Balancer>
            </h1>
            <div className="mt-6 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1">
              <p className="text-lg leading-8 text-gray-600">
                <Balancer>
                  Одежда для Земли, одежда для Вас. Объединяя устойчивость и стиль, мы создаем экологически чистую моду — для тех, кто заботится о планете так же, как и о своем образе.
                </Balancer>
              </p>
              <div className="mt-10 flex items-center gap-x-6">
                <Link
                  href="/home/catalogue"
                  className="rounded-md bg-[#6A994E] hover:bg-[#386641] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Смотреть каталог
                </Link>
                <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                  Подробнее <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
            <Image
              src={heroImage}
              alt=""
              className="mt-10 aspect-[6/5] w-full max-w-lg rounded-2xl object-cover sm:mt-16 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2 xl:mt-36"
            />
          </div>
        </div>
      </div>)
}
