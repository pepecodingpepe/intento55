import { useSession, signIn, signOut } from "next-auth/react"




export default function Component() {
  const { data: session } = useSession()
  if (session) {
    return (
      
      


  

      
      <section className="min-h-fit flex items-center justify-center">

      
<p className="flex-wrap font-mono text-4xl text-center font-bold mb-2 py-10 mx-44">Iniciaste sesión como {session.user.email}</p> <br />
        <button className="bg-fuchsia-700 hover:bg-orange-400 rounded-xl mr-8 mt-px-8" onClick={() => signOut()}><p className="flex-wrap text-5xl text-center text-white  font-bold mb-2 py-10 mx-12">Sign Out</p></button>
 
      </section>

    )


  }
  return (
    
    <section className="h-96 flex items-center justify-center">


    
<p className="flex-wrap font-mono text-4xl text-center font-bold mb-2 py-10 mx-44">Aún no has iniciado sesión</p> <br />
      <button className="bg-fuchsia-700 hover:bg-orange-400 rounded-xl mr-8 mt-px-8" onClick={() => signIn()}><p className="flex-wrap text-5xl text-center text-white  font-bold mb-2 py-10 mx-12">Iniciar Sesión</p></button>

    </section>
    
  )
}




