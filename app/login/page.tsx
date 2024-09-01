import React, { useState } from 'react'

import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const handleSubmit = () => {};

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

  return (
    <main>
        <div className='align-middle justify-center'>
            <div className="max-w-md  my-40 mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-black border">
                <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
                    Welcome back!
                </h2>
            <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
                Please fill in your details to login.
            </p>

            <form className="my-8" onSubmit={handleSubmit}>
                
                <LabelInputContainer className="mb-4">
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" placeholder="myemail@example.com" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </LabelInputContainer>

                <LabelInputContainer className="mb-4 pb-5">
                    <Label htmlFor="password">Password</Label>
                    <Input id="password" placeholder="••••••••" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </LabelInputContainer>
    
                <button
                className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 hover:border-2 hover:border-slate-700  w-full text-white rounded-md h-10 font-medium"
                type="submit"
                >
                    Login &rarr;
                </button>

            </form>

        </div>
      </div>
    </main>
  )
}

const Input = ({...props}: React.ComponentPropsWithoutRef<'input'>) => {
    return (
        <>
            <input
            type='text'
            className="flex h-10 w-full border-none bg-gray-50 dark:bg-zinc-800 text-black dark:text-white shadow-input rounded-md px-3 py-2 text-sm  file:border-0 file:bg-transparent 
            file:text-sm file:font-medium placeholder:text-neutral-400 dark:placeholder-text-neutral-600 
            focus-visible:outline-none focus-visible:ring-[2px]  focus-visible:ring-neutral-400 dark:focus-visible:ring-neutral-600
            disabled:cursor-not-allowed disabled:opacity-50
            dark:shadow-[0px_0px_1px_1px_var(--neutral-700)]
            group-hover/input:shadow-none transition duration-400"
            {...props}/>
        </>
    )
}

const Label = ({children, ...props}: React.ComponentPropsWithoutRef<'label'>) => {
    return (
        <>
            <label className="text-sm font-medium text-black dark:text-white leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" 
            {...props}>
                {children}
            </label>
        </>
    )
}

const LabelInputContainer = ({
    children,
    className,
  }: {
    children: React.ReactNode;
    className?: string;
  }) => {
    return (
      <div className={cn("flex flex-col space-y-2 w-full", className)}>
        {children}
      </div>
    );
  };

export default Login