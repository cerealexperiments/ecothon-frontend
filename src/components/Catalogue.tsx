"use client"
import React from "react"
import { useState } from "react"
import { Dialog, Disclosure, Popover, Tab, Transition } from '@headlessui/react'
import { Bars3Icon, MagnifyingGlassIcon, ShoppingBagIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { ChevronDownIcon, PlusIcon } from '@heroicons/react/20/solid'

const filters = [
  {
    id: 'color',
    name: 'Цвет',
    options: [
      { value: 'white', label: 'Белый' },
      { value: 'beige', label: 'Черный' },
      { value: 'blue', label: 'Зеленый' },
      { value: 'brown', label: 'Красный' },
    ],
  },
  {
    id: 'category',
    name: 'Категория',
    options: [
      { value: 'new-arrivals', label: 'Футболки' },
      { value: 'tees', label: 'Аксессуары' },
      { value: 'crewnecks', label: 'Кроссовки' },
      { value: 'sweatshirts', label: 'Свитеры' },
      { value: 'pants-shorts', label: 'Апсайклинг' },
    ],
  },
  {
    id: 'sizes',
    name: 'Размер',
    options: [
      { value: 'xs', label: 'XS' },
      { value: 's', label: 'S' },
      { value: 'm', label: 'M' },
      { value: 'l', label: 'L' },
      { value: 'xl', label: 'XL' },
      { value: '2xl', label: '2XL' },
    ],
  },
]
const products = [
  {
    id: 3,
    name: 'Футболка',
    href: '#',
    price: '1000 c.',
    description: 'Cочетание современных и традиционных элементов.',
    options: 'Бежевый',
    imageSrc: 'https://www.tradeinn.com/f/13742/137429620/replay-w3302.000.22832p-crew-neck-short-sleeve-t-shirt.jpg',
    imageAlt: 'https://frankfurt.apollo.olxcdn.com/v1/files/53tz40pvrwhs1-KZ/image;s=1000x700',
  },
  {
    id: 4,
    name: 'Платье',
    href: '#',
    price: '3400 c.',
    description: 'Платье средней длины, изготовленное из легкого материала.',
    options: 'Синий',
    imageSrc: 'https://frankfurt.apollo.olxcdn.com/v1/files/53tz40pvrwhs1-KZ/image;s=1000x700',
    imageAlt: 'ion care anymore',
  },
  // More products...
]

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ')
}

export default function Catalogue() {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
  return (<main className="mx-auto max-w-2xl px-4 lg:max-w-7xl lg:px-8">
  <div className="border-b border-gray-200 pb-10">
    <h1 className="text-4xl font-bold tracking-tight text-gray-900">Каталог</h1>
    <p className="mt-4 text-base text-gray-500">
      Ознакомьтесь с нашим ассортиментом товаров
    </p>
  </div>

  <div className="pb-24 pt-12 lg:grid lg:grid-cols-3 lg:gap-x-8 xl:grid-cols-4">
    <aside>
      <h2 className="sr-only">Filters</h2>

      <button
        type="button"
        className="inline-flex items-center lg:hidden"
        onClick={() => setMobileFiltersOpen(true)}
      >
        <span className="text-sm font-medium text-gray-700">Filters</span>
        <PlusIcon className="ml-1 h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
      </button>

      <div className="hidden lg:block">
        <form className="space-y-10 divide-y divide-gray-200">
          {filters.map((section, sectionIdx) => (
            <div key={section.name} className={sectionIdx === 0 ? "" : 'pt-10'}>
              <fieldset>
                <legend className="block text-sm font-medium text-gray-900">{section.name}</legend>
                <div className="space-y-3 pt-6">
                  {section.options.map((option, optionIdx) => (
                    <div key={option.value} className="flex items-center">
                      <input
                        id={`${section.id}-${optionIdx}`}
                        name={`${section.id}[]`}
                        defaultValue={option.value}
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                      />
                      <label htmlFor={`${section.id}-${optionIdx}`} className="ml-3 text-sm text-gray-600">
                        {option.label}
                      </label>
                    </div>
                  ))}
                </div>
              </fieldset>
            </div>
          ))}
        </form>
      </div>
    </aside>

    <section aria-labelledby="product-heading" className="mt-6 lg:col-span-2 lg:mt-0 xl:col-span-3">
      <h2 id="product-heading" className="sr-only">
        Products
      </h2>

      <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:gap-x-8 xl:grid-cols-3">
        {products.map((product) => (
          <div
            key={product.id}
            className="group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white"
          >
            <div className="aspect-h-4 aspect-w-3 bg-gray-200 sm:aspect-none group-hover:opacity-75 sm:h-96">
              <img
                src={product.imageSrc}
                alt={product.imageAlt}
                className="h-full w-full object-cover object-center sm:h-full sm:w-full"
              />
            </div>
            <div className="flex flex-1 flex-col space-y-2 p-4">
              <h3 className="text-sm font-medium text-gray-900">
                <a href={product.href}>
                  <span aria-hidden="true" className="absolute inset-0" />
                  {product.name}
                </a>
              </h3>
              <p className="text-sm text-gray-500">{product.description}</p>
              <div className="flex flex-1 flex-col justify-end">
                <p className="text-sm italic text-gray-500">{product.options}</p>
                <p className="text-base font-medium text-gray-900">{product.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  </div>
</main>)
}