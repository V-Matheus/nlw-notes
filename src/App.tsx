import { useState } from 'react'
import NewNoteCard from './Components/NewNoteCard'
import NoteCard from './Components/NoteCard'
import logo from './assets/Logo.svg'

function App() {

  interface Note {
    id: string,
    date: Date,
    content: string
  }

  const [notes, setNotes] = useState<Note[]>(() => {
    const noteOnStorage = localStorage.getItem('notes')

    if (noteOnStorage) {
      return JSON.parse(noteOnStorage)
    }
    return []
  })

  function onNoteCreated(content: string) {
    const newNote = {
      id: crypto.randomUUID(),
      date: new Date(),
      content
    }

    const noteArray = [newNote, ...notes]

    setNotes(noteArray)

    localStorage.setItem('notes', JSON.stringify(noteArray))
  }

  return (
    <div className='mx-auto max-w-6xl my-12 space-y-6'>
      <img src={logo} alt="nlw-expert" />
      <form className='w-full mt-6'>
        <input placeholder='Busque em suas notas...' type="text" name="" id="" className='w-full bg-transparent text-3xl font-semibold tracking-tight outline-none placeholder:text-slate-500' />
      </form>

      <div className='h-px bg-slate-700' />

      <div className='grid grid-cols-3 p-4 gap-6 auto-rows-[250px] overflow-hidden'>
        <NewNoteCard onNoteCreated={onNoteCreated} />

        {notes.map((note) => {
          return <NoteCard key={note.id} note={note} />
        })}
      </div>
    </div>
  )
}

export default App
