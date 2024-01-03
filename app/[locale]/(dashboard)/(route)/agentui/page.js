import React from 'react'

const agentui = () => {
  return (
    <div className='w-full flex justify-center items-center h-full flex-col'>
      <img src='/icon/agentui-logo.svg' className='w-28 rounded-full' />
      <div className='text-2xl font-inter  text-zinc-200'>agentUI</div>
      <div className='text-xl w-1/2 font-Fira text-zinc-500'>agentUI focuses on AI apps with a library of UI components to help you quickly build your own AI apps</div>

      <div class="grid md:grid-cols-4 sm:grid-cols-2 2xl:grid-cols-5 gap-4 w-full px-16 mt-8">
        
        <a href="https://www.agentui.dev/components/prompt-inputs" target='_blank' class="flex dark:bg-zinc-800 h-40 rounded-xl justify-center items-center  bg-zinc-200 border border-zinc-700 hover:border-primary p-4 flex-col"><img src='/icon/UI-Input.svg' className='w-8' /><div className='text-md text-zinc-200 font-inter mt-2'>Inputs</div><div className='text-zinc-500 text-sm font-Fira'>Prompt Input</div></a>
        <a href="https://www.agentui.dev/components/cards" target='_blank' class="flex dark:bg-zinc-800 h-40 rounded-xl justify-center items-center  bg-zinc-200 border border-zinc-700 hover:border-primary p-4 flex-col"><img src='/icon/UI-Cards.svg' className='w-8' /><div className='text-md text-zinc-200 font-inter mt-2'>Cards</div><div className='text-zinc-500 text-sm font-Fira'>Contents on Cards</div></a>
        <a href="https://www.agentui.dev/components/dialog" target='_blank' class="flex dark:bg-zinc-800 h-40 rounded-xl justify-center items-center  bg-zinc-200 border border-zinc-700 hover:border-primary p-4 flex-col"><img src='/icon/UI-Dialog.svg' className='w-8' /><div className='text-md text-zinc-200 font-inter mt-2'>Chat</div><div className='text-zinc-500 text-sm font-Fira'>Interactions on Chat</div></a>
        <a href="https://www.agentui.dev/components/form" target='_blank' class="flex dark:bg-zinc-800 h-40 rounded-xl justify-center items-center  bg-zinc-200 border border-zinc-700 hover:border-primary p-4 flex-col"><img src='/icon/UI-Form.svg' className='w-8' /><div className='text-md text-zinc-200 font-inter mt-2'>Froms</div><div className='text-zinc-500 text-sm font-Fira'>From Components</div></a>
        <a href="https://www.agentui.dev/components/galley" target='_blank' class="flex dark:bg-zinc-800 h-40 rounded-xl justify-center items-center  bg-zinc-200 border border-zinc-700 hover:border-primary p-4 flex-col"><img src='/icon/UI-Galley.svg' className='w-8' /><div className='text-md text-zinc-200 font-inter mt-2'>Galley</div><div className='text-zinc-500 text-sm font-Fira'>Generate image galley</div></a>
        <a href="https://www.agentui.dev/components/table" target='_blank' class="flex dark:bg-zinc-800 h-40 rounded-xl justify-center items-center  bg-zinc-200 border border-zinc-700 hover:border-primary p-4 flex-col"><img src='/icon/UI-Table.svg' className='w-8' /><div className='text-md text-zinc-200 font-inter mt-2'>Tables</div><div className='text-zinc-500 text-sm font-Fira'>Data presentation</div></a>
        <a href="https://www.agentui.dev/components/video" target='_blank' class="flex dark:bg-zinc-800 h-40 rounded-xl justify-center items-center  bg-zinc-200 border border-zinc-700 hover:border-primary p-4 flex-col"><img src='/icon/UI-Video.svg' className='w-8' /><div className='text-md text-zinc-200 font-inter mt-2'>Video</div><div className='text-zinc-500 text-sm font-Fira'>Video Player</div></a>
        <a href="https://www.agentui.dev/components/loading" target='_blank' class="flex dark:bg-zinc-800 h-40 rounded-xl justify-center items-center  bg-zinc-200 border border-zinc-700 hover:border-primary p-4 flex-col"><img src='/icon/UI-Loading.svg' className='w-8' /><div className='text-md text-zinc-200 font-inter mt-2'>Loading</div><div className='text-zinc-500 text-sm font-Fira'>Generate Loading</div></a>
        <a href="https://www.agentui.dev/components/sidemenu" target='_blank' class="flex dark:bg-zinc-800 h-40 rounded-xl justify-center items-center  bg-zinc-200 border border-zinc-700 hover:border-primary p-4 flex-col"><img src='/icon/UI-Menu.svg' className='w-8' /><div className='text-md text-zinc-200 font-inter mt-2'>Menu</div><div className='text-zinc-500 text-sm font-Fira'>Side menu</div></a>
        <a href="https://www.agentui.dev/components/layout" target='_blank' class="flex dark:bg-zinc-800 h-40 rounded-xl justify-center items-center  bg-zinc-200 border border-zinc-700 hover:border-primary p-4 flex-col"><img src='/icon/UI-Layout.svg' className='w-8' /><div className='text-md text-zinc-200 font-inter mt-2'>Layouts</div><div className='text-zinc-500 text-sm font-Fira'>System layouts</div></a>

      </div>
     
    </div>
  )
}

export default agentui