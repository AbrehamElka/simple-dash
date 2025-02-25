"use client"

import { useSession } from 'next-auth/react';
import React from 'react'

const Dashboard = () => {
    const { data: session } = useSession();

    return(
    <>
        {
            (session) ? (
                <>
                    <h1 className='text-3xl text-green font-bold'>Welcom Back {session.user?.name}</h1>
                    
                </>
                
            ) :
            (
                <>
                    <h1 className='text-3xl text-red-500 font-bold'>You need to log in</h1>
                </>
            )
        }
    </>);
}

export default Dashboard