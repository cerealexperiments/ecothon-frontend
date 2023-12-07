import React from "react"
export default function CustomizeNow() {
  return (
    <div className="bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:justify-between lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Не понравились вещи из каталога?
          <br />
          Кастомизируйте свою вещь сейчас.
        </h2>
        <div className="mt-10 flex items-center gap-x-6 lg:mt-0 lg:flex-shrink-0">
          <a
            href="#"
            className="rounded-md bg-[#6A994E]  px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#386641] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Начать
          </a>
          <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
            Подробнее <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </div>
  )
}