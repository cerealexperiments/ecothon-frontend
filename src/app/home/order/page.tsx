"use client"
import React, {useState} from 'react'
import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import ky from 'ky'

const placeOrder = async (payload: {ordered_by: string, ordered_by_id: number, details: string}) => {
  const json = await ky.post("http://localhost:3030/order", {
    json: payload
  }).json()
  console.log(json)
  return json;
}

export default function Order() {
  const [details, setDetails] = useState("")
  return (
    <div>
      <div className="space-y-12 px-4">
        <div className="border-b border-gray-900/10 pb-12">
        <h1 className="text-3xl font-bold leading-tight tracking-tight text-gray-900">Заказ кастомизации</h1>
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="col-span-full">
              <label htmlFor="about" className="block text-sm font-medium leading-6 text-gray-900">
                Требования
              </label>
              <div className="mt-2">
                <textarea
                  id="details"
                  value={details}
                  onChange={event => setDetails(event.target.value)}
                  name="details"
                  rows={3}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  defaultValue={''}
                />
              </div>
              <p className="mt-3 text-sm leading-6 text-gray-600">Опишите ваши требования для кастомизации</p>
            </div>


            <div className="col-span-full">
              <label htmlFor="cover-photo" className="block text-sm font-medium leading-6 text-gray-900">
                Фото вашей вещи
              </label>
              <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                <div className="text-center">
                  <PhotoIcon className="mx-auto h-12 w-12 text-gray-300" aria-hidden="true" />
                  <div className="mt-4 flex text-sm leading-6 text-gray-600">
                    <label
                      htmlFor="file-upload"
                      className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                    >
                      <span>Загрузите фото</span>
                      <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                    </label>
                  </div>
                  <p className="text-xs leading-5 text-gray-600">PNG, JPG до 10МБ</p>
                </div>
              </div>
            </div>

            <div className="col-span-full">
              <label htmlFor="cover-photo" className="block text-sm font-medium leading-6 text-gray-900">
                Фото желаемого результата
              </label>
              <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                <div className="text-center">
                  <PhotoIcon className="mx-auto h-12 w-12 text-gray-300" aria-hidden="true" />
                  <div className="mt-4 flex text-sm leading-6 text-gray-600">
                    <label
                      htmlFor="file-upload"
                      className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                    >
                      <span>Загрузите фото</span>
                      <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                    </label>
                  </div>
                  <p className="text-xs leading-5 text-gray-600">PNG, JPG до 10МБ</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6 px-4">
        <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
          Отмена
        </button>
        <button
          onClick={async () => {
            try {
              const response = await placeOrder({ordered_by: localStorage.getItem("email") || "something", ordered_by_id: Number(localStorage.getItem("user_id")), details })
              if(response) {
                console.log("order placed")
              }
            } catch(error) {
              console.log(error)
            }
          }}
          className="rounded-md bg-[#6A994E] hover:bg-[#386641] px-3 py-2 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Сохранить
        </button>
      </div>
    </div>
  )
}
