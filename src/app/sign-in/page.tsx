"use client"
import React from 'react'
import ky from "ky";
import {useState} from "react";
import { useRouter } from "next/navigation";

// sign in user
const signIn = async (payload: {
  userType: string;
  email: string;
  password: string;
}) => {
  const json = await ky.post("http://localhost:3030/auth/login", {
    json: payload,
  }).json();
  console.log(json)
  return json;
}


export default function SignIn() {
  const router = useRouter();

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [userType, setUserType] = useState("user")

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Вход в аккаунт
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <div className="space-y-6">

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={event => setEmail(event.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Пароль
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={event => setPassword(event.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>

              <div className="mt-5">
                <label
                  htmlFor="location"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Тип пользователя
                </label>
                <select
                  id="location"
                  value={userType}
                  onChange={(event) => setUserType(event.target.value)}
                  name="location"
                  className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
                >
                  <option value="user">Покупатель</option>
                  <option value="tailor">Кастомайзер</option>
                </select>
              </div>

            </div>

            <div>
              <button
                type="submit"
                onClick={async () => {
                  try {
                    const response: any = await signIn({
                      userType,
                      email,
                      password
                    })
                    if(response) {
                      console.log(response.user)
                      const {user} = response;
                      localStorage.setItem("name", user.name);
                      localStorage.setItem("profile_picture", user.profile_picture);
                      localStorage.setItem("user_id", user.id);
                      localStorage.setItem("email", user.email)
                      router.push("/home")
                    }
                  } catch(error) {
                    console.log(error)
                  }
                }}
                className="flex w-full justify-center rounded-md bg-[#6A994E] hover:bg-[#386641] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Войти
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
