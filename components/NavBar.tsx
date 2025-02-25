"use client"

import React from 'react'
import { signIn, signOut, useSession } from 'next-auth/react'
import { Button } from './ui/button'
const NavBar = () => {
    const {data: session} = useSession();
    return (
        <nav className='flex justify-between px-5 py-3 bg-slate-800 text-yellow-100'>
            <h2>Simple Dashboard</h2>
            <ul>
                { (session) ? (
                    <li><Button onClick={() => signOut()}>Sign Out</Button></li>
                ) : (
                    <li><Button onClick={() => signIn('github')}>Sign in with Github</Button></li>   
                )
                }
                
            </ul>
        </nav>
    )
}

export default NavBar