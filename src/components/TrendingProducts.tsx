const trendingProducts = [
  {
    id: 3,
    name: 'Футболка',
    href: '#',
    price: '1000 c.',
    description: 'Cочетание современных и традиционных элементов.',
    color: 'Бежевый',
    imageSrc: 'https://www.tradeinn.com/f/13742/137429620/replay-w3302.000.22832p-crew-neck-short-sleeve-t-shirt.jpg',
    imageAlt: 'https://frankfurt.apollo.olxcdn.com/v1/files/53tz40pvrwhs1-KZ/image;s=1000x700',
  },
  {
    id: 4,
    name: 'Платье',
    href: '#',
    price: '3400 c.',
    description: 'Платье средней длины, изготовленное из легкого материала.',
    color: 'Синий',
    imageSrc: 'https://frankfurt.apollo.olxcdn.com/v1/files/53tz40pvrwhs1-KZ/image;s=1000x700',
    imageAlt: 'ion care anymore',
  },
  // More products...
]

export default function TrendingProducts() {
  return (
    <section aria-labelledby="trending-heading">
      <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8 lg:pt-32">
        <div className="md:flex md:items-center md:justify-between">
          <h2 id="favorites-heading" className="text-2xl font-bold tracking-tight text-gray-900">
            Популярные товары
          </h2>
          <a href="#" className="hidden text-sm font-medium text-green-700 hover:text-[#386641] md:block">
            Смотреть все
            <span aria-hidden="true"> &rarr;</span>
          </a>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 md:grid-cols-4 md:gap-y-0 lg:gap-x-8">
          {trendingProducts.map((product) => (
            <div key={product.id} className="group relative">
              <div className="h-56 w-full overflow-hidden rounded-md group-hover:opacity-75 lg:h-72 xl:h-80">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover brightness-[90%] object-center"
                />
              </div>
              <h3 className="mt-4 text-sm text-gray-700">
                <a href={product.href}>
                  <span className="absolute inset-0" />
                  {product.name}
                </a>
              </h3>
              <p className="mt-1 text-sm text-gray-500">{product.color}</p>
              <p className="mt-1 text-sm font-medium text-gray-900">{product.price}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 text-sm md:hidden">
          <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
              Смотреть все
            <span aria-hidden="true"> &rarr;</span>
          </a>
        </div>
      </div>
    </section>
  )
}
