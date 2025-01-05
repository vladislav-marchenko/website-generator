import { FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const host = window.location.host

export const Home = () => {
  const navigate = useNavigate()
  const [name, setName] = useState('')

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()

    const isFree = true
    if (isFree) navigate(`/create/${name}`)
  }

  return (
    <div className='flex h-full flex-col'>
      <header className='flex items-center justify-between bg-neutral-500 p-4'>
        <span>Logo</span>
        <button>Connect</button>
      </header>
      <div className='flex justify-center'>
        <form onSubmit={onSubmit} className='flex flex-col gap-2'>
          <div className='rounded-md bg-neutral-200 pr-4'>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className='h-full bg-transparent p-4 pr-0 text-right'
              placeholder='yoursite_name'
            />
            <span className='font-semibold'>.{host}</span>
          </div>
          <button
            type='submit'
            className='rounded-md bg-blue-400 px-4 py-2 text-white'
          >
            Create
          </button>
        </form>
      </div>
      <TestForm />
    </div>
  )
}
