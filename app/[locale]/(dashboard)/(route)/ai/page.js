"use client"



export default function ChatAssistant() {
   


    return (
       <div className="flex flex-row w-full h-full justify-center items-center">
        <div className="flex flex-row w-full max-w-4xl justify-center items-center">
            <div className="w-1/2">
                <h1 className="font-Bebas text-6xl text-primary">AI Assistant</h1>
                <p className="font-Fira text-md text-zinc-400">OneDay Build has enlisted 4 AI assistants for you to help you with the difficulties and problems you encounter during the build.</p>
                
                </div>   
            <div className="w-1/2">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-4">
                <a className="w-full bg-zinc-900 h-48 rounded-3xl bg-[#FF00FF] relative overflow-hidden">
                    <img src="/avtar/AIAssistant1.png" className="mt-4 ml-16 absolute"  />
                    <h2 className="mt-8 ml-6 text-3xl font-Oswald">Specialist</h2>
                    <p className="mx-6 w-28 leading-4 mt-2 text-sm text-white/70">Ask me any questions you have about building with OneDay Build!</p>
                </a>
                <a className="w-full bg-zinc-900 h-48 rounded-3xl  bg-[#00FFFF] relative overflow-hidden">
                    <img src="/avtar/AIAssistant2.png"  className="mt-4 ml-16 absolute"  />
                    <h2 className="mt-8 ml-6 text-3xl font-Oswald text-[#00008B]">Translation</h2>
                    <p className="mx-6 w-28 leading-4 mt-2 text-sm text-[#00008B]/70">If the platform needs to serve the world, she can translate any language.</p>
               
                </a>
                <a className="w-full bg-zinc-900 h-48 rounded-3xl bg-[#FFA500] relative overflow-hidden">
                    <img src="/avtar/AIAssistant3.png"  className="mt-4 ml-16 absolute"  />
                    <h2 className="mt-8 ml-6 text-3xl font-Oswald">Corder</h2>
                    <p className="mx-6 w-28 leading-4 mt-2 text-sm text-white/70">Next.js expert, whether you ask him all kinds of questions about NextJS!</p>
               
                </a>
                <a className="w-full bg-zinc-900 h-48 rounded-3xl bg-[#FFFF00] relative overflow-hidden">
                    <img src="/avtar/AIAssistant4.png"  className="mt-4 ml-12 absolute"  />
                    <h2 className="mt-8 ml-6 text-3xl font-Oswald text-[#00008B]">Writer</h2>
                    <p className="mx-6 w-28 leading-4 mt-2 text-sm text-[#00008B]/70">
                    Terms of use<br />
                    License agreement<br />
                    Privacy policy<br />
                    Readme
                    </p>
               
                </a>
                </div>
                </div>      
            </div>
       </div>
        
    )
    
       
}