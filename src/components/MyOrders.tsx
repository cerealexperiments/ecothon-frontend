"use client"
import React from "react"
import ky from "ky"
import { useQuery } from "@tanstack/react-query"

const getUserOrders = async (userId: number) => {
  const response = await ky.get(`http://localhost:3030/orders?userId=${userId}`).json()
  console.log(response)
  return response
}


import { CalendarDaysIcon, CreditCardIcon, UserCircleIcon } from '@heroicons/react/20/solid'

export default function Order() {
  const ordersQuery = useQuery({
    queryKey: ["user orders"],
    queryFn: () => getUserOrders(Number(localStorage.getItem("user_id")) || 0)
  })
  console.log(ordersQuery.data)
  return (
    <div className="lg:col-start-3 max-w-md lg:row-end-1">
      <h1 className="text-3xl font-bold leading-tight tracking-tight pb-6 text-gray-900">Мои заказы</h1>
      <h2 className="sr-only">Summary</h2>
      <div className="rounded-lg bg-gray-50 shadow-sm ring-1 ring-gray-900/5">
        <dl className="flex flex-wrap">
          <div className="flex-auto pl-6 pt-6">
            <dt className="text-sm font-semibold leading-6 text-gray-900">Стоимость</dt>
            <dd className="mt-1 text-base font-semibold leading-6 text-gray-900">1200 с.</dd>
          </div>
          <div className="flex-none self-end px-6 pt-4">
            <dt className="sr-only">Статус</dt>
            <dd className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
              Получен
            </dd>
          </div>
          <div className="mt-6 flex w-full flex-none gap-x-4 border-t border-gray-900/5 px-6 pt-6">
            <dt className="flex-none">
              <span className="sr-only">Client</span>
              <UserCircleIcon className="h-6 w-5 text-gray-400" aria-hidden="true" />
            </dt>
            <dd className="text-sm font-medium leading-6 text-gray-900">Кастомайзер</dd>
          </div>
          <div className="mt-4 flex w-full flex-none gap-x-4 px-6">
            <dt className="flex-none">
              <span className="sr-only">Due date</span>
              <CalendarDaysIcon className="h-6 w-5 text-gray-400" aria-hidden="true" />
            </dt>
            <dd className="text-sm leading-6 text-gray-500">
              <time dateTime="2023-01-31">5 Декабря, 2023</time>
            </dd>
          </div>
          <div className="mt-4 flex w-full flex-none gap-x-4 px-6">
            <dt className="flex-none">
              <span className="sr-only">Status</span>
              <CreditCardIcon className="h-6 w-5 text-gray-400" aria-hidden="true" />
            </dt>
            <dd className="text-sm leading-6 text-gray-500">Оплата картой</dd>
          </div>
        </dl>
        <div className="mt-6 border-t border-gray-900/5 px-6 py-6">
          <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
            Посмотреть соглашение <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </div>
    </div>
  )
}
