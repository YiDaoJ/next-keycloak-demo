import { getServerSession } from 'next-auth'
import { options } from './api/auth/[...nextauth]/options'

export default async function Home() {

  const session = await getServerSession(options)

  return (
    <>
      {
        session ? (
          <h1>User logged in</h1>
        ) : (
          <h1>You shall not pass!</h1>
        )
      }
    </>
  )
}
