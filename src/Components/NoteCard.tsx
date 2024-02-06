import React from 'react'

const NoteCard = () => {
  return (
  <button className='rounded-md text-left outline-none bg-slate-800 p-5 space-y-3 overflow-hidden relative hover:ring-2 hover:ring-slate-600 focus:ring-2 focus:ring-lime-400'>
        <span className='text-sm font-medium text-slate-200'>Há 4 dias</span>
        <p className='text-sm leading-6 text-slate-300'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum laboriosam, reprehenderit tempore, modi delectus deserunt vitae assumenda sit nemo rem similique fugiat consequatur totam est tempora accusantium, saepe provident fuga.</p>

        <div className='absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/60 to-black/0 pointer-events-none' />  
      </button>
  )
}

export default NoteCard