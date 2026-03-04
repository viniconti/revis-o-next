'use client';

import Image from "next/image"

import loginSVG from '../../../public/login.svg'
import { useForm } from "react-hook-form"
import z from "zod";
import { loginSchema } from "@/src/utils/schemas/loginSchema";
import { Span } from "next/dist/trace";
import { zodResolver } from "@hookform/resolvers/zod";



type LoginInputdata = z.infer<typeof loginSchema>;

export default function Login() {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<LoginInputdata>({
        resolver: zodResolver(loginSchema),
    });

    function handleLogin(inputData: LoginInputdata) {
        console.log(errors);
        console.log(inputData);
    }

    return (
        <main className="flex justify-center items-center min-h-dvh bg-slate-300">
            <form
                onSubmit={handleSubmit(handleLogin)}
                className="flex flex-col justify-center items-center gap-4 bg-white rounded-md p-8 shadow">
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
                        {...register('email' )}
                    />

                    {errors?.email && <span className="text-sm text-red-600">{errors.email.message}</span>}
                </div>

                <div className="flex flex-col gap-4">
                    <input
                        className="text-neutral-800 py-2 px-2 rounded-md border w-full border-slate-400 focus-within:border-slate-500 outline-0"
                        id="password"
                        type="password"
                        placeholder="Senha"
                        {...register('password')}
                    />

                    {errors?.password && <span className="text-sm text-red-600">{errors.password.message}</span>}
                </div>

                <button className="bg-slate-400 hover:bg-slate-500 transition-colors text-white w-full px-3 py-2 rounded-md" type="submit">Login</button>
            </form>
        </main>
    )
}













