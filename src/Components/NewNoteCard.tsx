import React, { ChangeEvent, FormEvent, useState } from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import { X } from 'lucide-react'
import { toast } from 'sonner'

interface NewNoteCardProps {
  onNoteCreated: (coontent: string) => void
}

const NewNoteCard = ({ onNoteCreated }: NewNoteCardProps) => {

  const [shouldShowOnBording, setShouldShowOnBording] = useState(true)
  const [content, setContent] = useState('')

  function handleStartEditor() {
    setShouldShowOnBording(false)
  }

  function handleContentChanged(event: ChangeEvent<HTMLTextAreaElement>) {
    setContent(event.target.value)

    if (event.target.value === '') {
      setShouldShowOnBording(true)
    }
  }

  function handleSaveNote(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    onNoteCreated(content)

    setContent('')
    setShouldShowOnBording(true)

    toast.success('Nota criada com sucesso')
  }

  return (
    <Dialog.Root>
      <Dialog.Trigger className='rounded-md flex flex-col bg-slate-700 p-5 gap-y-3 outline-none text-left hover:ring-2 hover:ring-slate-600 focus:ring-2 focus:ring-lime-400'>
        <span className='text-sm font-medium text-slate-200'>Adicionar Nota</span>
        <p className='text-sm leading-6 text-slate-400'>Grave uma nota em áudio que será convertida para texto automaticamente.</p>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className='inset-0 fixed bg-black/50' />
        <Dialog.Content className='fixed left-1/2 top-1/2 overflow-hidden -translate-x-1/2 -translate-y-1/2 max-w-[640px] w-full h-[60vh] bg-slate-700 rounded-md flex flex-col outline-none'>

          <Dialog.Close className='absolute right-0 top-0 bg-slate-800 p-1.5 text-slate-400 hover:text-slate-100'>
            <X className='size-5' />
          </Dialog.Close>

          <form className='flex-1 flex flex-col' onSubmit={handleSaveNote}>

            <div className='flex flex-1 flex-col gap-3 p-5'>
              <span className='text-sm font-medium text-slate-200'>Adicionar nota</span>

              {shouldShowOnBording ? <p className='text-sm leading-6 text-slate-300'>Comece <button className='font-medium text-lime-400 hover:underline' >gravando uma nota</button> em áudio ou se preferir <button onClick={handleStartEditor} className='font-medium text-lime-400 hover:underline' >utilize apenas texto</button>.</p> : <textarea
                autoFocus
                className='text-sm leading-6 text-slate-400 bg-transparent resize-none flex-1 outline-none'
                onChange={handleContentChanged}
                value={content}
              >

              </textarea>}

            </div>

            <button
              type='submit'
              className='w-full bg-lime-400 py-4 text-center text-sm text-lime-950 outiline-none font-medium hover:bg-lime-500'>
              Salvar Nota
            </button>
          </form>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root >
  )
}

export default NewNoteCard