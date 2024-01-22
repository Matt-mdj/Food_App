"use client";
import { useState } from "react";
import {signIn} from "next-auth/react";
import Image from "next/image";

export default function LoginPage(){
    const [email , setEmail] = useState('');
    const [password , setPassword] = useState('');
    const [loginInProgess, setLoginInProgress] = useState(false);
    async function handleFormSubmit(ev){
        ev.preventDefault();
        setLoginInProgress(true);
        await signIn('credentials', {email, password, callbackUrl:'/'});
        setLoginInProgress(false);
    }
    return(
        <section className="mt-8">
            <h1 className="text-center text-primary text-4xl mb-4">
                Login
            </h1>
            <form className="max-w-xs mx-auto" onSubmit={handleFormSubmit}> 
                <input type="email"  placeholder="email" name="email" value={email} 
                    disabled = {loginInProgess}
                    onChange={ev => setEmail(ev.target.value)}/>
                <input type="password"  placeholder="password" name="password" value={password}
                    disabled = {loginInProgess}
                    onChange={ev => setPassword(ev.target.value)}/>
                    <button disabled={loginInProgess} type="submit">Login</button>
                    <div className="my-4 text-center text-gray-500">
                    or log in with provider
                    </div>
                    <button onClick={() => signIn('google', {callbackUrl:'/'})} 
                        className="flex gap-4 justify-center">
                        <Image src={'/google.png'} alt={''} width={24} height={24}/>
                        Login with Google
                    </button>
            </form>          
        </section>
    );
}