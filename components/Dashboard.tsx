"use client"

import { signIn, signOut, useSession } from 'next-auth/react';
import { Button } from './ui/button';
import React from 'react'

const Dashboard = () => {
    const { data: session } = useSession();

    return(
    <>
        {
            (session) ? (
                <>
                    <h1 className='text-3xl text-green font-bold'>Welcom Back</h1>
                    <Button onClick={() => signOut()}>Sign Out</Button>
                </>
                
            ) :
            (
                <>
                    <h1 className='text-3xl text-red-500 font-bold'>You need to log in</h1>
                    <Button onClick={() => signIn('github')}>Sign in with Github</Button>
                </>
            )
        }
    </>);
}

export default Dashboard