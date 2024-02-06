import logo from './assets/Logo.svg'

function App() {
  return (
    <div className='mx-auto max-w-6xl my-12 space-y-6'>
      <img src={logo} alt="nlw-expert" />
      <form className='w-full mt-6'>
        <input placeholder='Busque em suas notas...' type="text" name="" id="" className='w-full bg-transparent text-3xl font-semibold tracking-tight outline-none placeholder:text-slate-500' />
      </form>

      <div className='h-px bg-slate-700'/>

      <div className='grid grid-cols-3 gap-6 auto-rows-[250px] overflow-hidden'>
        <div className='rounded-md bg-slate-700 p-5 space-y-3 '>
          <span className='text-sm font-medium text-slate-200'>Adicionar Nota</span>
          <p className='text-sm leading-6 text-slate-400'>Grave uma nota em áudio que será convertida para texto automaticamente.</p>
        </div>

        <div className='rounded-md bg-slate-800 p-5 space-y-3 overflow-hidden relative'>
          <span className='text-sm font-medium text-slate-200'>Há 2 dias</span>
          <p className='text-sm leading-6 text-slate-300'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto aspernatur eos suscipit perferendis tenetur officiis qui explicabo est earum accusantium rem, veritatis ipsam ipsum et quis maiores, molestias sunt commodi? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto aspernatur eos suscipit perferendis tenetur officiis qui explicabo est earum accusantium rem, veritatis ipsam ipsum et quis maiores, molestias sunt commodi?</p>

          <div className='absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/60 to-black/0 pointer-events-none'/>
        </div>

        <div className='rounded-md bg-slate-800 p-5 space-y-3 overflow-hidden relative'>
          <span className='text-sm font-medium text-slate-200'>Há 4 dias</span>
          <p className='text-sm leading-6 text-slate-300'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum laboriosam, reprehenderit tempore, modi delectus deserunt vitae assumenda sit nemo rem similique fugiat consequatur totam est tempora accusantium, saepe provident fuga.</p>

          <div className='absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/60 to-black/0 pointer-events-none' />  
        </div>

        <div className='rounded-md bg-slate-800 p-5 space-y-3 overflow-hidden relative'>
          <span className='text-sm font-medium text-slate-200'>Há 4 dias</span>
          <p className='text-sm leading-6 text-slate-300'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum laboriosam, reprehenderit tempore, modi delectus deserunt vitae assumenda sit nemo rem similique fugiat consequatur totam est tempora accusantium, saepe provident fuga.</p>

          <div className='absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/60 to-black/0 pointer-events-none' />  
        </div>
      </div>
    </div>
  )
}

export default App
