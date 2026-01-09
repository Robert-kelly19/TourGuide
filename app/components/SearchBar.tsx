'use client'
import React, { useState } from 'react'
import {Search} from 'lucide-react'
import { useRouter } from 'next/navigation';


export default function SearchBar() {
  const [query, setQuery] = useState('')
  const router = useRouter();
  const handleSubmit = ()=>{
    if(!query) return;
    localStorage.setItem('search', query);
    router.push("/results")
    setQuery('')

  }
  return (
    <div className='mt-10'>
        <input type="text" placeholder="Enter A country or Town" value={query} onChange={(e) =>setQuery(e.target.value) } className='border-2 border-gray-450 rounded-xl p-2 w-2xl'/>
        <button onClick={handleSubmit} className='-ml-9 p-2 bg-blue-500 rounded-xl text-white hover:bg-blue-600'><Search size={16}/></button>
    </div>
  )
}
