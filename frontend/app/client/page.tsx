'use client'
import { useSession, signOut } from 'next-auth/react'
// for client components useSession, Authprovider is necessary

import React from 'react'

export default function ClientPage() {

  const {data: session} = useSession()

  if (session) {
    return (
      <>
        Signed in<br />
        {/* <button onClick={() => signOut()}>Sign out</button> */}
      </>
    )
  }

  return (
    <div>Not signed in</div>
  )
}
