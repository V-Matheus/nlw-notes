import { useState } from 'react'
import NewNoteCard from './Components/NewNoteCard'
import NoteCard from './Components/NoteCard'
import logo from './assets/Logo.svg'

interface Note {
  id: string,
  date: Date,
  content: string
}

function App() {

  const [search, setSearch] = useState('')
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

  function handleSearch(event: React.ChangeEvent<HTMLInputElement>) {
    const query = event.target.value

    setSearch(query)
  }

  const filteredNotes = search !== ''
    ? notes.filter(note => note.content.toLowerCase().includes(search.toLowerCase()))
    : notes

  return (
    <div className='mx-auto max-w-6xl my-12 space-y-6 px-5'>
      <img src={logo} alt="nlw-expert" />
      <form className='w-full mt-6'>
        <input
          placeholder='Busque em suas notas...'
          type="text"
          className='w-full bg-transparent text-3xl font-semibold tracking-tight outline-none placeholder:text-slate-500'
          onChange={handleSearch}
        />

      </form>

      <div className='h-px bg-slate-700' />

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-4 gap-6 auto-rows-[250px] overflow-hidden '>
        <NewNoteCard onNoteCreated={onNoteCreated} />

        {filteredNotes.map((note) => {
          return <NoteCard key={note.id} note={note} />
        })}
      </div>
    </div>
  )
}

export default App
