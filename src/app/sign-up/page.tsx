"use client"
import ky from "ky";
import {useState} from "react";
import { useRouter } from "next/navigation";

// register default user
const registerUser = async (payload: {
  name: string;
  email: string;
  password: string;
}) => {
  const json = await ky.post("http://localhost:3030/auth/registerUser", {
    json: payload,
  }).json();
  console.log(json)
  return json;
}

const registerTailor = async (payload: {
  name: string;
  email: string;
  password: string;
  category?: string;
}) => {
  const json = await ky.post("http://localhost:3030/auth/registerTailor", {
    json: payload,
  }).json();
  console.log(json)
  return json;
}


export default function SignUpPage() {
  const router = useRouter();

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [userType, setUserType] = useState("user")
  const [category, setCategory] = useState("universal")

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Регистрация аккаунта
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <div className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Имя
              </label>
              <div className="mt-2">
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="email"
                  required
                  value={name}
                  onChange={event => setName(event.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

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

              <div className={`mt-5 ${userType === "user" ? "hidden" : "block"}`}>
                <label
                  htmlFor="location"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Категория
                </label>
                <select
                  id="location"
                  value={category}
                  onChange={(event) => setCategory(event.target.value)}
                  name="location"
                  className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
                >
                  <option value="universal">Универсал</option>
                  <option value="Футболки">Футболки</option>
                </select>
              </div>
            </div>

            <div>
              <button
                type="submit"
                onClick={async () => {
                  if(userType === "user") {
                    try {
                      const response = await registerUser({
                        name,
                        email,
                        password
                      })
                      if(response) {
                        router.push("/sign-in")
                      }
                    } catch(error) {
                      console.log(error)
                    }
                  } else {
                    try {
                      const response = await registerTailor({
                        name,
                        email,
                        password,
                        category
                      })
                      if(response) {
                        router.push("/sign-in")
                      }
                    } catch(error) {
                      console.log(error)
                    }
                  }
                }}
                className="flex w-full justify-center rounded-md bg-[#6A994E] hover:bg-[#386641] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Зарегистроваться
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
