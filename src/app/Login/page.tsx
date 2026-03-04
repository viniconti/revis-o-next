import Image from "next/image"

import loginSVG from '../../../public/login.svg'


export default function Login() {
    return (
        <main className="flex justify-center items-center min-h-dvh bg-slate-300">
            <form className="flex flex-col justify-center items-center gap-4 bg-white rounded-md p-8 shadow">
                <Image
                    src={loginSVG}
                    alt="Login svg"
                    width={135}
                    height={135}
                />
                <div className="flex flex-col gap-4">
                    <input
                        className="text-neutral-800 py-2 px-2 rounded-md border border-slate-400 w-full focus-within:border-slate-500 outline-0"
                        id="email"
                        type="email"
                        placeholder="E-mail"
                    />

                    <input
                        className="text-neutral-800 py-2 px-2 rounded-md border w-full border-slate-400 focus-within:border-slate-500 outline-0"
                        id="password"
                        type="password"
                        placeholder="Senha"
                    />

                    <button className="bg-slate-400 hover:bg-slate-500 transition-colors text-white px-3 py-2 rounded-md" type="submit">Login</button>
                </div>
            </form>
        </main>
    )
}













