'use client';
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import Image from "next/image";
import { useEffect, useState } from "react";
export default function ProfilePage(){
    const session = useSession();
    const {status} = session;
    const [userName, setUserName] = useState('');

    useEffect(()=>{
        if(status === "authenticated"){
            setUserName(session.data.user.name);
        }
    }, [session,status]);

    async function handleProfileInfoUpdate(ev){
        ev.preventDefault();
        const response = await fetch('/api/profile',{
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({name:userName}),

        });
    }

    if (status === 'loading'){
        return 'Loading...';
    }

    if (status === 'unauthenticated'){
        return redirect('/login');
    }
    
    const userImage = session.data.user.image;
    return(
        <section className="mt-8">
            <h1 className="text-center text-primary text-4xl mb-4 mt-8">
                Profile
            </h1>
            <div className="max-w-md mx-auto">
                <div className="flex gap-4 items-center">
                    <div>
                        <div className=" p-2 rounded-lg relative">
                                <Image className="rounded-lg w-full h-full mb-1" 
                                src={userImage} height={250} width={250} alt={'avatar'}/>                       
                            <button type="button">
                                Edit
                            </button>
                        </div>
                    </div>
                    <form className="grow" onSubmit={handleProfileInfoUpdate}>
                        <input type="text" placeholder="First and Last Name"
                            value={userName} onChange={ev => setUserName(ev.target.value)}/>
                        <input type="email" disabled = {true} value={session.data.user.email}/>
                        <button type="submit">Save</button>
                    </form>
                </div>
            </div>
        </section>
    );
}